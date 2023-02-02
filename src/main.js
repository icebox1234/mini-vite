// import { str } from './moduleA.js';
// console.log('vite ...');
// console.log(`from moduleA ---> ${str}`)

// ---------------------------------------------------

import { createApp, h } from 'vue';
import App from './App.vue';
// const App = {
//     render() {
//         return h('div', null, [h('div', null, 'Hello Vite')]);
//     }
// };

createApp(App).mount('#app')