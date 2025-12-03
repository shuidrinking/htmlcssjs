#### 对类或函数添加被调用的限制条件

>1、使用样例
<pre class="prettyprint lang-javascript">
'use strict'
/*
 * 方法一：在函数内部设置限制条件
 */
function Example(name){
	//如果不使用new的实例调用，则报错
	if (!new.target){
		throw new TypeError(`Class constructor Example cannot be invoked without 'new'`);
	}
	console.log(new.target);
	this.name = name;
};

Example.prototype.func = function (){
	console.log(this.name);
}

/**
 * 方法二：利用Object.defineProperty对指定的函数设置限制条件
 */
Object.defineProperty(Example.prototype, 'func', {
	value: function(){
		//不能使用new 来调用func
		if(new.target){
			throw new TypeError(`Example.func cannot be invoked`);
		}
	},
	//不能被枚举
	enumerable: false,
});
</pre>