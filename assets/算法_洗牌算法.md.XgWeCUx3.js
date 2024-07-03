import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.iMXuyU9c.js";const g=JSON.parse('{"title":"洗牌算法(Knuth_Durstenfeld算法)","description":"","frontmatter":{},"headers":[],"relativePath":"算法/洗牌算法.md","filePath":"算法/洗牌算法.md"}'),t={name:"算法/洗牌算法.md"},h=n(`<h1 id="洗牌算法-knuth-durstenfeld算法" tabindex="-1">洗牌算法(Knuth_Durstenfeld算法) <a class="header-anchor" href="#洗牌算法-knuth-durstenfeld算法" aria-label="Permalink to &quot;洗牌算法(Knuth_Durstenfeld算法)&quot;">​</a></h1><pre><code>洗牌算法是一种将数组内所有元素均匀的打乱的一种算法
文章参考
    [YF云飞](https://blog.csdn.net/flyTie/article/details/126548063)
    [寂灭万乘](https://www.cnblogs.com/millionsmultiplication/p/9570258.html)
</code></pre><h2 id="逻辑" tabindex="-1">逻辑 <a class="header-anchor" href="#逻辑" aria-label="Permalink to &quot;逻辑&quot;">​</a></h2><pre><code>每次从未处理的数据中随机取出一个数字，然后把该数字放在数组的尾部(未处理的尾部,与之交换元素)， 即数组尾部存放的是已经处理过的数字 。
（因为生成 [0, i] 范围的随机数比生成 [i, n) 范围的随机数简单，所以 处理过的数字放在尾部^~^）

优点: 这是一个原地打乱顺序的算法，且每一个元素出现在每一个位置的概率相同
缺点: 嗯？？？
时间复杂度: O(n)
空间复杂度: O(1)

尝试验证概率相同
数组元素是 A,B,C,D,E    数组长度:5
假如第1个随机元素是A,A被选中的概率为: 1/5
假如第2个随机元素是B,B被选中的概率为: B没被上次随机选中的概率(4/5),并且B被这次选中的概率(1/4)
    4/5 * 1/4 = 1/5
假设第3个随机元素是C,C被选中的概率为: C没被第1次选中(4/5),还没被第2次选中(3/4),并且被这次选中的概率(1/3)
    4/5 * 3/4 * 1/3 = 1/5
……
以此类推,实现洗牌后每个元素在它所在的位置的概率都是1/5
</code></pre><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrLen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ItemArr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arrLen; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrLen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastIndex);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ItemArr[index];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ItemArr[index] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ItemArr[lastIndex];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ItemArr[lastIndex] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="其他的洗牌算法" tabindex="-1">其他的洗牌算法 <a class="header-anchor" href="#其他的洗牌算法" aria-label="Permalink to &quot;其他的洗牌算法&quot;">​</a></h2><h3 id="抽牌洗牌法" tabindex="-1">抽牌洗牌法 <a class="header-anchor" href="#抽牌洗牌法" aria-label="Permalink to &quot;抽牌洗牌法&quot;">​</a></h3><pre><code>抽出牌库的最后一张牌,随机的插入到牌库里,一般是循环N遍

优点: 逻辑简单
缺点: 每一次插入都需要大量的移动元素,且无法保证所有的牌被洗到
时间复杂度: O(N^2)
空间复杂度: O(1)
</code></pre><h3 id="fisher-yates算法" tabindex="-1">Fisher_Yates算法 <a class="header-anchor" href="#fisher-yates算法" aria-label="Permalink to &quot;Fisher_Yates算法&quot;">​</a></h3><pre><code>创建两个列表，一个洗牌前A，一个洗牌后B，B初始为空
随机从A取一张放入B尾
直到A被取空

优点: 算法原理清晰，通过54次生成的随机数取1/54,1/53,…1/1能等概率地生成这54!种结果中的一种。
缺点: 额外开辟了一个List，而且为List删除元素是不可避免地需要移动元素。
时间复杂度: O(N^2)???
空间复杂度: O(N)
</code></pre>`,11),e=[h];function l(k,p,r,d,E,o){return a(),i("div",null,e)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
