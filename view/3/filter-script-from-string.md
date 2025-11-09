#### 使用第三方库清洗html字符串中的脚本

>1.第三方库DOMPurify

<a href="https://github.com/cure53/DOMPurify" target="_blank">DOMPurify代码库</a><br>
<a href="https://github.com/cure53/DOMPurify/releases" target="_blank">下载到本地</a>

>2.使用样例
<pre class="prettyprint lang-javascript">
//引入组件，传统方式和工程方式都可以
//&lt;script type="text/javascript" src="dist/purify.min.js"&gt;&lt;/script&gt;
//npm install dompurify
//import DOMPurify from 'dompurify';

// 清理含有潜在危险的 HTML
const dirtyHTML = '&lt;img src=x onerror="alert(1)"&gt;';
const cleanHTML = DOMPurify.sanitize(dirtyHTML);
console.log(cleanHTML); 
//输出: &lt;img src="x"&gt;
</pre>