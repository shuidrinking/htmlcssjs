#### MutationObserver用于监听dom树的变化

<pre class="prettyprint lang-javascript">
const observer = new MutationObserver((mutationsList, observer) => {
	for(const mutation of mutationsList) {
		if (mutation.type === 'childList') {
			console.log('一个新的子节点被添加或删除');
			// 在此处编写需要在DOM变化时执行的代码
		}
	}
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
</pre>