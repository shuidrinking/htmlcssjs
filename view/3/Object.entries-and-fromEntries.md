#### 键值形态的可枚举对象与普通对象“互转”的原生工具函数

>1.Object.fromEntries(iterable)函数：键值形态的对象转变为普通的Object
<pre class="prettyprint lang-javascript">
//将 二维Array 转换成 Object：
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

//将 Map 转换成 Object：
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
</pre>

>2.Object.entries函数：将普通的Object转变为可枚举的对象

<pre class="prettyprint lang-javascript">
Object.entries() 返回一个数组，其元素是直接在 object 上找到相应的可枚举字符串键属性的键值对数组。这与使用 for...in 循环迭代相同，只是使用 for...in 循环也枚举原型链中的属性。
如果只需要属性的键，请使用 Object.keys()。如果只需要属性的值，请使用 Object.values()。
//样例：
const object1 = {
  a: "somestring",
  b: 42,
};
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// Expected output:
// "a: somestring"
// "b: 42"
</pre>

