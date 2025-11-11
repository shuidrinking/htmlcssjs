#### 不入侵源代码实现向对象中添加新成员

```
JavaScript提供了Object.keys()、Object.values()和Object.entries()等方法用于遍历对象的属性。
可以通过Object.prototype为任意对象做扩展
```

<pre class="prettyprint lang-javascript">
Object.prototype[函数名]= function(...args){
	return function(...args){};
}

/**
 * 不入侵代码的情况下，扩展，使一个普通对象具有可迭代性
 */
Object.prototype[Symbol.iterator]= function(){
	const arr = Object.values(this);
	return arr[Symbol.iterator]();

	//return Object.values(this)[Symbol.iterator]();
}

//如何在不改变上面代码的情况下

//修改被封装在模块内部的闭包obj对象
//只要它是个Object，就能被扩展，为它增加一个getMe的函数，返回它自身
Object.defineProperty(Object.prototype, 'getMe'，
	get(){
		return this;
	}
);
</pre>