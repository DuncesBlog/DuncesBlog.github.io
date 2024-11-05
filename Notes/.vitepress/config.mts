import { defineConfig } from 'vitepress'

//#region 文件夹路径

// 零级
var Folder_Root = ""
// 一级
var Folder_BlogsToolsList =         "/Blogs_Tools_List"
    var Folder_VitePress =          Folder_BlogsToolsList + "/VitePress"
    var Folder_Memos =              Folder_BlogsToolsList + "/Memos"
var Folder_Linux =                  "/Linux_About"
var Folder_Language =               "/开发-语言类"
    var Folder_CSharp =             Folder_Language + "/CSharp"
    var Folder_JsAndTs =            Folder_Language + "/Js_Ts"
    var Folder_Nodejs =             Folder_Language + "/Nodejs"
    var Folder_MarkDown =           Folder_Language + "/MarkDown"
var Folder_IDE =                    "/开发-IDE"
    var Folder_CocosCreator =       Folder_IDE + "/CocosCreator"
    var Folder_Unity =              Folder_IDE + "/Unity"
    var Folder_VSCode =             Folder_IDE + "/VSCode"
    var Folder_VSStudio =           Folder_IDE + "/VSStudio"
    var Folder_JetBrainsRider =     Folder_IDE + "/JetBrains_Rider"
    var Folder_IntelliJIDEA =       Folder_IDE + "/IntelliJ_IDEA"
var Folder_Algorithm =              "/算法"
    var Folder_LeetCode =           Folder_Algorithm + "/LeetCode"
var Folder_MyIdeas =                "/My_Ideas"
var Folder_LifeTips =               "/Life_Tips"
var Folder_Knowledge =              "/夜航船"
var Folder_Examples =               "/Examples"
var Folder_Tools =                  "/工具类"


