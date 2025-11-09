#### 从中心向四周扩展的onhover动画

<style type="text/css">
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
}
.avatar{
	width: 200px;
	height: 200px;
	background-color: #5c9fff;
	margin: 100px auto;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.avatar:before, .avatar:after {
	position:absolute;
	inset:0;
	content:'';
	border-radius:50%;
}
.avatar:before {
	background:#00000050;
}
.avatar:after {
	background: inherit;
	clip-path: circle(0% at 50% 50%);
}
.avatar:hover:after {
	transition: all 0.5s linear;
	clip-path: circle(50% at 50%50%);
}

.stretch-from-center{
	width: 200px;
	height: 200px;
	background-color: #008b62;
	margin: 100px auto;
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
	<div class="avatar">
	</div>
	<div class="stretch-from-center">
	</div>
</div>

>1.css定义
<pre class="prettyprint lang-s">
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
}
/*方法一：*/
.stretch-from-center{
	width: 200px;
	height: 200px;
	background-color: #008b6;
	margin: 100px auto;
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
	margin: 100px auto;
	border-radius:50%;
	cursor:pointer;
	position: relative;
}
.avatar:before, .avatar:after {
	position:absolute;
	inset:0;
	content:'';
	border-radius:50%;
}
.avatar:before {
	background:#00000050;
}
.avatar:after {
	background: inherit;
	clip-path: circle(0% at 50% 50%);
}
.avatar:hover:after {
	transition: all 0.5s linear;
	clip-path: circle(50% at 50%50%);
}
</pre>

>2.html
<pre class="prettyprint lang-s">
&lt;div class="container"&gt;
	&lt;div class="avatar"&gt;
	&lt;/div&gt;
	&lt;div class="stretch-from-center"&gt;
	&lt;/div&gt;
&lt;/div&gt;
</pre>
