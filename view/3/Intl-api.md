#### Intl-原生javascript具备的格式化工具

>1.Intl简介
Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。Collator，NumberFormat 和 DateTimeFormat 对象的构造函数是 Intl 对象的属性。
<a href="https://github.com/cure53/DOMPurify" target="_blank">DOMPurify代码库</a><br>

>2.api
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a>&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat" target="_blank">DateTimeFormat</a>&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat" target="_blank">NumberFormat</a>
<pre class="prettyprint lang-javascript">
//Intl.DateTimeFormat
//对于NumberFormat、RelativeTimeFormat等都有同样参数的构造函数
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)
</pre>

>3.样例
<pre class="prettyprint lang-javascript">
//货币格式化
const number = 123456.789;
console.log(
	new Intl.NumberFormat(
		"zh-CN", 
		{
			style: "currency",
			currency: "CNY",
			minimumFractionDigits: 4,//小数点后保留位数
			currencyDisplay: "name",//结尾显示货币名称
		}
	)
	.format(
		number
	),
);

//日期格式化
console.log(
	new Intl.DateTimeFormat("zh-CN", {
		dateStyle: "full",
		timeStyle: "long",
		timeZone: "Asia/Shanghai",
	}).format(new Date()),
);

console.log(
	new Intl.DateTimeFormat("zh-CN", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
		timeZone: "Asia/Shanghai",
	}).format(new Date()),
);

// 相对于当前的某个时间点表达
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("zh-CN", {
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});
rtf.format(-1, "day"); // "1天前"
rtf.format(1, "day"); // "1天后"
rtf.format(10, "hours"); //10小时后
</pre>
