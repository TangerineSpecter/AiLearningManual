const markdownItKatex = require('markdown-it-katex');
import { defineConfig } from "vitepress";

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
];

/**
 * @type {import('vitepress').UserConfig}
 */
const config =
    defineConfig({
        base: '/AiLearningManual/',
        lang: 'zh-CN',
        title: 'Ai学习手册',
        description: 'Ai的日常学习记录',
        head: [
            ['link',
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css', crossorigin: '' },
                { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css" },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css' }
            ],
            // [
            //     "script",
            //     {
            //         src: "https://cdn.jsdelivr.net/npm/mermaid@10.0.2/dist/svgDraw-c034b55e.min.js",
            //     },
            // ],
            // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/mermaid@8.0.0/dist/mermaid.min.css' }],
            ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@8.0.0/dist/mermaid.min.js' }],
            ['script', { innerHTML: 'mermaid.initialize({startOnLoad:true});' }]
        ],
        themeConfig: {
            siteTitle: 'AI学习手册',
            search: true,
            searchMaxSuggestions: 10,
            docFooter: { prev: '上一篇', next: '下一篇' },
            outlineTitle: "本页目录",
            outline: ['2', '3'],
            lastUpdated: true,
            lastUpdatedText: "最近更新时间",
            logo: '/icon.png',
            algolia: {
                appId: 'xxx',
                apiKey: 'xxxx',
                indexName: 'xxx'
            },
            footer: {
                message: 'Released under the MIT License.',
                copyright: 'Copyright © 2023-present Evan You'
            },
            socialLinks: [
                { icon: 'github', link: 'https://github.com/TangerineSpecter' }
            ],
            nav: [
                { text: '首页', link: '/' },
                { text: '数学', link: '/mathematics/index' },
                { text: 'Python', link: '/python/index' },
                { text: 'Ai学习', link: '/ai-study/index' },
                { text: 'Ai绘画', link: '/ai-draw/index' },
                { text: '学习路线', link: '/study/index' },
                { text: '更新记录', link: '/log/index' }
            ],
            sidebar: {
                '/mathematics/': [
                    { text: '数学符号说明', link: '/mathematics/explanation' },
                    { text: '公式手册', link: '/mathematics/formulas' },
                    {
                        text: '高等数学基础',
                        items: [
                            { text: '函数', link: '/mathematics/function/index' },
                            { text: '极限', link: '/mathematics/limit/index' },
                            { text: '无穷', link: '/mathematics/infinite/index' },
                            { text: '导数', link: '/mathematics/derivative/index' },
                            { text: '偏导数', link: '/mathematics/partial-derivative/index' },
                            { text: '方向导数', link: '/mathematics/directional-derivative/index' },
                            { text: '梯度', link: '/mathematics/gradient/index' },
                        ]
                    },
                    { text: '微积分', link: '/mathematics/calculus/index' },
                ],
                '/python/': [
                    {
                        text: 'Numpy库',
                        items: [
                            { text: '初次使用', link: '/python/numpy/start/index' },
                        ]
                    },
                ],
                '/ai-draw/': [
                    {
                        text: '插件',
                        items: [
                            { text: '秋叶工具安装扩展插件', link: '/ai-draw/plugin/install' },
                            { text: 'ControlNet安装和使用', link: '/ai-draw/plugin/controlNet/start/index' },
                            { text: 'ControlNet插件应用', link: '/ai-draw/plugin/controlNet/base/index' },
                            { text: 'ControlNet插件多模型组合应用', link: '/ai-draw/plugin/controlNet/advanced/index' },
                        ]
                    },
                ],
            }
        },
        configureWebpack: {
            resolve: {
                alias: {
                    '@alias': '.vitepress/public/'
                }
            }
        },
        markdown: {
            config: md => {
                md.use(markdownItKatex);
                // md.use(mathjax3);
            }
        },
        // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => customElements.includes(tag)
                }
            }
        },
        plugins: [
            require('vitepress-plugin-mermaid')
        ],
    });
export default config