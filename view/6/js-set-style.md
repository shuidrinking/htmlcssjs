#### 一、如何在设置元素的内联样式

> 1.1、设置元素的内联样式，即设置元素的style
<pre class="prettyprint lang-javascript">
	//直接设置所有内联样式，属性名使用“横线命名法”
	element.style="属性1:值1; ... ; 属性n:值n;";

	//用点符号操作style中的具体属性，someAttribute使用“驼峰命名法”，例如：backgroundColor
	element.style.someAtrribute=someValue;

	//用setProperty、getPropertyValue函数操作style中的具体属性，属性名使用“横线命名法”
	element.style.setProperty("some-attribute", some-value);
	element.style.getPropertyValue("some-attribute")
</pre>

#### 二、设置元素使用的css类

> 2.1、使用element.classList
<pre class="prettyprint lang-javascript">
	element.className +=" newClass";
	element.classList.add("newClass");
	element.classList.remove("someClass");

	//如果元素使用了someClass，则移除它；如果没使用，则添加它
	element.classList.toggle("someClass");
	someElement.addEventListener('click', function(event) {
		event.target.classList.toggle('someClass');
	});
</pre>

#### 三、如何动态修改css类

> 3.1、逐级获取，最后通过style落地
<pre class="prettyprint lang-javascript">
	//cssArray的Prototype为StyleSheetList，下面会获取页面所有的公共样式定义，包括css以及style标签
	let cssArray = document.styleSheets;

	//css文件或者style标签的Prototype为CSSStyleSheet
	let oneCssFile = cssArray[i];

	//class的Prototype为CSSStyleRule
	let oneClass=oneCssFile[i];

	//获取某个类的类名
	document.styleSheets[11].cssRules[0].selectorText

	//获取某个类中定义的所有style
	document.styleSheets[11].cssRules[0].style

	//获取某个class中的某个属性，属性名使用驼峰语法规则，例如backgroundColor
	document.styleSheets[11].cssRules[0].style.backgroundColor

	//获取到某个类的style后，进而可以用setProperty、getPropertyValue、点符号 进行操作具体属性
	document.styleSheets[0].cssRules[5].style.setProperty("align-items", "flex-start");
	document.styleSheets[0].cssRules[5].style.getPropertyValue("align-items");
	document.styleSheets[0].cssRules[5].style.aligItems="flex-start";
	document.styleSheets[0].cssRules[5].style.aligItems;
</pre>

> 3.2、通过创建style标签，实现创建class类
<pre class="prettyprint lang-javascript">
	let head = document.head;
	let style = document.createElement('style');
	//通过下面的操作，在head中会增加一个style标签：&lt;style type="text/css" some-att="some-value"&gt;.a{...} .b{...}&lt;/style&gt;
	style.type="text/css";
	style.textContent = `.a{...} .b{...}`;
	style.setAttribute('some-att', 'some-value');
	head.appendChild(style);
</pre>

#### 四、使用css变量

> 实现套路
```
	1、自定义变量属性，属性命名语法“双横线+单词”
	2、自定义变量名，作为其他属性值
	3、通过style.setProperty设置自定义属性的值，达到改变某个属性值的效果
```
<pre class="prettyprint lang-css">
	/*全局变量*/
	:root{
		--blue-color: #00ffff;
	}
</pre>
<pre class="prettyprint lang-javascript">
	//动态修改
	var r = document.querySelector(':root');
	r.style.setProperty('--blue', 'lightblue');
</pre>