import{_ as e,c as a,o as n,a4 as o}from"./chunks/framework.iMXuyU9c.js";const u=JSON.parse('{"title":"2959.关闭分部的可行集合数目 [困难] [最短路]","description":"","frontmatter":{},"headers":[],"relativePath":"算法/LeetCode/2959_关闭分部的可行集合数目.md","filePath":"算法/LeetCode/2959_关闭分部的可行集合数目.md"}'),t={name:"算法/LeetCode/2959_关闭分部的可行集合数目.md"},r=o(`<h1 id="_2959-关闭分部的可行集合数目-困难-最短路" tabindex="-1">2959.关闭分部的可行集合数目 [困难] [最短路] <a class="header-anchor" href="#_2959-关闭分部的可行集合数目-困难-最短路" aria-label="Permalink to &quot;2959.关闭分部的可行集合数目 [困难] [最短路]&quot;">​</a></h1><pre><code>该文创建于 2024/07/17
</code></pre><ul><li>题目地址:<a href="https://leetcode.cn/problems/number-of-possible-sets-of-closing-branches/description/" target="_blank" rel="noreferrer">名称</a></li><li>envType = daily-question</li><li>envId = 2024-07-17</li></ul><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><pre><code>省略
</code></pre><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><h3 id="初始思路" tabindex="-1">初始思路 <a class="header-anchor" href="#初始思路" aria-label="Permalink to &quot;初始思路&quot;">​</a></h3><pre><code>将每个分部之间的最短路程计算出来,存成映射关系
然后把超长的分部和不超长的分成两部分进行计算
刚开始有想到用节点树存,但是node和node之间的链接数量不固定,用list好像不大行
然后想到用二维数组,并且多开辟一个位用于存储当前node到最远node的距离
不要想着map[2][3]和map[3][2]是一样的，就只用数组的一半，不好遍历

这样就先遍历所有道路,构建二维数组,记录之间的最短距离(提示里标注了距离不为0),更新最远距离
再遍历最远距离项,将node分为两个部分:超长和不超长
然后任意砍掉其中一个部分,就有最基本的解决方案了

???疑问,如果是其中某一个node超长,导致其他不超长的超长了,或者说砍掉A,B就不超长了?
所以更新某一位数组的时候,要连带这检查与之相联通的其他node的距离

貌似没问题,开干

修改
1.多开辟一位的逻辑没有用了，要遍历该节点所有
</code></pre>`,8),_=[r];function d(i,l,s,c,h,p){return n(),a("div",null,_)}const f=e(t,[["render",d]]);export{u as __pageData,f as default};