//#endregion 文件夹路径


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "刻舟求剑",
    description: "DuncesNotes",
    themeConfig: {

        siteTitle: "刻舟求剑-1",
        // logo: "/logo.png",

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '笔记', link: '/want-to-say' },
            { 
                text: "下拉选择框",
                items: [
                    {text: "options-1", link: "/"},
                    {text: "options-2", link: "http://www.baidu.com"},
                ],
            },
            { text: "个人游戏集", link: "https://lyugames-1258920685.cos.ap-beijing.myqcloud.com/index.html"},
        ],

        sidebar: [
            {   text: '博客构建工具',
                collapsed: true,
                items:[
                    { text: '中文独立博客列表', link: 'https://github.com/AomanHao/chinese-independent-blogs' },
                    {
                        text: 'VitePress',
                        collapsed: true,
                        items:[
                            { text: '本地构建vitepress', link: Folder_VitePress + '/build-vitepress' },
                        ]
                    },
                    {
                        text: 'Memos',
                        collapsed: true,
                        items: [
                            { text: 'Ubuntu Docker安装memos', link: Folder_Memos + '/Ubuntu Docker安装memos'},
                            { text: 'TODO', link: Folder_Memos + '/'},
                        ],
                    },
                    { text: '其他博客', link: Folder_BlogsToolsList + '/other_blogs'},
                    { text: '大佬们的博客', link: Folder_BlogsToolsList + '/大佬们的博客'},
                ]
            },


            {   text: "Linux",
                collapsed: true,
                items: [
                    { text: 'Ubuntu 系统盘制作', link: Folder_Linux + '/Ubuntu 系统盘制作'},
                    { text: 'Ubuntu 命令', link: Folder_Linux + '/Ubuntu 命令'},
                    { text: 'Ubuntu 安装SSH', link: Folder_Linux + '/Ubuntu 安装SSH'},
                    { text: 'Ubuntu 安装Docker', link: Folder_Linux + '/Ubuntu 安装Docker'},
                    { text: 'Ubuntu Docker安装SakuraFrp', link: Folder_Linux + '/Ubuntu Docker安装SakuraFrp'},
                    { text: 'Ubuntu 安装向日葵', link: Folder_Linux + '/Ubuntu 安装向日葵'},
                    { text: 'Ubuntu 设置笔记本合盖不休眠', link: Folder_Linux + '/Ubuntu 设置笔记本合盖不休眠'},
                    { text: '收藏的网页', link: Folder_Linux + '/favorite'},
                ],
            },


            {   text: "开发-语言类",
                collapsed: true,
                items: [
                    {   text: "C#",
                        collapsed: true,
                        items: [
                            { text: '数组', link: Folder_CSharp + '/CSharp数组'},
                            { text: 'TODO', link: Folder_CSharp + '/'},
                        ],
                    },
                    {   text: "Javascript&Typescript",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_JsAndTs + '/'},
                        ],
                    },
                    {   text: "Nodejs",
                        collapsed: true,
                        items: [
                            { text: 'NodeJs简单介绍', link: Folder_Nodejs + '/NodeJs简单介绍'},
                            { text: '如何搭建Node项目', link: Folder_Nodejs + '/如何搭建Node项目'},
                            { text: 'http 和 socketio共用一个地址', link: Folder_Nodejs + '/http和socketio共用一个地址'},
                            { text: 'websocket同时启用http和https协议', link: Folder_Nodejs + '/websocket同时启用http和https协议'},
                            { text: 'TODO', link: Folder_Nodejs + '/'},
                        ],
                    },
                    {   text: "MarkDown",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_MarkDown + '/TODO'},
                        ],
                    },
                ],
            },


            {   text: "开发-IDE",
                collapsed: true,
                items: [
                    {   text: "Cocos Creator",
                        collapsed: true,
                        items: [
                            { text: 'Cocos如何跟Android通信', link: Folder_CocosCreator + '/Cocos如何跟Android通信'},
                        ],
                    },
                    {   text: "Unity",
                        collapsed: true,
                        items: [
                            { text: 'unity 八叉树', link: Folder_Unity + '/unity 八叉树'},
                            { text: '跳过Unity的启动Logo', link: Folder_Unity + '/跳过Unity的启动Logo'},
                        ],
                    },
                    {   text: "VSCode",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_VSCode + '/'},
                        ],
                    },
                    {   text: "VS Studio",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_VSStudio + '/'},
                        ],
                    },
                    {   text: "JetBrains Rider",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_JetBrainsRider + '/'},
                        ],
                    },
                    {   text: "IntelliJ IDEA",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_IntelliJIDEA + '/'},
                        ],
                    },
                    { text: "其他IDE或框架", link: Folder_IDE + "/其他IDE或框架"}
                ],
            },


            {   text: '算法',
                collapsed: true,
                items: [
                    { text: '六边形地图', link: Folder_Algorithm + '/六边形地图'},
                    { text: '洗牌算法', link: Folder_Algorithm + '/洗牌算法'},
                    { text: '排序算法', link: Folder_Algorithm + '/排序算法'},
                    { text: '排列组合', link: Folder_Algorithm + '/排列组合'},
                    {   text: "LeetCode",
                        collapsed: true,
                        items: [
                            { text: '752.打开转盘锁 [中等] [广搜]', link: Folder_LeetCode + '/752_打开转盘锁'},
                            { text: '2959.关闭分部的可行集合数目 [困难] [最短路]', link: Folder_LeetCode + '/2959_关闭分部的可行集合数目'},
                            { text: 'TODO', link: Folder_LeetCode + '/'},
                        ],
                    },
                    { text: 'TODO', link: Folder_Algorithm + '/'},
                ],
            },

            {   text: "工具类",
                collapsed: true,
                items: [
                    { text: '在线工具收藏', link: Folder_Tools + '/在线工具收藏'},
                    { text: 'SourceTree', link: Folder_Tools + '/SourceTree'},
                    { text: 'TODO', link: Folder_Tools + '/'},
                ],
            },


            {   text: '我的小灵光',
                collapsed: true,
                items: [
                    { text: "对接中国福利彩票的API接口", link: Folder_MyIdeas + "/对接中国福利彩票的API接口"},
                    {   text: "TODO",
                        collapsed: true,
                        items: [
                            { text: 'TODO', link: Folder_VSCode + '/TODO'},
                        ],
                    },
                    { text: 'TODO', link: Folder_MyIdeas + '/TODO'},
                ],
            },


            {   text: '生活小技巧',
                collapsed: true,
                items: [
                    { text: '快递', link: Folder_LifeTips + '/快递'},
                    { text: '清洁小妙招', link: Folder_LifeTips + '/清洁小妙招'},
                    { text: '支付宝', link: Folder_LifeTips + '/支付宝'},
                ],
            },


            {   text: '夜航船',
                collapsed: true,
                items: [
                    { text: '山水', link: Folder_Knowledge + '/山水'},
                    { text: '老祖宗的名言', link: Folder_Knowledge + '/老祖宗的名言'},
                    { text: '5201314', link: Folder_Knowledge + '/5201314'},
                ],
            },


            {   text: 'Examples',
                collapsed: true,
                items: [
                    { text: 'Markdown Examples', link: Folder_Examples + '/markdown-examples' },
                    { text: 'Runtime API Examples', link: Folder_Examples + '/api-examples' }
                ]
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        search : {
            provider: "local",
        },
    },

    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true,
        },
    },
})