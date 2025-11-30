#### 被async修饰的函数必须使用await调用，否则获取到的永远是一个Promise

<pre class="prettyprint lang-javascript">
async function test() {
  return 42;
}

// ❌ 错误的调用方式
const result = test();
console.log(result); // 获取到的仍然是一个Promise { <pending> }

// ✅ 正确的调用方式
const result = await test();
console.log(result); // 42


//如果你在全局作用域（顶层代码不是 async 函数）
// ✅ 包装在 IIFE 中
(async () => {
  const result = await test();
  console.log(result);
})();
</pre>
