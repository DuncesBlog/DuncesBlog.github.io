import{_ as n,c as e,o as a,a4 as o}from"./chunks/framework.iMXuyU9c.js";const f=JSON.parse('{"title":"六边形地图的存储与使用","description":"","frontmatter":{},"headers":[],"relativePath":"算法/六边形地图.md","filePath":"算法/六边形地图.md"}'),r={name:"算法/六边形地图.md"},s=o(`<h1 id="六边形地图的存储与使用" tabindex="-1">六边形地图的存储与使用 <a class="header-anchor" href="#六边形地图的存储与使用" aria-label="Permalink to &quot;六边形地图的存储与使用&quot;">​</a></h1><h2 id="借鉴的" tabindex="-1">借鉴的 <a class="header-anchor" href="#借鉴的" aria-label="Permalink to &quot;借鉴的&quot;">​</a></h2><h2 id="我自己想的" tabindex="-1">我自己想的 <a class="header-anchor" href="#我自己想的" aria-label="Permalink to &quot;我自己想的&quot;">​</a></h2><h3 id="首先-定义一下移动逻辑" tabindex="-1">首先,定义一下移动逻辑 <a class="header-anchor" href="#首先-定义一下移动逻辑" aria-label="Permalink to &quot;首先,定义一下移动逻辑&quot;">​</a></h3><pre><code>以星号*为当前位置,用数字代表每个方向
\`\`\`plain
 0 1            (-1, 0)     (-1, 1)
2 * 3        (0, -1)    当前    (0, 1)
 4 5            (1, 0)      (1, 1)
\`\`\`
定义后就可以设置数字对应的方向映射去做移动
\`\`\`
var GetMove = function（intF）{
    var pos = [-1,-1];
    switch(intF){
        case 0: {
            pos = [-1, 0];
            break;
        }
        case 1: {
            pos = [-1, 1];
            break;
        }
        case 2: {
            pos = [0, 0];
            break;
        }
        case 3: {
            pos = [0, 1];
            break;
        }
        case 4: {
            pos = [1, 0];
            break;
        }
        case 5: {
            pos = [1, 1];
            break;
        }
        default: break;
    }
    return pos;
}
\`\`\`
也可以用算法来做
我们观察到移动分为三组，每组各两个选择：向上（0，1）、平移（-1，1）、向下（0，1）
\`\`\`
var GetMoveByMath = function（intF）{
    var x = parseInt(intF/2) - 1;
    var y = intF % 2;
    // 平移没有原地踏步
    if(x==0 &amp;&amp; y==0)    y = -1;
    return [x, y];
}
\`\`\`
</code></pre><h3 id="其次-要考虑地图如何存储" tabindex="-1">其次,要考虑地图如何存储 <a class="header-anchor" href="#其次-要考虑地图如何存储" aria-label="Permalink to &quot;其次,要考虑地图如何存储&quot;">​</a></h3><pre><code>六边形地图，可以想象成方形地图的错位
\`\`\` 奇数行偏移地图
// * * * * * * * *
//  * * * * * * * *
// * * * * * * * *
//  * * * * * * * *
// _ * * * * * * * *
//  _ * * * * * * * *
\`\`\`
就有：以二位数组为基础,但这样就要存储空位,数组长度是以目视最长行为最长
\`\`\`
var sixMap = [
    [00, 01, 02, 03, 04, 05, 06, 07],
    [  10, 11, 12, 13, 14, 15, 16, 17],
    [20, 21, 22, 23, 24, 25, 26, 27],
    [  30, 31, 32, 33, 34, 35, 36, 37],
    [  , 41, 42, 43, 44, 45, 46, 47, 48],
    [    , 51, 52, 53, 54, 55, 56, 57, 58],
]
\`\`\`

由上可见一个问题：
    奇数行的上下两个链接的是y：+0 和 +1
    偶数行的上下两个链接的是y：-1 和 +0
所以这里要做特殊处理，偶数行向上下移动时候要做 -1 偏移（这里六边形地图是奇数行偏移，如果地图偶数行偏移则要奇数行移动-1偏移）
\`\`\` JavaScript
var doMove = function(nowPos, movePos){
    // 奇数行偏移
    var offset = nowPos%2 ? -1 : 0 ;
    var endPosX = nowPos[0] + movePos[0];
    var endPosY = nowPos[1] + movePos[1] + offset;

    if(!CheckEndPosIsOK)    return [-1, -1];

    return [endPosX, endPosY];
}
\`\`\`


以上述方案为基础，以数组的0位数值,代表错位的偏移量,删除的无效前置格子，则数组长度是以有效格子最长行为最长
\`\`\` 带有偏移量的地图存储
var sixMap = [
    [0, 01, 02, 03, 04, 05, 06, 07, 08],
    [0,   11, 12, 13, 14, 15, 16, 17, 18],
    [0, 21, 22, 23, 24, 25, 26, 27, 28],
    [0,   31, 32, 33, 34, 35, 36, 37, 38],
    [1,     42, 43, 44, 45, 46, 47, 48, 49],
    [1,       52, 53, 54, 55, 56, 57, 58, 59],
]
\`\`\`

emmmm，算法逻辑我不想想了

\`\`\` JavaScript 没验证
var doMove = function(nowPos, movePos){
    // 奇数行偏移
    var offset = nowPos%2 ? -1 : 0 ;
    var endPosX = nowPos[0] + movePos[0];
    var endPosY = nowPos[1] + movePos[1] + offset + sixMap[nowPos[0]] = sixMap[endPosX];

    if(!CheckEndPosIsOK)    return [-1, -1];

    return [endPosX, endPosY];
}
\`\`\`
</code></pre>`,7),t=[s];function i(c,d,h,P,_,p){return a(),e("div",null,t)}const v=n(r,[["render",i]]);export{f as __pageData,v as default};
