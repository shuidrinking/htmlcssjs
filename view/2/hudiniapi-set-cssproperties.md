#### hudiniapi变量机制

<style type="text/css">
	/*借助 css hudini api 中的@property实现，但是目前仍然在实验阶段不是标准，有些浏览器不支持*/
	@property --angle {
		/*syntax的可选值：color、number、time、angle、image、integer、url等等，其中angle表示“有效的角度”*/
		syntax:'<angle>';
		initial-value: 0deg;
		inherits: false;
	}
	@keyframes rotate {
		100%{
			--angle: 360deg;
		}
	}
	.gradient{
		background-image:linear-gradient(
			var(--angle),
			#5ddcff,
			#3c67e3 43%,
			#4e00c2
		);
		animation: rotate 3s linear infinite;
	}
</style>
<div class="demobox">
	<div class="onedemo gradient"></div>
</div>

>1、hudini说明

<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Houdini_APIs" target="_blank">hudini api说明</a><br>
hudini api 中的@property设置css变量，可以借助animation改变变量值，配合var函数，实现丰富动画。但是目前仍然在实验阶段不是标准，有些浏览器不支持。
需要说说明的是，类似旋转变形的动画，完全可以在animation动画中使用transform的rotate等函数实现，此处的样例仅为演示hudini api的变量设置能力。

>2、hudini api 设置property的语法
<pre class="prettyprint lang-css">
@property --变量名 {
	syntax:'&lt;angle&gt;'; /*syntax的可选值：color、number、time、angle、image、integer、url等等，其中angle表示“有效的角度”*/
	initial-value: 初始值; /*不同syntax的值的单位不同*/
	inherits: false/true;
}
</pre>

>3、样例css
<pre class="prettyprint lang-css">
	@property --angle {
		syntax:'&lt;angle&gt;';
		initial-value: 0deg;
		inherits: false;
	}
	@keyframes rotate {
		100%{
			--angle: 360deg;
		}
	}
	.gradient{
		background-image:linear-gradient(
			var(--angle),
			#5ddcff,
			#3c67e3 43%,
			#4e00c2
		);
		animation: rotate 3s linear infinite;
	}
</pre>

>4、样例html
<pre class="prettyprint lang-html">
	&lt;div class="demobox"&gt;
		&lt;div class="onedemo gradient"&gt;&lt;/div&gt;
	&lt;/div&gt;
</pre>