#### 利用变形和滤镜实现光照背影或水面倒影效果

<style type="text/css">
	.shadow{
		position:relative;
		height:1rem;
		line-height:1rem;
		font-size: 0.5rem;
		font-weight: bolder;
		&:before {
			position: absolute;
			left: 0px;
			top: 0px;
			z-index: -1;
			content: "光照背影";
			transform: translate(-0.3rem, 0.1rem) scaleY(0.5) skew(45deg);
			color: #000000;
			filter: blur(0.02rem);
			-webkit-mask-image: linear-gradient(transparent, #000000);
		}
	}
	.reflection{
		position:relative;
		height:1rem;
		line-height:1rem;
		font-size: 0.5rem;
		font-weight: bolder;
		&:before {
			position: absolute;
			left: 0px;
			bottom: -0.6rem;
			z-index: -1;
			content: "水面倒影";
			transform: rotatex(180deg) translate(0.8em, 0.1rem) scaleY(0.8) skew(300deg);
			color: #000000;
			filter: blur(0.02rem);
			-webkit-mask-image: linear-gradient(transparent, #000000);
		}
		/* 
		这是个非标准的属性
		above（上方）、below（下方）、left（左侧）和right（右侧）
		-webkit-box-reflect: below 1px linear-gradient(transparent, #00000052); 
		*/
	}
	.reflection-box{
		perspective:500px;/*透视距离*/
		transform-style: preserve-3d;/*作为父元素要开启3d模式，否则子元素的运动不会呈现3d效果*/
	}
</style>
<div class="demobox">
	<div class="shadow">
		光照背影
	</div>
	<div class="reflection-box">
		<div class="reflection">
			水面倒影
		</div>
	</div>
</div>

>1、背影css代码
<pre class="prettyprint lang-css">
.shadow{
	position:relative;
	height:1rem;
	line-height:1rem;
	font-size: 0.5rem;
	font-weight: bolder;
	&:before {
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: -1;
		content: "光照背影";
		transform: translate(-0.3rem, 0.1rem) scaleY(0.5) skew(45deg);
		color: #000000;
		filter: blur(0.02rem);
		-webkit-mask-image: linear-gradient(transparent, #000000);
	}
}
</pre>

>1、倒影css代码
<pre class="prettyprint lang-css">
.reflection{
	position:relative;
	height:1rem;
	line-height:1rem;
	font-size: 0.5rem;
	font-weight: bolder;
	/*above（上方）、below（下方）、left（左侧）和right（右侧）*/
	-webkit-box-reflect: below 1px linear-gradient(transparent, #00000052);
}
</pre>

> 3、html代码
<pre class="prettyprint lang-html">
&lt;div class="shadow"&gt;
	光照背影
&lt;/div&gt;
&lt;div class="reflection"&gt;
	水面倒影
&lt;/div&gt;
</pre>