#### 1、backdrop-filter属性的值有许多css函数，可实现经验特效

>1.1 使用url函数，转用svg滤镜
<pre class="prettyprint lang-css">
/*URL to SVG filter*/
backdrop-filter: url("common-filters.svg#filter");
</pre>

>1.2 其他滤镜函数样例
<pre class="prettyprint lang-css">
/*&lt;filter-function&gt; values*/
backdrop-filter: blur(2px);#使元素从背景开始往下层的内容全部模糊，对元素内容及上层内容都不模糊
backdrop-filter: brightness(60%);#设置背景图的亮度
backdrop-filter: contrast(40%);#设置背景图的对比度
backdrop-filter: drop-shadow(4px 4px 10px blue);#设置背景图的阴影，与普通filter的drop-shadow效果一致，滤镜会使严格按照图形中的图像边缘绘制阴影
backdrop-filter: grayscale(百分比或小于等于1的小数);#按对本元素的背景图按比例对颜色进行置灰，100%时直接去色显示为黑白
backdrop-filter: hue-rotate(120deg);#变更背景图的显示色调
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);
</pre>

>1.2 可以同时设置多个滤镜函数
<pre class="prettyprint lang-css">
/*Multiple filters*/
backdrop-filter: url("filters.svg#filter") blur(4px) saturate(150%);
</pre>