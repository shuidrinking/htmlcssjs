#### ES6新增的代理模式

>1、Proxy说明
```
Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等），等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
Proxy 就像在目标对象之间的一个代理，任何对目标的操作都要经过代理。代理就可以对外界的操作进行过滤和改写。
Proxy是构造函数，它有两个参数target和handler，
target是用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler是定义了“当执行一个操作时定义代理的行为的函数”的对象，它一共支持 13 种拦截函数。和Reflect的相同。如果没有定义某种操作，那么这种操作会被转发到目标对象身上。
```

<pre class="prettyprint lang-javascript">
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
</pre>


>2、apply方法拦截函数的调用、call和apply操作。
<pre class="prettyprint lang-javascript">
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
// "I am the proxy"
</pre>

>3、defineProperty方法拦截了Object.defineProperty操作。
<pre class="prettyprint lang-javascript">
var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效
// defineProperty 方法返回 false，导致添加新属性总是无效。
</pre>

>4、getPrototypeOf方法主要用来拦截获取对象原型，会拦截以下操作：
<pre class="prettyprint lang-javascript">
Object.prototype.__proto__
Object.prototype.isPrototypeOf()
Object.getPrototypeOf()
Reflect.getPrototypeOf()
instanceof
</pre>

>5、ownKeys方法用来拦截对象自身属性的读取操作，会拦截以下操作：
<pre class="prettyprint lang-javascript">
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
for...in
</pre>

>6、set方法可以做到设置值前验证性拦截
<pre class="prettyprint lang-javascript">
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age); 
// 100
person.age = 'young'; 
// 抛出异常: Uncaught TypeError: The age is not an integer
person.age = 300; 
// 抛出异常: Uncaught RangeError: The age seems invalid
</pre>

>7、this 指向
<pre class="prettyprint lang-javascript">
//虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
//样例一：
const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true

//样例二：
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.

// getDate 方法只能在Date对象实例上面拿到，
// 如果this不是Date对象实例就会报错。
// 这时，this绑定原始对象，就可以解决这个问题

const target = new Date('2015-01-01');
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy = new Proxy(target, handler);

proxy.getDate() // 1
</pre>

