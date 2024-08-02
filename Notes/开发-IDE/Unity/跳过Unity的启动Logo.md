
# 无需付费,跳过Unity的启动Logo
    创建于 2024/07/09
    文章参考 [天外の飞兔.B站](https://www.bilibili.com/video/BV1hS411c7Pu)

## 代码
    ```C#
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
    ```