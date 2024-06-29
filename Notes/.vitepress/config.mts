import { defineConfig } from 'vitepress'

//#region 文件夹路径

// 零级
var Folder_Root = ""
// 一级
var Folder_BlogsToolsList =         "/Blogs_Tools_List"
    var Folder_VitePress =          Folder_BlogsToolsList + "/VitePress"
    var Folder_Memos =              Folder_BlogsToolsList + "/Memos"
var Folder_Linux =                  "/Linux_About"
var Folder_MyIdeas =                "/My_Ideas"
var Folder_LifeTips =               "/Life_Tips"
var Folder_Examples =               "/Examples"


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
        ],

        sidebar: [
            {
                text: '博客构建工具',
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
                ]
            },


            {
                text: "Linux",
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


            {
                text: '我的小灵光',
                collapsed: true,
                items: [
                    { text: 'TODO', link: Folder_MyIdeas + '/'},
                ],
            },


            {
                text: '生活小技巧',
                collapsed: true,
                items: [
                    { text: '快递', link: Folder_LifeTips + '/快递'},
                ],
            },


            {
                text: 'Examples',
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