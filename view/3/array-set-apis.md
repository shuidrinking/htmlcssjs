#### Array和Set的一些高级API

>1、调用getComputedStyle函数
<pre class="prettyprint lang-javascript">
let array1=[一些数值];
let array2=[一些数值];
//1、对象型数组排序
someObj={order: n, 其他key:value};
someArray=[];
someArray.push(someObj);
someArray.sort((a, b) => a.order - b.order);

//2、去重
let someArray = Array.from(new Set(array1));

//3、交集
let someArry = Array.from(new Set(array1.filter( (item) => array2.includes(item) )));

//4、并集
//注意，下面的...是不定长参数符号，不是省略
let someArry = Array.from(new Set([...array1, ...array2]));

//5、差集
let someArry = Array.from(new set(array1.concat(array2).filter((item)=> !array1.includes(item)!array2.includes(item)));
</pre>