#### ES6新增的反射工具类Reflect

```
Reflect是一个内置的对象，它提供拦截 JavaScript 操作的方法。Reflect不是一个函数对象，因此它是不可构造的。Reflect的所有的方法都是静态的就和Math一样，目前它还没有静态属性。
Reflect对象的方法与Proxy对象的方法相同。
Reflect 一共有13个静态方法：
其中一部分是原来存在Object上的方法，将它转义到了Reflect上，并作了小改动，让方法更加合理。
1、defineProperty 与Object.defineProperty类似，但是当对象无法定义时Object.defineProperty会报错而Reflect.defineProperty不会，它会返回false，成功时返回true，如果不是对象还是会报错。
2、getPrototypeOf(target) 与Object.getPrototypeOf一样，返回指定对象的原型。
3、setPrototypeOf(target, prototype) 与Object.setPrototypeOf一样，它将指定对象的原型设置为另外一个对象。
4、getOwnPropertyDescriptor() 与Object.getOwnPropertyDescriptor一样，如果在对象中存在，则返回给定的属性的属性描述符。
5、isExtensible(target) 与Object.isExtensible类似，判断一个对象是否可扩展（是否可以在它上面添加新的属性），它们的不同点是，当参数不是对象时（原始值），Object的将它强制转变为一个对象，Reflect是直接报错。
6、preventExtensions(target) 与Object.preventExtensions类似，阻止新属性添加到对象，不同点和上一条一样。
7、apply(func, thisArg, args) 与Function.prototype.apply.call(fn, obj, args)一样。
8、ownKeys(target) 与Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))一样，返回一个包含所有自身属性（不包含继承属性）的数组
9、has(target, key) 与in操作符一样，让判断操作都变成函数行为。
10、deleteProperty(target, key) 与delete操作符一样，让删除操作变成函数行为，返回布尔值代表成功或失败。
11、construct(target, argumentsList[, newTarget]) 与new操作符一样，target构造函数，第二参数是构造函数参数类数组，第三个是new.target的值。
12、get(target, key[, receiver]) 与obj[key]一样，第三个参数是当要取值的key部署了getter时，访问其函数的this绑定为receiver对象。
13、set(target, key, value[, receiver]) 设置target对象的key属性等于value，第三个参数和set一样。返回一个布尔值。
```

>1.使用样例
<pre class="prettyprint lang-javascript">
// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true

// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1
// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1

// 旧写法
delete myObj.foo;
// 新写法
Reflect.deleteProperty(myObj, 'foo');

// new 的写法
const instance = new Greeting('张三');
// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);

// 旧写法
Object.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});
// 新写法
Reflect.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});

Reflect.get(1, 'foo') // 报错
Reflect.get(false, 'foo') // 报错
Reflect.set(1, 'foo', {}) // 报错
Reflect.set(false, 'foo', {}) // 报错

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

var myReceiverObject = {
  foo: 4,
  bar: 4,
};

Reflect.get(myObject, 'baz', myReceiverObject) // 8
</pre>
