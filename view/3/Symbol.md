#### ECMAScript6新增的数据类型Symbol(符号)
 
```
Symbol(符号)是ECMAScript6新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。
符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
尽管符号听起来跟私有属性有点类似，但符号并不是为了提供私有属性的行为才增加的（尤其是因为Object API提供了方法，可以更方便地发现符号属性）。
相反，符号就是用来创建唯一记号，进而用作非字符串形式的对象属性。
Symbol类型在JavaScript中具有诸多独特且实用的特性。

Symbol被划分到了基本数据类型中。

当前javascript中一共有8个数据类型：
7个基本数据类型: String、Number、Symbol、Bigint、Boolean、undefined、null
1个引用数据类型: Object
```


#### 一、Symbol的重要特性与应用价值

>1.1、唯一性保障
```
每个Symbol实例都是独一无二的，这使其成为定义私有属性或内部方法的理想选择，特别是在大型项目和团队协作环境中，有效避免了命名冲突。
例如，在一个复杂的库或框架中，开发者可以使用Symbol来定义内部使用的属性或方法，防止外部代码意外访问或修改。
```
>1.2、动态属性名支持
<pre class="prettyprint lang-javascript">
通过计算属性名语法[expression]，Symbol允许在创建对象时动态确定属性名。这在需要根据用户输入、外部数据源或运行时条件生成属性名的场景中非常有用。
比如，在构建一个动态配置对象时，可以根据不同的配置参数使用Symbol生成相应的属性名。

console.log(Symbol('key1')===Symbol('key1'));//false
console.log([Symbol('key1')]===[Symbol('key1')]);//false
</pre>

>1.3、不可枚举性增强安全性
<pre class="prettyprint lang-javascript">
javaScript提供了Object.keys()、Object.values()和Object.entries()等方法用于遍历对象的属性。
然而，这些方法在默认情况下并不包含Symbol类型的键名、键值或键值对。
不会出现在JSON.stringify()结果中，不论属性名还是属性值只要是Symbol都会被忽略。
默认情况下，Symbol键是不可枚举的，这意味着它们不会出现在常规遍历方法（如for...in或Object.keys()）的结果中。
这种特性有助于保护对象的内部属性，防止意外访问或修改，从而增强了代码的安全性和封装性。例如，在一个包含敏感信息的对象中，可以使用Symbol键来存储这些信息，避免在遍历对象时意外泄露。

Symbol作为属性名，虽然不是私有属性，但是在for…in,for…of循环中，Object.keys() ,Object.getOwnPropertyNames()等都不会获取到。通常通过两种方法达到Symbol属性的遍历。

（1）Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有Symbol值的属性。
（2）Reflect.ownKeys()可以返回所有类型的键名，包括包括常规的键名和Symbol键名.
</pre>

>1.4、用于：创建唯一标识或者隐藏属性
<pre class="prettyprint lang-javascript">
//样例
const descriptorObi={
	stringProp:'value',
	[Symbol('symProp')]:"symbolValue"

};
const descriptors = 0bject.getOwnPropertyDescriptors(descriptorObj);
for(let key in descriptors)for'symbol'){
	if(typeof key === 'symbol'){
		console.log(key, descriptorObj[key]);
	}
}
// 输出:Symbol(symProp) symbolValue
</pre>

#### 二、用Symbol定义常量

>2.1、Symbol.for()
```
对于Symbol.for方法需要记住两点:

(1)Symbol.for()所返回的Symbol值的作用域是整个代码库（包括不同的iframe或者service worker），是一个全局的变量,第一次产生的时候就会登记下来。
(2)调用Symbol.for()的时候，如果在全局环境中检索给定的key是否存在，如果不存在才会新建一个值,而Symbol()不会，Symbol()每次返回的都是不同的值。
```
>2.2、Symbol.keyFor()
<pre class="prettyprint lang-javascript">
Symbol.keyFor方法返回一个已登记的Symbol类型的值的key。

var s1 = Symbol.for('foo');
Symbol.keyFor(s1) //"foo"
var s2 = Symbol('foo');
Symbol.keyFor(s2);//undefiend
</pre>

#### 三、获取Symbol的描述内容的字符串，无论Symbol(arg)中的arg是什么类型，得到的描述都是字符串：

>3.1、使用Symbol.description 属性
<pre class="prettyprint lang-javascript">
let testObj = Symbol('foo');
console.log(fooSymbol.description);//结果得到字符串"foo"
</pre>

>3.2、使用Symbol.toString()函数
<pre class="prettyprint lang-javascript">
Symbol('foo').toString();//得到字符串 "Symbol(foo)"
</pre>

#### 四、Symbol的静态属性及用途

```
Symbol 对象是不可改变且唯一的，适合用作对象属性的键。除了作为对象的属性键之外，Symbol 还有许多静态属性（也称为“内置符号”或“众所周知的符号”）
```

>4.1、Symbol.hasInstance
<pre class="prettyprint lang-javascript">
Symbol.hasInstance 属性用来定制 instanceof 运算符，在一个构造器对象上使用 instanceof 时会调用这个方法。

