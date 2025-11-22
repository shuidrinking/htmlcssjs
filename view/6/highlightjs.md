#### 利用highlightjs工具组件高亮标注代码块

>1、下载组件
<a href="https://github.com/highlightjs/highlight.js" target="_blank">官方github库</a>
<a href="https://highlightjs.org/#usage" target="_blank">cdn代码库</a>
<a href="https://highlightjs.readthedocs.io" target="_blank">API手册</a>

>2、工作api
```
在页面加载后，调用hljs.highlightAll()，highlightjs会主动侦测页面内的&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;,识别语种并高亮渲染，可以为code设置 class="language-具体语言"进行指定。
```

<pre class="prettyprint lang-javascript">
//高亮页面中所有位于 pre code标签中的代码
hljs.highlightAll();

//高亮指定代码块
hljs.highlightElement(代码所在的element, { language: '编程语种' });

//高亮给定文本
const highlightedCode = hljs.highlight(
	'程序文本',
	{ language: '编程语种' }
).value;

//使用插件，例如集成“显示行号”的插件（官方不提供）
addPlugin(new SomePlugin());
</pre>

>3、使用样例
<pre class="prettyprint lang-javascript">
&lt;script type="text/javascript"
document.addEventListener('DOMContentLoaded', (event) => {
	hljs.highlightAll();
});
//或者
document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('pre code').forEach((el) => {
		hljs.highlightElement(el);
	});
});
&lt;/script&gt;
</pre>