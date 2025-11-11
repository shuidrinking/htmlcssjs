#### 方括号内的表达式在运算时会被求值
 
<pre class="prettyprint lang-javascript">
const name ='xbk';
const classmates={
	[name]:"猛男";
}
console.log(classmates);
//输出结果为:{xbk:'猛男"}
//方括号[]内的表达式name在运行时被求值，其结果"xbk"成为了对象classmates的属性名。
</pre>