#### 鼠标划过时，自动上浮说明

<style type="text/css">
	.action-item-box{
		position:relative;
		height:2rem;
		text-align:center;
		width:4rem;
	}
	/*定义鼠标划过box时，内部的tip组件执行显示动画*/
	.action-item-box:hover .action-item-action-remark{
		visibility:visible;
		animation:action-item-show-remark 0.1s linear 0s 1 normal;
	}
	@keyframes action-item-show-remark {
		from {height:0;}
		to {height:0.5rem;}
	}
	.action-item-action-render{
		cursor:pointer;
		height:100%;
		line-height:100%;
		width:100%;
		text-align:center;
		border-radius:0.05rem;
		background: url(image/business/sample3.jpg) no-repeat center center;
		background-size: cover;
	}
	.action-item-action-title{
		backdrop-filter:blur(0.02rem);
		font-size:0.3rem;
		height:100%;
		width:100%;
		color:#ffffff;
		border-radius:0.05rem;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.action-item-action-remark{
		visibility: hidden;
		position: absolute;
		left: 0;
		bottom: 0;
		text-align: left;
		padding-left:0.1rem;
		width: calc(100% - 0.1rem);
		color: #ffffff;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.16rem;
		background-image: linear-gradient(transparent, #040404);
		opacity: 0.8;
		border-bottom-left-radius:0.05rem;
		border-bottom-right-radius:0.05rem;
	}
</style>

<div class="action-item-box" >
	<div id="action-item-action-render" class="action-item-action-render" onclick="console.info('点击后的响应事件')">
		<div class="action-item-action-title">功能提示词</div>
	</div>
	<div class="action-item-action-remark">要求或规范说明</div>
</div>

>1、css代码
<pre class="prettyprint lang-css">
&lt;style type="text/css"&gt;
	.action-item-box{
		position:relative;
		height:2rem;
		text-align:center;
		width:4rem;
	}
	/*定义鼠标划过box时，内部的tip组件执行显示动画*/
	.action-item-box:hover .action-item-action-remark{
		visibility:visible;
		animation:action-item-show-remark 0.1s linear 0s 1 normal;
	}
	@keyframes action-item-show-remark {
		from {height:0;}
		to {height:0.5rem;}
	}
	.action-item-action-render{
		cursor:pointer;
		height:100%;
		line-height:100%;
		width:100%;
		text-align:center;
		border-radius:0.05rem;
		background: url(image/business/sample3.jpg) no-repeat center center;
		background-size: cover;
	}
	.action-item-action-title{
		backdrop-filter:blur(0.02rem);
		font-size:0.3rem;
		height:100%;
		width:100%;
		color:#ffffff;
		border-radius:0.05rem;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.action-item-action-remark{
		visibility: hidden;
		position: absolute;
		left: 0;
		bottom: 0;
		text-align: left;
		padding-left:0.1rem;
		width: calc(100% - 0.1rem);
		color: #ffffff;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.16rem;
		background-image: linear-gradient(transparent, #040404);
		opacity: 0.8;
		border-bottom-left-radius:0.05rem;
		border-bottom-right-radius:0.05rem;
	}
&lt;/style&gt;
</pre>

>2、html代码
<pre class="prettyprint lang-html">
	&lt;div class="action-item-box"&gt;
		&lt;div id="action-item-action-render" class="action-item-action-render" onclick="console.info('点击后的响应事件')"&gt;
			&lt;div class="action-item-action-title"&gt;功能提示词&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="action-item-action-remark"&gt;要求或规范说明&lt;/div&gt;
	&lt;/div&gt;
</pre>