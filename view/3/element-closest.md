#### 向上找父元素的函数

>1、说明
<pre class="prettyprint lang-javascript">
匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 null。
//语法
node.closest(selectors)
而node.parentNode()函数只能获取若有的唯一父元素
</pre>

>2、样例
<pre class="prettyprint lang-javascript">
var el = document.getElementById("div-03");
var r1 = el.closest("#div-02"); // 返回 id 为 div-02 的那个元素
var r2 = el.closest("div div"); // 返回最近的拥有 div 祖先元素的 div 祖先元素，这里的话就是 div-03 元素本身
var r3 = el.closest("article > div"); // 返回最近的拥有父元素 article 的 div 祖先元素，这里的话就是 div-01
var r4 = el.closest(":not(div)"); // 返回最近的非 div 的祖先元素，这里的话就是最外层的 article
</pre>