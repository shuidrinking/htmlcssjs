#### 利用svg滤镜及animation改变hudini属性值实现酷炫文字

<style type="text/css">
/*
* linear-gradient的渐变色背景不支持animation，因为渐变背景本质上是一张被浏览器绘制的临时图，它的绘制过程不允许代码干预
* 实现的支撑点：自定义属性 、 animation中改变属性值实现
*/
@property --k {
	syntax: "<number>";
	initial-value: 0;
	inherits: false;
}
svg[height="0"] {
	position: absolute;
}

.colorful-text {
	height:2rem;
	line-height:2rem;
	font-size:1rem;
	font-weight:1000;
	/* no pseudo needed */
	--k: 0;
	place-self: center;
	background: linear-gradient(90deg, hsl(calc(var(--k)*1turn), 95%, 65%), hsl(calc(var(--k)*1turn + 90deg), 95%, 65%));
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	/* font: 900 clamp(.875em, 7.25vw, 5em) arial black, sans-serif; */
	filter: url(#f);
	text-align: center;
	/* text-transform: uppercase; */
	/* needs support for animating custom properties */
	/* Firefox not quite there yet, but it's coming */
	animation: k 4s linear infinite;
}

@keyframes k {
	to {
		--k: 1;
	}
}
</style>
<div class="demobox">
	<div class="colorful-text">edk4j低代码极速开发平台</div>
</div>
<!-- 如果去掉下面的元素，发光文字的光辉就不会辐射到文字外部，失去了box-shadow的效果 -->
<svg width="0" height="0">
	<filter id="f" primitiveUnits="objectBoundingBox">
		<feGaussianBlur stdDeviation="0.02 0.2"></feGaussianBlur>
		<feColorMatrix type="saturate" values="1"></feColorMatrix>
		<feBlend in="SourceGraphic"></feBlend>
	</filter>
</svg>


> css代码
<pre class="prettyprint lang-css">
/*
* linear-gradient的渐变色背景不支持animation，因为渐变背景本质上是一张被浏览器绘制的临时图，它的绘制过程不允许代码干预
* 实现的支撑点：自定义属性 、 animation中改变属性值实现
*/
@property --k {
	syntax: "<number>";
	initial-value: 0;
	inherits: false;
}
svg[height="0"] {
	position: absolute;
}

.colorful-text {
	height:2rem;
	line-height:2rem;
	font-size:1rem;
	font-weight:1000;
	/* no pseudo needed */
	--k: 0;
	place-self: center;
	background: linear-gradient(90deg, hsl(calc(var(--k)*1turn), 95%, 65%), hsl(calc(var(--k)*1turn + 90deg), 95%, 65%));
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	/* font: 900 clamp(.875em, 7.25vw, 5em) arial black, sans-serif; */
	filter: url(#f);
	text-align: center;
	/* text-transform: uppercase; */
	/* needs support for animating custom properties */
	/* Firefox not quite there yet, but it's coming */
	animation: k 4s linear infinite;
}

@keyframes k {
	to {
		--k: 1;
	}
}
</pre>

> html代码
<pre class="prettyprint lang-css">
&lt;div class="demobox"&gt;
	&lt;div class="colorful-text">edk4j低代码极速开发平台&lt;/div&gt;
&lt;/div&gt;
&lt;!-- 如果去掉下面的元素，发光文字的光辉就不会辐射到文字外部，失去了box-shadow的效果 --&gt;
&lt;svg width="0" height="0"&gt;
	&lt;filter id="f" primitiveUnits="objectBoundingBox"&gt;
		&lt;feGaussianBlur stdDeviation="0.02 0.2"&gt;&lt;/feGaussianBlur&gt;
		&lt;feColorMatrix type="saturate" values="1"&gt;&lt;/feColorMatrix&gt;
		&lt;feBlend in="SourceGraphic"&gt;&lt;/feBlend&gt;
	&lt;/filter&gt;
&lt;/svg&gt;
</pre>