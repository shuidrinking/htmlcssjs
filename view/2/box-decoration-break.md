#### box-decoration-break属性针对换行背景保持

<style>
.myspan {
	border-radius: 0.1rem;
	border-style: solid;
	font: 22px sans-serif;
	line-height: 2;
	background: linear-gradient(to bottom right, yellow, green);
	box-shadow:
		8px 8px 10px 0px deeppink,
		-5px -5px 5px 0px blue,
		5px 5px 15px 0px yellow;
}
#clone {
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
}
.onedemo{
	width:4rem;
	height:2rem;
	text-align:center;
	display:unset;
}
</style>

<div class="demobox">
	<div class="onedemo">
		<span class="myspan">未设置<br>导致<br>切断处丢失</span>
	</div>
	<div class="onedemo">
		<span class="myspan" id="clone">设置为<br>clone<br>切断处会保留样式</span>
	</div>
</div>


>1、适用场景
<pre class="prettyprint lang-css">
box-decoration-break:clone;

可用于强调文字选中等场景，出现换行时，切断位置会保留样式定义，避免生硬换行效果，正面影响以下属性的效果：
background
border
border-radius
border-image
box-shadow
clip-path
margin
padding
</pre>