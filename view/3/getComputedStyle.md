#### 获取元素渲染后的当前的属性

>1.调用getComputedStyle函数
<pre class="prettyprint lang-javascript">
函数原型：
window.getComputedStyle(_element);
函数返回值：返回的style是一个实时的 CSSStyleDeclaration 对象

例如：
let elem1 = document.getElementById("elemId");
let style = window.getComputedStyle(elem1, null);
// 它等价于：
// let style = document.defaultView.getComputedStyle(elem1, null);

再例如，可以获取伪元素属性值：
let h3 = document.querySelector("h3"),
result = getComputedStyle(h3, "::after").content;
console.log(`the generated content is: ${result}`);
</pre>