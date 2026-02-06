#### DocumentFragment

```
DocumentFragment 是一种轻量级的 DOM 节点容器，它不属于主 DOM 树的一部分。它通常用于在内存中临时存储和操作 DOM 元素，然后一次性将其附加到主 DOM 树中，从而提高性能并减少页面的回流和重绘。
```
<pre class="prettyprint lang-javascript">
let fragment = document.createDocumentFragment();
...

fragment.appendChild(element);
document.body.appendChild(fragment);
</pre>