#### border-image属性设置图形边框

<style>
.border-image-demo1{
	color:#ffffff;text-align: center;
	width:3rem;height:1.5rem;padding:0.1rem;
	border:20px solid;
	/* 简写 border-image:url(./border.svg) 50 round;*/
	border-image-source:url(image/business/colored-border.svg);
	border-image-slice: 50;
	border-image-repeat: round
}
.border-image-demo2{
	width:3rem;height:1.5rem;padding:0.1rem;
	border:0.2rem solid;
	border-image: url(image/business/border-florid.svg) round;
	border-image-slice: calc(50 / 184 * 100%) calc(80 / 284 * 100%);
	border-image-width: 20px 20px;
}
.border-image-demo3{
	border:20px solid;
	border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
	width:3rem;height:1.5rem;background:#fff3d4;text-align:left;padding:0.1rem;
}
</style>
<div class="demobox">
	<div class="border-image-demo1">
	</div>
	<div class="border-image-demo2">
	</div>
	<div class="border-image-demo3">
		border:30px solid;<br>
		border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
	</div>
</div>	

<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/border-image" target="_blank">mdn详细说明</a>
<pre class="prettyprint lang-s">
#border属性和border-image属性一起使用
#border-image一组有5个属性设置如下：
border-image-source:url()或渐变函数;
border-image-slice: 50;
border-image-repeat: round
border-image-width: 
border-image-outside: 

#例如
.border-image-demo{
	color:#ffffff;
	text-align: center;
	width:5rem;
	height:3rem;
	border:0.2rem solid;
	/* 简写 border-image:url(./border.svg) 50 round;*/
	border-image-source:url(./border.svg);
	border-image-slice:50;
	border-image-repeat: round
}
</pre>