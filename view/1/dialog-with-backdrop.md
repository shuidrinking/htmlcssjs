#### 使用dialog标签，实现全屏覆盖式弹出信息

<dialog>
	<div style="position:fixed;padding:0.2rem;border-radius:0.1rem;top:calc(50% - 0.7rem);left:calc(50% - 2.2rem);width:4rem;height:1rem;line-height:1rem;background-color:#ffffff;">
		这个模态的对话框有漂亮的背景
		按esc也可关闭
		<div class="miniButton lightRedButton" onclick="document.querySelector('dialog').close()">关闭</div>
	</div>
</dialog>
<div class="demobox">
	<div class="onedemo">
		<div class="button deepBlueButton" onclick="document.querySelector('dialog').showModal()">打开页内dialog</div>
	</div>
</div>

> 页内实现全屏弹出窗口的dialog标签
```
dialog标签用于弹出全屏对话框，可用来作为“弹出层”，而无需额外开发js代码实现同页内的全屏弹出窗口.
除了用css定义dialog的样式外，::backdrop 这个伪元素专门用于为dialog设置背景

默认按esc键可关闭弹出窗
```
<pre class="prettyprint lang-html">
	&lt;dialog&gt;
		&lt;div style="position:fixed;padding:0.2rem;border-radius:0.1rem;top:calc(50% - 0.7rem);left:calc(50% - 2.2rem);width:4rem;height:1rem;line-height:1rem;background-color:#ffffff;"&gt;
			这个模态的对话框有漂亮的背景
			&lt;div class="miniButton lightRedButton" onclick="document.querySelector('dialog').close()"&gt;关闭&lt;/div&gt;
		&lt;/div&gt;
	&lt;/dialog&gt;
	&lt;div class="demobox"&gt;
		&lt;div class="onedemo"&gt;
			&lt;div class="button deepBlueButton" onclick="document.querySelector('dialog').showModal()"&gt;显示提示框&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</pre>
<pre class="prettyprint lang-css">
::backdrop {
	background-image:
		radial-gradient(
			circle,
			white 0 5vw,
			transparent 5vw 20vw,
			white 20vw 22.5vw,
			#eeeeee 22.5vw
		),
		conic-gradient(
			#272b66 0 50grad,
			#2d559f 50grad 100grad,
			#9ac147 100grad 150grad,
			#639b47 150grad 200grad,
			#e1e23b 200grad 250grad,
			#f7941e 250grad 300grad,
			#662a6c 300grad 350grad,
			#9a1d34 350grad 400grad,
			#43a1cd 100grad 150grad,
			#ba3e2e
		);
}
</pre>

<style type="text/css">
::backdrop {
	background-image:
		radial-gradient(
			circle,
			white 0 5vw,
			transparent 5vw 20vw,
			white 20vw 22.5vw,
			#eeeeee 22.5vw
		),
		conic-gradient(
			#272b66 0 50grad,
			#2d559f 50grad 100grad,
			#9ac147 100grad 150grad,
			#639b47 150grad 200grad,
			#e1e23b 200grad 250grad,
			#f7941e 250grad 300grad,
			#662a6c 300grad 350grad,
			#9a1d34 350grad 400grad,
			#43a1cd 100grad 150grad,
			#ba3e2e
		);
}
</style>