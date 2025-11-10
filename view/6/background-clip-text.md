#### 使背景只显示被文字覆盖的部分，间接实现渐变文字、文字被图片喷涂等效果
<style>
.text-box{
	font-size:0.5rem;
	height:1rem;
	line-height:1rem;
	text-align:center;
	font-weight:bold;
	background-image:linear-gradient(45deg, #a989f5 20%, #f86f31 30% 60%, #fba227 70% 100%); 
	color:transparent;
	background-clip: text;
}
.demobox{
	background-color:#2f2a6b;
}
</style>
<div class="demobox">
	<div class="text-box">
		Start your free trail
	</div>
</div>

>1.实现原理
<pre class="prettyprint lang-css">
使文字透明，使背景只沿着文字覆盖的路径修剪，达到背景只显示覆盖的部分
核心样式：
background-clip: text; /*背景以*/
color: transparent;/*文字本身透明*/
/*将背景设置为渐变或者图片*/
background-image:linear-gradient(45deg, #a989f5 20%, #f86f31 30% 60%, #fba227 70% 100%); 
</pre>