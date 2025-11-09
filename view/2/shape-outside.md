#### shape-outside样式设置文字沿边环绕

<div style="width:6rem;">
<img src="image/business/firefox-logo.svg" style="float:right;shape-outside: circle(50%);border-radius:50%;width:1rem;height:1rem;">
We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>
<pre class="prettyprint lang-css">
/* 关键字值 */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 函数值 */
shape-outside: circle(50%);
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* <url> 值 */
shape-outside: url(image.png);

/* 渐变值 */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* 全局值 */
shape-outside: initial;
shape-outside: inherit;
shape-outside: unset;
</pre>