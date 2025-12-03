#### async 和 await 控制同步执行

>1、简介
<pre class="prettyprint lang-s">
async 和 await 是在 ES2017（即 ES8） 中正式引入的语法。用于支持同步执行（使异步函数顺序执行）。
这两个关键字是基于 Promise 的语法糖，旨在简化异步代码的编写和阅读，使其更接近同步代码的风格。
</pre>

>2、规则
<pre class="prettyprint lang-s">
async 用于声明一个函数为异步函数，异步函数会返回一个 Promise 对象。
await 将会暂停当前函数后续代码的执行，但不会阻塞主线程，当await处返回一个 Promise 对象的解析结果之后，await 会恢复当前函数的执行，从暂停的位置继续运行后续代码。

只能在被async标记的函数中使用 await，否则会抛出语法错误。
无法取消 Promise：一旦调用了 await，无法中途取消正在进行的异步操作。
</pre>

>3、代码样例
<pre class="prettyprint lang-javascript">
function resolveAfter2Seconds() {
  console.log("开始较慢兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("较慢兑现的 promise 完成了");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("开始较快兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("较快兑现的 promise 完成了");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart 开始 ==");

  // 1. 启动一个计时器，并在计时器完成后打印结果
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. 等待前一个计时器完成后，启动下一个计时器
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart 结束 ==");
}
</pre>