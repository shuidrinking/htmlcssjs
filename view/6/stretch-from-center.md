#### 从中心向四周扩展的onhover动画

<style type="text/css">
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	gap:30px;
}
.avatar{
	width: 200px;
	height: 200px;
	background-color: #5c9fff;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.avatar:after {
	position:absolute;
	inset:0;
	content:'';
	border-radius:50%;
	background: #c4f5ff5c;
	clip-path: circle(0% at 50% 50%);
}
.avatar:hover:after {
	transition: all 0.5s linear;
	clip-path: circle(50% at 50%50%);
}
.text{
	text-align: center;
	line-height: 200px;
	color: #ffffff;
	font-size: 30px;
}
.stretch-from-center{
	width: 200px;
	height: 200px;
	background-color: #008b62;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.stretch-from-center:after{
	position:absolute;
	content:'';
	border-radius:50%;
	width: 0;
	height: 0;
	left:50%;
	top:50%;
	background: #26c79730;
}
.stretch-from-center:hover:after {
	transition: all 0.5s linear;
	width:200px;
	height:200px;
	left:0;
	top:0;
}
</style>
<div class="containner">
	<div class="stretch-from-center text">
		方法一
	</div>
	<div class="avatar text">
		方法二
	</div>
</div>

>1.css定义
<pre class="prettyprint lang-css">
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	gap:30px;
}
/*方法一：*/
.stretch-from-center{
	width: 200px;
	height: 200px;
	background-color: #008b6;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.stretch-from-center:after{
	position:absolute;
	content:'';
	border-radius:50%;
	width: 0;
	height: 0;
	left:50%;
	top:50%;
	background:#26c79730;
}
.stretch-from-center:hover:after {
	transition: all 0.5s linear;
	width:200px;
	height:200px;
	left:0;
	top:0;
}
/*方法二：*/
.avatar{
	width: 200px;
	height: 200px;
	background-color: #5c9fff;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.avatar:after {
	position:absolute;
	inset:0;
	content:'';
	border-radius:50%;
	background: #c4f5ff5c;
	clip-path: circle(0% at 50% 50%);
}
.avatar:hover:after {
	transition: all 0.5s linear;
	clip-path: circle(50% at 50%50%);
}
</pre>

>2.html
<pre class="prettyprint lang-html">
&lt;div class="container"&gt;
	&lt;div class="avatar"&gt;
	&lt;/div&gt;
	&lt;div class="stretch-from-center"&gt;
	&lt;/div&gt;
&lt;/div&gt;
</pre>
