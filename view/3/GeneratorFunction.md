#### 专门用来迭代的生成器函数

>1、用途
<pre class="prettyprint lang-javascript">
function* 声明创建一个 GeneratorFunction 对象，专门用于迭代。
每次调用生成器函数时，它都会返回一个新的 Generator 对象，
该对象符合迭代器协议。当迭代器的 next() 方法被调用时，生成器函数的主体会被执行，直到遇到第一个 yield 表达式，该表达式指定了迭代器要返回的值，或者用 yield* 委托给另一个生成器函数。

使用表达式： function* 声明创建一个绑定到给定名称的新生成器函数。

生成器函数可以退出，并在稍后重新进入，其上下文（变量绑定）会在重新进入时保存。
生成器是不可构造的，new一个生成器函数会看到异常信息“xxx is not a constructor”
</pre>

>2、语法
<pre class="prettyprint lang-javascript">
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}

箭头函数不能用来定义生成器函数。
function 和 * 是两个单独的标记，因此它们可以用空白或换行符分隔。
</pre>

>3、样例
<pre class="prettyprint lang-javascript">
（1）普通样例
function* generator(i) {
	yield i;
	yield i + 10;

}
const gen = generator(10);
console.log(gen.next().value);// Expected output: 10
console.log(gen.next().value);
// Expected output: 20

（2）使用 yield* 示例
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

（3）传入参数给生成器
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// next 的第一次调用从函数的开头开始执行，直到第一个 yield 语句
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise

（4）生成器中的返回语句
function* yieldAndReturn() {
  yield "产生的值";
  return "返回的值";
  yield "不会被访问到的值";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "产生的值", done: false }
console.log(gen.next()); // { value: "返回的值", done: true }
console.log(gen.next()); // { value: undefined, done: true }

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

（5）生成器作为对象属性
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }

（6）生成器作为对象方法
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
</pre>
