#### 深克隆

<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/structuredClone" target="_blank">MDN文档</a>
<pre class="prettyprint lang-javascript">
clonedObj = structuredClone(originalObj)

// 创建一个具有值和对自身的循环引用的对象。
const original = { name: "MDN" };
original.itself = original;

// 对它进行克隆
const clone = structuredClone(original);

console.assert(clone !== original); // 对象并不相同（标识不同）
console.assert(clone.name === "MDN"); // 它们具有相同的值
console.assert(clone.itself === clone); // 且保留了循环引用
</pre>