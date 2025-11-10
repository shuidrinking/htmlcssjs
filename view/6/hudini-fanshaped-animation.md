#### hudiniapi实现扇形互动特效
<style type="text/css">
	@property --d {
		syntax:'<angle>';
		initial-value: 30deg;
		inherits: false;
	}
	.gradient{
		--d : 30deg;
		background-image:conic-gradient(#08c955 var(--d), transparent var(--d) calc(360deg - var(--d)), #08c955 calc(360deg - var(--d)));
		border-radius:50%;
		transition: --d 0.3s;
		cursor:pointer;
	}
	.gradient:hover{
		--d:60deg;
	}
</style>
<div class="demobox">
	<div class="onedemo gradient"></div>
</div>

>1.样例css
<pre class="prettyprint lang-css">
	@property --d {
		syntax:'<angle>';
		initial-value: 30deg;
		inherits: false;
	}
	.gradient{
		--d : 30deg;
		background-image:conic-gradient(#08c955 var(--d), transparent var(--d) calc(360deg - var(--d)), #08c955 calc(360deg - var(--d)));
		border-radius:50%;
		transition: --d 0.3s;
		cursor:pointer;
	}
	.gradient:hover{
		--d:60deg;
	}
</pre>
>2.样例html
<pre class="prettyprint lang-html">
	&lt;div class="demobox"&gt;
		&lt;div class="onedemo gradient"&gt;&lt;/div&gt;
	&lt;/div&gt;
</pre>