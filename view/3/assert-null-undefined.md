#### 只判定null或者undefined的运算符

> 使用??不使用||
<pre class="prettyprint lang-javascript">
??被称为“空值合并运算符”，它的运算规则是：当第一个值为null或undefined时，才会返回第二个值

相比之下，||只是一个“逻辑或”运算符，运算规则是从左到右依次先转换为boolean，如果为true时将其值返回，false时不返回，例如'a'||'b'的结果是a。
因此，它会将null、undefined、NaN、空字符串、0、false转换为boolean时的结果都为false，会有语义理解错误

//在判定值是否有效时需要用??，不能用||
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 || 42;
console.log(baz);
// Expected output: 42

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

</pre>
> 使用??=替代三目运算符
<pre class="prettyprint lang-javascript">
let _some=inValue?inValue:"nothing";
//等效语句：
_some=inValue??"nothing";
</pre>