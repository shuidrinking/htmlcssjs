#### Promise讲解

```
Promise是指异步执行，执行完成后有回调，类似java中的有返回值的线程
先有A+社区规范，在ajax调用的函数后带了then函数
后有ES6标准，广泛支持各种异步且回调的需求，提供了Promise类

Promise 构造函数的代码是同步代码，回调函数是异步代码
```

>1、使用范式：
<pre class="prettyprint lang-javascript">
const promise = new Promise((resolve函数, reject函数)=>{
	判断执行条件，选择性地执行resolve或者reject函数
	resolve(返回值)或reject(返回值);
});

then有两个回调函数作为参数，第一个是当resolve被调用时对应的回调函数，第二个是reject对应的回调函数， then函数可以反复调用多次
promiese.then(
	(result)=>{
		//resolve被调用后的回调函数，res是返回值
		console.log('fulfilled: ', res);
	},
	(result)=>{
		console.log('rejected: ', err)
	}
);
promiese.then(
	res=>{
		console.log('fulfilled: ', res);
	},
	err=>{
		console.log('rejected: ', err)
	}
)
</pre>

>2、与任务队列的关系
```
浏览器有两种任务，宏任务和微任务。其中宏任务又分为普通任务，和定时任务。

在主线程中被同步执行的是“宏队列”中任务，回调函数会被包装成一个task放到“微队列”中。
要是处理微任务队列的过程中，产生的了新的微任务，依旧直接放入微队列中。直到所有的微任务都被执行，主线程就会执行下一个宏任务。
执行顺序：浏览器会先执行宏任务，然后再执行所有的微任务；然后是下一个宏任务，然后再是所有的微任务，如此循环。

setTimeout 中的函数虽说也是异步，但其会将函数包裹成宏任务，放到定时队列中。
setTimout，setInterval生成的任务，是定时任务。定时任务刚开始会被放在定时任务队列中，等定时任务时间一到，就会被放到普通宏任务队列中，等到主线程执行。

then 函数中的异步任务是微任务，所以优先级高于 setTimeout
```

>3、then函数的返回值是一个新的 Promise，意味着可以链式调用 then！
<pre class="prettyprint lang-javascript">
then 函数也是有返回值的，它的返回值是一个新的 promise！
const promise1 = promise.then(
	res=>{
		console.log('fulfilled: ', res);
		return 值;
	},
	err=>{
		console.log('rejected: ', err);
		return 值;
	}
);
在回调函数中return的值，相当于Promise构造函数中传入的函数被调用时携带的参数
回调函数还可以返回一个新的promise
const promise1 = promise.then(
	res=>{
		console.log('fulfilled: ', res);
		return new Promise((resolve, reject)=>{
		reject('zenos');
	});
	},
	err=>{
		console.log('rejected: ', err)
	}
)
那么 then 返回的是 promise 意味着什么呢？意味着可以链式调用 then！
</pre>

>4、then中对失败具有不传染性！
<pre class="prettyprint lang-javascript">
promise 的then中对失败具有不传染性，当其中一个promise的reject函数被调用后，其then再返回的promise并不是reject而是resolve。
onRejected 可以返回任意值，
如果返回的是非 promise 值，那么生成的新 promise 的状态都是fulfilled，并且它的值和 onFulfilled 的返回值一致；
如果 onRejected 返回的是 promise 的值，那么生成的新 promise 的状态和返回的 promise 的状态一致，且值也是一致的。

失败的 promise 在前面 then 中被解决了，那么后面的 then 得到的就是 fulfilled 的 promise如果我想将失败的状态往后传，应该怎么做呢？ 很简单啊，我在onRejected中返回一个失败状态的 promise 不就可以了

const promise = newPromise((resolve, reject) => {
console.log("promise resolve");
 reject(2);
})
.then(
	(res) => {
		console.log("fulfilled: ", res);
		return"zenos";
	},
	(err) => {
		console.log("rejected: ", err);
		return new Promise((resolve, reject) => {
			reject(err);
		});
	}
)
.then(
	(res) => {
		console.log("fulfilled2: ", res);
		return"blue";
	},
	(err) => {
		console.log("rejected: ", err);
	}
);
</pre>

>5、promise除了then外，还有catch函数
<pre class="prettyprint lang-javascript">
then中的reject对应的回调函数可以不写，此时对于promise的reject会一直向后传递，直到遇到具有reject回调函数的then回调，或者catch回调
promise除了then外，还有catch函数，也可以用来接收reject
const promise = newPromise((resolve, reject) => {
console.log("promise resolve");
 reject(2);
})
.then((res) => {
	console.log("fulfilled: ", res);
	return"zenos";
})
.then((res) => {
	console.log("fulfilled2: ", res);
	return"blue";
})
.catch((err) => {
	//由于前面2个then中没有reject对应的回调函数，因此此处会被执行
	console.log("catch: ", err);
});
</pre>