class MyClass {
	static [Symbol.hasInstance](instance) {
		return Array.isArray(instance);
	}
}
console.log([] instanceof MyClass); // true
</pre>

>4.2、Symbol.isConcatSpreadable
<pre class="prettyprint lang-javascript">
Symbol.isConcatSpreadable 属性是一个布尔值，表示当在 Array.prototype.concat() 时，对象是否可以展开。

let collection = {
	0: 'hello',
	1: 'world',
	length: 2,
	[Symbol.isConcatSpreadable]: true
};
console.log(['Hi'].concat(collection)); // ['Hi', 'hello', 'world']
</pre>

>4.3、Symbol.iterator
<pre class="prettyprint lang-javascript">
Symbol.iterator 属性指向对象的默认迭代器方法，通常用于定义对象的 for-of 循环行为。

let fibonacci = {
  [Symbol.iterator]() {
	let pre = 0, cur = 1;
	return {
	  next() {
		[pre, cur] = [cur, pre + cur];
		return { done: false, value: cur };
	  }
	};
  }
}
for (let n of fibonacci) {
  if (n &gt; 1000) break;
  console.log(n);
}

为什么这里要用Symbol.iterator而不是字符串？假设不用Symbol.iterator，可迭代对象需要有一个字符串属性名'iterator'
把上面代码中的[Symbol.iterator]替换为iterator，就会存在一个潜在的缺陷，假设有个恶意用户给fibonacci 构造函数传了一个带有iterator属性的对象：

const foo = new fibonacci({iterator : "good bye"});
这样你在foo 上使用for/of的话，JavaScript 会抛出TypeError: obj is not iterable异常。
可以看出，传入对象的iterator函数覆盖了类的iterator属性。这有点类似原型污染的安全问题，无脑复制用户数据会对一些特殊属性，比如__proto__和constructor带来问题。
</pre>

>4.4、Symbol.match
<pre class="prettyprint lang-javascript">
Symbol.match 属性用于定义匹配的正则表达式行为，即当一个对象被 String.prototype.match() 方法调用时所执行的操作。

let hasNumber = {
	[Symbol.match](string) {
		return /\d+/.test(string);
	}
};
console.log('123'.match(hasNumber)); // true
</pre>

>4.5、Symbol.replace
<pre class="prettyprint lang-javascript">
Symbol.replace 属性定义了当一个对象被 String.prototype.replace() 方法调用时如何替换字符串中的匹配部分。

let replaceHyphens = {
	[Symbol.replace](string, replacer) {
		return string.replace(/-/g, replacer);
	}
};
console.log('123-45-678'.replace(replaceHyphens, ':')); // '123:45:678'
</pre>

>4.6、Symbol.search
<pre class="prettyprint lang-javascript">
Symbol.search 属性定义了当 String.prototype.search() 方法被调用时，如何返回字符串中匹配项的索引。

let searchObject = {
	[Symbol.search](string) {
		return string.indexOf('JavaScript');
	}
};
console.log('Hello JavaScript!'.search(searchObject)); // 6
</pre>

>4.7、Symbol.species
<pre class="prettyprint lang-javascript">
Symbol.species 属性用于创建派生对象时确定默认的构造函数。

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
let a = new MyArray(1,2,3);
let mapped = a.map(x =&gt; x * x);
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

>4.8、Symbol.split
<pre class="prettyprint lang-javascript">
Symbol.split 属性定义当一个对象被 String.prototype.split() 方法调用时，如何分割字符串。

let splitByLength = {
	[Symbol.split](string) {
		return string.length &lt;= 3 ? [string] : [string.slice(0, 3), string.slice(3)];
	}
};
console.log('JavaScript'.split(splitByLength)); // ['Jav', 'aScript']
</pre>

>4.9、Symbol.toPrimitive
<pre class="prettyprint lang-javascript">
Symbol.toPrimitive 属性用于指定对象转换为相应的原始值时的行为。

let obj = {
	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return 42;
		}
		if (hint === 'string') {
			return 'fourty two';
		}
		return true;
	}
};
console.log(+obj);  // 42
console.log(`${obj}`); // 'fourty two'
</pre>

>4.10、Symbol.toStringTag
<pre class="prettyprint lang-javascript">
Symbol.toStringTag 属性用于自定义对象的默认字符串描述，是在对象上调用 toString 方法时使用的。

let myCollection = {
	get [Symbol.toStringTag]() {
		return 'MyCollection';
	}
};
console.log(myCollection.toString()); // [object MyCollection]
</pre>

>4.11、Symbol.unscopables
<pre class="prettyprint lang-javascript">
Symbol.unscopables 属性指出了哪些属性名会被 with 环境绑定排除。

Array.prototype[Symbol.unscopables] = Object.assign({}, Array.prototype[Symbol.unscopables], {
	map: true
});
with ([]) {
	console.log(map); // ReferenceError: map is not defined
}
</pre>
