#### 迭代函数中为什么必须使用yield

>1、作用
```
在迭代函数中用于暂停和恢复生成器函数
yield 关键字使生成器函数执行暂停，yield 关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 return 关键字。

yield 关键字实际返回一个 IteratorResult 对象，它有两个属性，value 和 done。value 属性是对 yield 表达式求值的结果，而 done 是 false，表示生成器函数尚未完全完成。

一旦遇到 yield 表达式，生成器的代码将被暂停运行，直到生成器的 next() 方法被调用。每次调用生成器的 next() 方法时，生成器都会恢复执行，直到达到以下某个值：

yield，导致生成器再次暂停并返回生成器的新值。下一次调用 next() 时，在 yield 之后紧接着的语句继续执行。
throw 用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样。
到达生成器函数的结尾。在这种情况下，生成器的执行结束，并且 IteratorResult 给调用者返回 value 的值是 undefined 并且 done 为 true。
到达 return 语句。在这种情况下，生成器的执行结束，并将 IteratorResult 返回给调用者，其 value 的值是由 return 语句指定的，并且 done 为 true。
如果将参数传递给生成器的 next() 方法，则该值将成为生成器当前 yield 操作返回的值。

在生成器的代码路径中的 yield 运算符，以及通过将其传递给 Generator.prototype.next() 指定新的起始值的能力之间，生成器提供了强大的控制力。
```

>2、语法
<pre class="prettyprint lang-javascript">
[rv] = yield [expression];

解释：
expression
定义通过迭代器协议从生成器函数返回的值。如果省略，则返回 undefined。

rv
返回传递给生成器的 next() 方法的可选值，以恢复其执行。

//样例代码
function* countAppleSales() {
	const saleList = [3, 7, 5];
	for (let i = 0; i &lt; saleList.length; i++) {
		yield saleList[i];
	}
}
//一旦生成器函数已定义，可以通过构造一个迭代器来使用它。
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
</pre>

