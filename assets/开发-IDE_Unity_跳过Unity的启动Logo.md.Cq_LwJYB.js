import{_ as t,c as i,o,j as n,a as e}from"./chunks/framework.iMXuyU9c.js";const U=JSON.parse('{"title":"无需付费,跳过Unity的启动Logo","description":"","frontmatter":{},"headers":[],"relativePath":"开发-IDE/Unity/跳过Unity的启动Logo.md","filePath":"开发-IDE/Unity/跳过Unity的启动Logo.md"}'),a={name:"开发-IDE/Unity/跳过Unity的启动Logo.md"},s=n("h1",{id:"无需付费-跳过unity的启动logo",tabindex:"-1"},[e("无需付费,跳过Unity的启动Logo "),n("a",{class:"header-anchor",href:"#无需付费-跳过unity的启动logo","aria-label":'Permalink to "无需付费,跳过Unity的启动Logo"'},"​")],-1),r=n("pre",null,[n("code",null,`创建于 2024/07/09
文章参考 [天外の飞兔.B站](https://www.bilibili.com/video/BV1hS411c7Pu)
`)],-1),l=n("h2",{id:"代码",tabindex:"-1"},[e("代码 "),n("a",{class:"header-anchor",href:"#代码","aria-label":'Permalink to "代码"'},"​")],-1),c=n("pre",null,[n("code",null,`\`\`\`C#
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Scripting;

[Preserve]  // 此特性用于防止在打包的时候这个脚本没有被打包进程序
publie class SkipSplashImage
{
    // 此特性用于在启动画面显示之前执行这个方法
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSplashScreen)]
    private static void Run()
    {
        Task.Run(()=>{
            SplashScreen.Stop(SplashScreen.StopBehavior.StopImmediate);
        });
    }
}
\`\`\`
`)],-1),d=[s,r,l,c];function h(p,_,g,u,m,y){return o(),i("div",null,d)}const f=t(a,[["render",h]]);export{U as __pageData,f as default};
