#### 利用变形和滤镜实现倒影

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
			content: "大力精钢腿";
			transform: translate(-0.3rem, 0.1rem) scaleY(0.5) skew(45deg);
			color: #000000;
			filter: blur(0.02rem);
			-webkit-mask-image: linear-gradient(transparent, #000000);
		}
	}
</style>
<div class="demobox">
	<div class="shadow">
		大力精钢腿
	</div>
</div>

> css代码
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
		content: "大力精钢腿";
		transform: translate(-0.3rem, 0.1rem) scaleY(0.5) skew(45deg);
		color: #000000;
		filter: blur(0.02rem);
		-webkit-mask-image: linear-gradient(transparent, #000000);
	}
}
</pre>

> html代码
<pre class="prettyprint lang-css">
&lt;div class="shadow"&gt;
	大力精钢腿
&lt;/div&gt;
</pre>