#### 在javascript中操作css样式表

<pre class="prettyprint lang-javascript">
// create a new style tag
var style = document.createElement("style");

// add the style tag to the head of the document
document.head.appendChild(style);

//优化一点，可以让head里的样式扎堆站一起
let firstStyleOrLinkTag = document.querySelector('head&lt;style, head&lt;link');
if (firstStyleOrLinkTag) {
	head.insertBefore(style, firstStyleOrLinkTag);
}
else {
	head.appendChild(style);
}


// add a new CSS rule to the stylesheet
//.insertRule()方法接受两个参数：第一个参数是要添加的CSS规则，第二个参数是要插入规则的索引。如果不指定索引，规则将被添加到样式表的末尾。
style.sheet.insertRule("body { background-color: red; }", 0);

// add multiple CSS rules to the stylesheet
//也可以使用 .append() 方法添加多个CSS规则。
style.sheet.append("body { background-color: red; }");
style.sheet.append("h1 { color: white; }");

// change the existing styles
//更改现有样式
style.sheet.cssText = "body { background-color: blue; }";

//移除样式
style.sheet.cssText = "";
</pre>