#### 如何判断一个对象是否html元素

```
页面上的元素都是节点(Node)，有元素节点(Element Node)、属性节点(Attribute Node)、文本节点(Text Node)等。
元素类型定义在元素的nodeType属性中
```

>1.w3c定义nodeType
<pre class="prettyprint lang-javascript">
const unsigned short ELEMENT_NODE = 1;//HMTLElement元素
const unsigned short ATTRIBUTE_NODE = 2;
const unsigned short TEXT_NODE = 3;
const unsigned short CDATA_SECTION_NODE = 4;
const unsigned short ENTITY_REFERENCE_NODE = 5;
const unsigned short ENTITY_NODE = 6;
const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
const unsigned short COMMENT_NODE = 8;
const unsigned short DOCUMENT_NODE = 9;
const unsigned short DOCUMENT_TYPE_NODE = 10;
const unsigned short DOCUMENT_FRAGMENT_NODE = 1
</pre>

>2.判断方法
<pre class="prettyprint lang-javascript">
只使用 nodeType这个属性特征是无法判断的，因为可以自己定义一个含有nodeType属性的对象，比如{nodeType:1}
下面是准确的方法：
//方法一：
function isDomElement(element) {
    return element instanceof HTMLElement;
}

//方法二：
//Object.prototype.toString.call方法返回一个表示对象类型的字符串。
//对于DOM元素来说，这个字符串通常是[object HTMLElement]。
function isDomElement(element) {
	//获得一个字符串，内容范式为："[object HTML标签Element]"，例如 '[object HTMLDivElement]
	let typeString = Object.prototype.toString.call(element);
	//需要编写一个正则表达式对这个字符串再进行匹配
	return /^\[object HTML[A-Z][a-z]+Element\]$/.test(typeString);
}

