let a = {
    "descriptor": {
        "filename": "anonymous.vue",
        "source": `<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from 
  'vue'; \r\nconst count = ref(6); \r\nfunction add() { \r\n    count.value++; \r\n } \r\n</script>\r\n`,
        "template": {
            "type": "template",
            "content": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
            "loc": {
                "source": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
                "start": {
                    "column": 11,
                    "line": 1,
                    "offset": 10
                },
                "end": {
                    "column": 1,
                    "line": 4,
                    "offset": 81
                }
            },
            "attrs": {},
            "ast": {
                "type": 1,
                "ns": 0,
                "tag": "template",
                "tagType": 0,
                "props": [],
                "isSelfClosing": false,
                "children": [
                    {
                        "type": 2,
                        "content": "    ",
                        "loc": {
                            "start": {
                                "column": 11,
                                "line": 1,
                                "offset": 10
                            },
                            "end": {
                                "column": 5,
                                "line": 2,
                                "offset": 16
                            },
                            "source": "\r\n    "
                        }
                    },
                    {
                        "type": 1,
                        "ns": 0,
                        "tag": "div",
                        "tagType": 0,
                        "props": [],
                        "isSelfClosing": false,
                        "children": [
                            {
                                "type": 5,
                                "content": {
                                    "type": 4,
                                    "isStatic": false,
                                    "constType": 0,
                                    "content": "count",
                                    "loc": {
                                        "start": {
                                            "column": 13,
                                            "line": 2,
                                            "offset": 24
                                        },
                                        "end": {
                                            "column": 18,
                                            "line": 2,
                                            "offset": 29
                                        },
                                        "source": "count"
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "column": 10,
                                        "line": 2,
                                        "offset": 21
                                    },
                                    "end": {
                                        "column": 21,
                                        "line": 2,
                                        "offset": 32
                                    },
                                    "source": "{{ count }}"
                                }
                            }
                        ],
                        "loc": {
                            "start": {
                                "column": 5,
                                "line": 2,
                                "offset": 16
                            },
                            "end": {
                                "column": 27,
                                "line": 2,
                                "offset": 38
                            },
                            "source": "<div>{{ count }}</div>"
                        }
                    },
                    {
                        "type": 2,
                        "content": "\n    ",
                        "loc": {
                            "start": {
                                "column": 27,
                                "line": 2,
                                "offset": 38
                            },
                            "end": {
                                "column": 5,
                                "line": 3,
                                "offset": 44
                            },
                            "source": "\r\n    "
                        }
                    },
                    {
                        "type": 1,
                        "ns": 0,
                        "tag": "button",
                        "tagType": 0,
                        "props": [
                            {
                                "type": 7,
                                "name": "on",
                                "exp": {
                                    "type": 4,
                                    "content": "add",
                                    "isStatic": false,
                                    "constType": 0,
                                    "loc": {
                                        "start": {
                                            "column": 21,
                                            "line": 3,
                                            "offset": 60
                                        },
                                        "end": {
                                            "column": 24,
                                            "line": 3,
                                            "offset": 63
                                        },
                                        "source": "add"
                                    }
                                },
                                "arg": {
                                    "type": 4,
                                    "content": "click",
                                    "isStatic": true,
                                    "constType": 3,
                                    "loc": {
                                        "start": {
                                            "column": 14,
                                            "line": 3,
                                            "offset": 53
                                        },
                                        "end": {
                                            "column": 19,
                                            "line": 3,
                                            "offset": 58
                                        },
                                        "source": "click"
                                    }
                                },
                                "modifiers": [],
                                "loc": {
                                    "start": {
                                        "column": 13,
                                        "line": 3,
                                        "offset": 52
                                    },
                                    "end": {
                                        "column": 25,
                                        "line": 3,
                                        "offset": 64
                                    },
                                    "source": "@click=\"add\""
                                }
                            }
                        ],
                        "isSelfClosing": false,
                        "children": [
                            {
                                "type": 2,
                                "content": "add 1",
                                "loc": {
                                    "start": {
                                        "column": 26,
                                        "line": 3,
                                        "offset": 65
                                    },
                                    "end": {
                                        "column": 31,
                                        "line": 3,
                                        "offset": 70
                                    },
                                    "source": "add 1"
                                }
                            }
                        ],
                        "loc": {
                            "start": {
                                "column": 5,
                                "line": 3,
                                "offset": 44
                            },
                            "end": {
                                "column": 40,
                                "line": 3,
                                "offset": 79
                            },
                            "source": "<button @click=\"add\">add 1</button>"
                        }
                    },
                    {
                        "type": 2,
                        "content": "\n",
                        "loc": {
                            "start": {
                                "column": 40,
                                "line": 3,
                                "offset": 79
                            },
                            "end": {
                                "column": 1,
                                "line": 4,
                                "offset": 81
                            },
                            "source": "\r\n"
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "column": 1,
                        "line": 1,
                        "offset": 0
                    },
                    "end": {
                        "column": 12,
                        "line": 4,
                        "offset": 92
                    },
                    "source": "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>"
                }
            },
            "map": {
                "version": 3,
                "sources": [
                    "anonymous.vue"
                ],
                "names": [],
                "mappings": ";IACI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC",
                "file": "anonymous.vue",
                "sourceRoot": "",
                "sourcesContent": [
                    "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script>\r\n"
                ]
            }
        },
        "script": null,
        "scriptSetup": {
            "type": "script",
            "content": "\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n",
            "loc": {
                "source": "\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n",
                "start": {
                    "column": 15,
                    "line": 6,
                    "offset": 110
                },
                "end": {
                    "column": 1,
                    "line": 12,
                    "offset": 204
                }
            },
            "attrs": {
                "setup": true
            },
            "setup": true
        },
        "styles": [],
        "customBlocks": [],
        "cssVars": [],
        "slotted": false
    },
    "errors": []
};


let b = {
    "descriptor": {
        "filename": "anonymous.vue",
        "source": "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n</script>\r\n",
        "template": {
            "type": "template",
            "content": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
            "loc": {
                "source": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
                "start": {
                    "column": 11,
                    "line": 1,
                    "offset": 10
                },
                "end": {
                    "column": 1,
                    "line": 4,
                    "offset": 81
                }
            },
            "attrs": {},
            "ast": {
                "type": 1,
                "ns": 0,
                "tag": "template",
                "tagType": 0,
                "props": [],
                "isSelfClosing": false,
                "children": [
                    {
                        "type": 2,
                        "content": "    ",
                        "loc": {
                            "start": {
                                "column": 11,
                                "line": 1,
                                "offset": 10
                            },
                            "end": {
                                "column": 5,
                                "line": 2,
                                "offset": 16
                            },
                            "source": "\r\n    "
                        }
                    },
                    {
                        "type": 1,
                        "ns": 0,
                        "tag": "div",
                        "tagType": 0,
                        "props": [],
                        "isSelfClosing": false,
                        "children": [
                            {
                                "type": 5,
                                "content": {
                                    "type": 4,
                                    "isStatic": false,
                                    "constType": 0,
                                    "content": "count",
                                    "loc": {
                                        "start": {
                                            "column": 13,
                                            "line": 2,
                                            "offset": 24
                                        },
                                        "end": {
                                            "column": 18,
                                            "line": 2,
                                            "offset": 29
                                        },
                                        "source": "count"
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "column": 10,
                                        "line": 2,
                                        "offset": 21
                                    },
                                    "end": {
                                        "column": 21,
                                        "line": 2,
                                        "offset": 32
                                    },
                                    "source": "{{ count }}"
                                }
                            }
                        ],
                        "loc": {
                            "start": {
                                "column": 5,
                                "line": 2,
                                "offset": 16
                            },
                            "end": {
                                "column": 27,
                                "line": 2,
                                "offset": 38
                            },
                            "source": "<div>{{ count }}</div>"
                        }
                    },
                    {
                        "type": 2,
                        "content": "\n    ",
                        "loc": {
                            "start": {
                                "column": 27,
                                "line": 2,
                                "offset": 38
                            },
                            "end": {
                                "column": 5,
                                "line": 3,
                                "offset": 44
                            },
                            "source": "\r\n    "
                        }
                    },
                    {
                        "type": 1,
                        "ns": 0,
                        "tag": "button",
                        "tagType": 0,
                        "props": [
                            {
                                "type": 7,
                                "name": "on",
                                "exp": {
                                    "type": 4,
                                    "content": "add",
                                    "isStatic": false,
                                    "constType": 0,
                                    "loc": {
                                        "start": {
                                            "column": 21,
                                            "line": 3,
                                            "offset": 60
                                        },
                                        "end": {
                                            "column": 24,
                                            "line": 3,
                                            "offset": 63
                                        },
                                        "source": "add"
                                    }
                                },
                                "arg": {
                                    "type": 4,
                                    "content": "click",
                                    "isStatic": true,
                                    "constType": 3,
                                    "loc": {
                                        "start": {
                                            "column": 14,
                                            "line": 3,
                                            "offset": 53
                                        },
                                        "end": {
                                            "column": 19,
                                            "line": 3,
                                            "offset": 58
                                        },
                                        "source": "click"
                                    }
                                },
                                "modifiers": [],
                                "loc": {
                                    "start": {
                                        "column": 13,
                                        "line": 3,
                                        "offset": 52
                                    },
                                    "end": {
                                        "column": 25,
                                        "line": 3,
                                        "offset": 64
                                    },
                                    "source": "@click=\"add\""
                                }
                            }
                        ],
                        "isSelfClosing": false,
                        "children": [
                            {
                                "type": 2,
                                "content": "add 1",
                                "loc": {
                                    "start": {
                                        "column": 26,
                                        "line": 3,
                                        "offset": 65
                                    },
                                    "end": {
                                        "column": 31,
                                        "line": 3,
                                        "offset": 70
                                    },
                                    "source": "add 1"
                                }
                            }
                        ],
                        "loc": {
                            "start": {
                                "column": 5,
                                "line": 3,
                                "offset": 44
                            },
                            "end": {
                                "column": 40,
                                "line": 3,
                                "offset": 79
                            },
                            "source": "<button @click=\"add\">add 1</button>"
                        }
                    },
                    {
                        "type": 2,
                        "content": "\n",
                        "loc": {
                            "start": {
                                "column": 40,
                                "line": 3,
                                "offset": 79
                            },
                            "end": {
                                "column": 1,
                                "line": 4,
                                "offset": 81
                            },
                            "source": "\r\n"
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "column": 1,
                        "line": 1,
                        "offset": 0
                    },
                    "end": {
                        "column": 12,
                        "line": 4,
                        "offset": 92
                    },
                    "source": "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>"
                }
            },
            "map": {
                "version": 3,
                "sources": [
                    "anonymous.vue"
                ],
                "names": [],
                "mappings": ";IACI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC",
                "file": "anonymous.vue",
                "sourceRoot": "",
                "sourcesContent": [
                    "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n },\r\n};\r\n</script>\r\n"
                ]
            }
        },
        "script": {
            "type": "script",
            "content": "\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\ncount.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n",
            "loc": {
                "source": "\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\ncount.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n",
                "start": {
                    "column": 9,
                    "line": 14,
                    "offset": 234
                },
                "end": {
                    "column": 1,
                    "line": 25,
                    "offset": 437
                }
            },
            "attrs": {},
            "map": {
                "version": 3,
                "sources": [
                    "anonymous.vue"
                ],
                "names": [],
                "mappings": ";AAcA,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC;AACzB,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;IACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;QACJ,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE;YACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjB;QACA,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC;IACzB,CAAC;AACL,CAAC",
                "file": "anonymous.vue",
                "sourceRoot": "",
                "sourcesContent": [
                    "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n },\r\n};\r\n</script>\r\n"
                ]
            }
        },
        "scriptSetup": null,
        "styles": [],
        "customBlocks": [],
        "cssVars": [],
        "slotted": false
    },
    "errors": []
}


let c = {
    "filename": "anonymous.vue",
    "source": "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\ndiv {\r\n    color: red;\r\n}\r\n</style>\r\n",
    "template": {
        "type": "template",
        "content": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
        "loc": {
            "source": "\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n",
            "start": {
                "column": 11,
                "line": 1,
                "offset": 10
            },
            "end": {
                "column": 1,
                "line": 4,
                "offset": 81
            }
        },
        "attrs": {},
        "ast": {
            "type": 1,
            "ns": 0,
            "tag": "template",
            "tagType": 0,
            "props": [],
            "isSelfClosing": false,
            "children": [
                {
                    "type": 2,
                    "content": "    ",
                    "loc": {
                        "start": {
                            "column": 11,
                            "line": 1,
                            "offset": 10
                        },
                        "end": {
                            "column": 5,
                            "line": 2,
                            "offset": 16
                        },
                        "source": "\r\n    "
                    }
                },
                {
                    "type": 1,
                    "ns": 0,
                    "tag": "div",
                    "tagType": 0,
                    "props": [],
                    "isSelfClosing": false,
                    "children": [
                        {
                            "type": 5,
                            "content": {
                                "type": 4,
                                "isStatic": false,
                                "constType": 0,
                                "content": "count",
                                "loc": {
                                    "start": {
                                        "column": 13,
                                        "line": 2,
                                        "offset": 24
                                    },
                                    "end": {
                                        "column": 18,
                                        "line": 2,
                                        "offset": 29
                                    },
                                    "source": "count"
                                }
                            },
                            "loc": {
                                "start": {
                                    "column": 10,
                                    "line": 2,
                                    "offset": 21
                                },
                                "end": {
                                    "column": 21,
                                    "line": 2,
                                    "offset": 32
                                },
                                "source": "{{ count }}"
                            }
                        }
                    ],
                    "loc": {
                        "start": {
                            "column": 5,
                            "line": 2,
                            "offset": 16
                        },
                        "end": {
                            "column": 27,
                            "line": 2,
                            "offset": 38
                        },
                        "source": "<div>{{ count }}</div>"
                    }
                },
                {
                    "type": 2,
                    "content": "\n    ",
                    "loc": {
                        "start": {
                            "column": 27,
                            "line": 2,
                            "offset": 38
                        },
                        "end": {
                            "column": 5,
                            "line": 3,
                            "offset": 44
                        },
                        "source": "\r\n    "
                    }
                },
                {
                    "type": 1,
                    "ns": 0,
                    "tag": "button",
                    "tagType": 0,
                    "props": [
                        {
                            "type": 7,
                            "name": "on",
                            "exp": {
                                "type": 4,
                                "content": "add",
                                "isStatic": false,
                                "constType": 0,
                                "loc": {
                                    "start": {
                                        "column": 21,
                                        "line": 3,
                                        "offset": 60
                                    },
                                    "end": {
                                        "column": 24,
                                        "line": 3,
                                        "offset": 63
                                    },
                                    "source": "add"
                                }
                            },
                            "arg": {
                                "type": 4,
                                "content": "click",
                                "isStatic": true,
                                "constType": 3,
                                "loc": {
                                    "start": {
                                        "column": 14,
                                        "line": 3,
                                        "offset": 53
                                    },
                                    "end": {
                                        "column": 19,
                                        "line": 3,
                                        "offset": 58
                                    },
                                    "source": "click"
                                }
                            },
                            "modifiers": [],
                            "loc": {
                                "start": {
                                    "column": 13,
                                    "line": 3,
                                    "offset": 52
                                },
                                "end": {
                                    "column": 25,
                                    "line": 3,
                                    "offset": 64
                                },
                                "source": "@click=\"add\""
                            }
                        }
                    ],
                    "isSelfClosing": false,
                    "children": [
                        {
                            "type": 2,
                            "content": "add 1",
                            "loc": {
                                "start": {
                                    "column": 26,
                                    "line": 3,
                                    "offset": 65
                                },
                                "end": {
                                    "column": 31,
                                    "line": 3,
                                    "offset": 70
                                },
                                "source": "add 1"
                            }
                        }
                    ],
                    "loc": {
                        "start": {
                            "column": 5,
                            "line": 3,
                            "offset": 44
                        },
                        "end": {
                            "column": 40,
                            "line": 3,
                            "offset": 79
                        },
                        "source": "<button @click=\"add\">add 1</button>"
                    }
                },
                {
                    "type": 2,
                    "content": "\n",
                    "loc": {
                        "start": {
                            "column": 40,
                            "line": 3,
                            "offset": 79
                        },
                        "end": {
                            "column": 1,
                            "line": 4,
                            "offset": 81
                        },
                        "source": "\r\n"
                    }
                }
            ],
            "loc": {
                "start": {
                    "column": 1,
                    "line": 1,
                    "offset": 0
                },
                "end": {
                    "column": 12,
                    "line": 4,
                    "offset": 92
                },
                "source": "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>"
            }
        },
        "map": {
            "version": 3,
            "sources": [
                "anonymous.vue"
            ],
            "names": [],
            "mappings": ";IACI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC",
            "file": "anonymous.vue",
            "sourceRoot": "",
            "sourcesContent": [
                "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n   },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\ndiv {\r\n    color: red;\r\n}\r\n</style>\r\n"
            ]
        }
    },
    "script": {
        "type": "script",
        "content": "\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n",
        "loc": {
            "source": "\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\ncount.value++;\r\n        }\r\n        return { count, add };\r\n    },\r\n};\r\n",
            "start": {
                "column": 9,
                "line": 14,
                "offset": 234
            },
            "end": {
                "column": 1,
                "line": 25,
                "offset": 437
            }
        },
        "attrs": {},
        "map": {
            "version": 3,
            "sources": [
                "anonymous.vue"
            ],
            "names": [],
            "mappings": ";AAcA,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC;AACzB,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;IACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;QACJ,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,EAAE;YACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjB;QACA,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC;IACzB,CAAC;AACL,CAAC",
            "file": "anonymous.vue",
            "sourceRoot": "",
            "sourcesContent": [
                "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n   },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\ndiv {\r\n    color: red;\r\n}\r\n</style>\r\n"
            ]
        }
    },
    "scriptSetup": null,
    "styles": [
        {
            "type": "style",
            "content": "\r\ndiv {\r\n    color: red;\r\n}\r\n",
            "loc": {
                "source": "\r\ndiv {\r\n    color: red;\r\n}\r\n",
                "start": {
                    "column": 15,
                    "line": 27,
                    "offset": 464
                },
                "end": {
                    "column": 1,
                    "line": 31,
                    "offset": 493
                }
            },
            "attrs": {
                "scoped": true
            },
            "scoped": true,
            "map": {
                "version": 3,
                "sources": [
                    "anonymous.vue"
                ],
                "names": [],
                "mappings": ";AA2BA,CAAC,CAAC,EAAE;IACA,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC;AACd",
                "file": "anonymous.vue",
                "sourceRoot": "",
                "sourcesContent": [
                    "<template>\r\n    <div>{{ count }}</div>\r\n    <button @click=\"add\">add 1</button>\r\n</template>\r\n\r\n<!-- <script setup>\r\nimport { ref } from 'vue';\r\nconst count = ref(6);\r\nfunction add() {\r\n    count.value++;\r\n}\r\n</script> -->\r\n\r\n<script>\r\nimport { ref } from 'vue';\r\nexport default {\r\n    setup() {\r\n        const count = ref(6);\r\n        function add() {\r\n            count.value++;\r\n        }\r\n        return { count, add };\r\n },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\ndiv {\r\n    color: red;\r\n}\r\n</style>\r\n"
                ]
            }
        }
    ],
    "customBlocks": [],
    "cssVars": [],
    "slotted": false
}