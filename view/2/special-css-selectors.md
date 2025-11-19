#### css选择器

>1、按属性
<pre class="prettyprint lang-css">
（1）范式：
html元素标签:[属性或属性=值]
（2）样例：
text或者password类型的输入框
input[type="text"],input[type="password"]{
...
}
</pre>

>2、包含
<pre class="prettyprint lang-css">
（1）范式：
样式key:has(元素选择器){
...
}
（2）样例：
包含图片的段落
p:has(img){
...
}

使用了desc类的元素的后面紧跟着的span兄弟元素
.desc:has(+ span){
...
}
</pre>

>3、排除
<pre class="prettyprint lang-css">
（1）范式：
样式key:not(选择器数组){
...
}
（2）例如：不包含参数选择器里指定的div
div:not(.somestyle, [data-type="temp"]){
...
}
</pre>