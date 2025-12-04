#### 文字交融展开特效

<style>
	.text-box {
		height:2rem;
		text-align: center;
		background-color: #ffffff;
		filter: contrast(30);
	}
	.text {
		font-size:clamp(0.4rem, calc(0.4rem + 3vw), 1rem);
		color: #000000;
		animation: showup 5s forwards;
	}
	@keyframes showup {
		from {
			letter-spacing: -0.5rem;
			filter: blur(0.1rem);
		}

		to {
			letter-spacing: 0.1rem;
			filter: blur(0.02rem);
		}
	}
</style>

<div class="demobox text-box">
	<span class="text">一派溪山千古秀</span>
</div>

>1、css
<pre class="prettyprint lang-css">
	.text-box {
		height:200px;
		text-align: center;
		background-color: #ffffff;
		filter: contrast(30);
	}
	.text {
		font-size:clamp(0.4rem, 2vw , 1rem);
		color: #000000;
		animation: showup 5s forwards;
	}
	@keyframes showup {
		from {
			letter-spacing: -50px;
			filter: blur(10px);
		}
	
		to {
			letter-spacing: 10px;
			filter: blur(2px);
		}
	}
</pre>

>2、html
<pre class="prettyprint lang-html">
	&lt;div class="demobox text-box"&gt;
		&lt;span class="text">一派溪山千古秀&lt;/span&gt;
	&lt;/div&gt;
</pre>