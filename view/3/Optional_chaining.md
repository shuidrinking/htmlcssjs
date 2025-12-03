#### 可选链运算符（Optional_chaining）?.

>1、运算规则
<pre class="prettyprint lang-javascript">
如果使用此运算符访问的对象或调用的函数是undefined 或 null，则表达式会短路并计算为 undefined，而不是抛出错误；
否则，会继续做链式调用。

//语法
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)

//object?.target 语法糖的等价翻译：
if(typeof object==="undefined" || object==null){
	return "undefined";
}
else{
	return object.target;
}
</pre>

>2、使用样例
<pre class="prettyprint lang-javascript">
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined
console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

</pre>