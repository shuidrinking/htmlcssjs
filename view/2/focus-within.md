#### focus-within选择器可以实现“子元素聚焦后改变父元素样式”
<style>
.parent:focus-within{
	font-weigth:bold;
	font-size:20px;
	background-color:#f3f3f3;
}
</style>
<div class="demobox">
	<div class="onedemo parent">
		姓名：<input class="child" type="text" placeholder="请输入文本" />
	</div>
</div>

>1.focus-within需要被设置到父元素样式中
<pre class="prettyprint lang-css">
.parent:focus-within{
	font-weigth:bold;
	font-size:20px;
	background-color:#f3f3f3;
}
&lt;div class="parent"&gt;
	姓名：&lt;input class="child" type="text" placeholder="请输入文本" /&gt;
&lt;/div&gt;
</pre>