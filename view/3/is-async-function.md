#### 判断一个函数是否为异步函数

<pre class="prettyprint lang-javascript">
function isAsyncFunction(func){
	//AsyncFunction并没有直接暴露给js
	//不能用 func instanceof AsyncFunction 
	//将函数的原型tostring后会看到一个tag，在console里调试会看到，因此可以利于这个来判定
	return Object.prototype.toString.call(func)==='[object AsyncFunction]';
}
</pre>