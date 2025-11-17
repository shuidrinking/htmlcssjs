#### 绕X轴旋转

<style type="text/css">
	.containner{
		width:100%;
		display:flex;
		align-items:center;
		justify-content:center;
		perspective:500px;/*透视距离*/
		transform-style: preserve-3d;/*作为父元素要开启3d模式，否则子元素的运动不会呈现3d效果*/
	}
	.item{
		width: 200px;
		height: 200px;
		line-height:200px;text-align:center;color:#ffffff;
		background-color: #368add;
		transition: all 0.5s linear;
		margin: 100px auto;
		cursor:pointer;
		border-radius:10px;
		box-shadow:1px 1px 10px 1px #5899d4;
	}
	.item:hover{
		transform:rotatex(60deg);
	}
</style>
<div class="containner">
	<div class="item">鼠标移动过来</div>
</div>

> html代码
<pre class="prettyprint lang-css">
	&lt;div class="containner"&gt;
		&lt;div class="item"&gt;鼠标移动过来&lt;/div&gt;
	&lt;/div&gt;
</pre>

> css代码
<pre class="prettyprint lang-css">
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	perspective:500px;/*透视距离*/
	transform-style: preserve-3d;/*作为父元素要开启3d模式，否则子元素的运动不会呈现3d效果*/
}
.item{
	width: 200px;
	height: 200px;
	background-color: #368add;
	transition: all 0.5s linear;
	margin: 100px auto;
	cursor:pointer;
	border-radius:10px;
	box-shadow:1px 1px 10px 1px #5899d4;
}
.item:hover{
	transform:rotatex(60deg);
}
</pre>