#### 获取元素渲染后的当前的属性

>1.调用getComputedStyle函数
<pre class="prettyprint lang-javascript">
语法：
window.getComputedStyle(_element);
或者
document.defaultView.getComputedStyle(_element);

返回值：返回的style是一个实时的 CSSStyleDeclaration 对象

//例如：
let elem1 = document.getElementById("elemId");
let style = window.getComputedStyle(elem1, null);
// 它等价于：
// let style = document.defaultView.getComputedStyle(elem1, null);

//可以获取伪元素属性值：
let h3 = document.querySelector("h3"),
result = getComputedStyle(h3, "::after").content;
console.log(`the generated content is: ${result}`);

//可以获取当前元素的所有属性的渲染值
let ele = document.getElementById('ele');
let computedValue = getComputedStyle(ele) || document.defaultView.getComputedStyle(ele);
console.log(computedValue.width); //300px 访问内部样式
console.log(computedValue.borderRadius); //10px 行内样式
console.log(computedValue['text-align']); //center  
console.log(computedValue.color); // rgb(0, 0, 255)
console.log(computedValue.backgroundColor); //rgb(255, 0, 0)  
console.log(computedValue['--height-val']); //undefined  无法访问自定义属性
console.log(computedValue.cssFloat); //right 
</pre>

>2.获取元素坐标
<pre class="prettyprint lang-javascript">
node.getBoundingClientRect()
返回一个DOMRect对象：
{
	x:最左边的x
	left: 与x值相同
	y:顶部的y
	top: 与y值相同
	bottom:底部的y
	right:最右边的x
	width:当前宽度
	height:当前高度
}
</pre>