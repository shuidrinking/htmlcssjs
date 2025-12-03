#### 变量对象的属性技能

>1、使用for...in 搭配 obj.hasOwnProperty
<pre class="prettyprint lang-javascript">
//为什么要用hasOwnProperty做判断，因为除了一般属性外，还会遍历到原型链上的属性
for (let p in obj){
	if(obj.hasOwnProperty(p)){
		console.info(obj.p);
	}
}
</pre>

>2、为什么不用for...of
<pre class="prettyprint lang-s">
for in 会遍历原型链上的属性，for of 不会。
for in 适用于所有类型，for of 适用于可迭代对象（如数组、字符串、Map、Set 等）。
</pre>

>3、非要用for...of怎么做
<pre class="prettyprint lang-javascript">
/*
把obj的keys数组拿出来用for...of遍历
*/
for (const key of Object.keys(obj)) {
	console.log(key, obj[key]);
}
</pre>
