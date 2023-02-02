const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const compilerSFC = require('@vue/compiler-sfc');
const compilerDOM = require('@vue/compiler-dom');

const app = new Koa();

function rewriteImport(source = '') {
    return source.replace(
        /(from)\s*(\'|\")(\S*?)(\2)/g,
        /* '$1 $2/@modules/$3$4' */(match, $1, $2, $3, $4) => {
            if ($3[0] !== '.' && $3[0] !== '/') {
                return `${$1} ${$2}/@modules/${$3}${$4}`;
            }
            return match;
        }
    );
}

function addEnv(source = '') {
    return source.replace(/(\<head\>)/, `$1<script>
    window.process = {
        env: {
            NODE_ENV: 'dev'
        }
    }
</script>`)
}

function addStyle(source = '', style = '') {
    // const head = document.querySelector('head');
    // const style = document.createElement('style');
    // style.innerHTML = '.red{color:red}';
    // head.appendChild(style);
    // console.log(style);
    return `${source}; const head = document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML = '${style.replace(/\s*/g, '')}';
    head.appendChild(style);`
}

app.use(async ctx => {
    const { url, query } = ctx.request;
    if (url === '/') {
        const content = fs.readFileSync('./index.html', { encoding: 'utf-8' });
        ctx.type = 'text/html';
        ctx.body = addEnv(content);
    } else if (url.endsWith('.js')) {
        const p = path.resolve(__dirname, url.slice(1));
        const content = fs.readFileSync(p, { encoding: 'utf-8' });
        ctx.type = 'application/javascript';
        ctx.body = rewriteImport(content);
    } else if (url.startsWith('/@modules')) {
        const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@modules/', ''));
        const packagePath = path.resolve(prefix, 'package.json');
        const packageConfig = require(packagePath);
        const module = packageConfig.module;
        const modulePath = path.resolve(prefix, module);
        const content = fs.readFileSync(modulePath, { encoding: 'utf-8' });
        ctx.type = 'application/javascript';
        ctx.body = rewriteImport(content);
    } else if (url.indexOf('.vue') !== -1) {

        const vuePath = path.resolve(__dirname, url.split('?')[0].slice(1));
        const content = fs.readFileSync(vuePath, { encoding: 'utf-8' });
        const { descriptor } = compilerSFC.parse(content);
        if (!query.type) {
            ctx.type = 'application/javascript';
            ctx.body = `
                ${rewriteImport(descriptor.script.content.replace('export default', 'const __script = '))}
                import { render as __render, scopeId as __scopeId } from '${url}?type=template';
                __script.render = __render;
                __script.__scopeId = __scopeId;
                export default __script;
            `;
        } else if (query.type === 'template') {
            const template = descriptor.template;
            const test = compilerSFC.compileStyle({ source: descriptor.styles[0].content, scoped: true, id: 'data-v-7a7a37b1' });
            const render = compilerDOM.compile(template.content, { mode: 'module', hoistStatic: true, scopeId: 'data-v-7a7a37b1', scoped: true });
            ctx.type = 'application/javascript';
            ctx.body = addStyle(`${rewriteImport(render.code)} export const scopeId = 'data-v-7a7a37b1';`, test.code);
        }
    }
});

const server = app.listen(3000, () => {
    // console.log('listening');
});

server.on('connection', () => {
    // console.log('someone there!');
})

