#### Intl-原生javascript具备的格式化工具

>1、Intl简介
```
Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。Collator、NumberFormat、 DateTimeFormat 等对象的构造函数是 Intl 对象的属性。
```
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a>&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat" target="_blank">DateTimeFormat</a>&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat" target="_blank">NumberFormat</a>

>2、各格式化工具的狗仔函数范式，以及option可取值
<pre class="prettyprint lang-javascript">
//Intl.DateTimeFormat、Intl.NumberFormat、Intl.RelativeTimeFormat等都有同样参数的构造函数
//例如：
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

// <a href="https://tc39.es/ecma402/" target="_blank">点此查阅ECMAScript定义</a>
</pre>

>3、样例：Intl.NumberFormat
<pre class="prettyprint lang-javascript">
const number = 123456.789;
let formatter = new Intl.NumberFormat(
		"zh-CN", 
		{
			style: "currency",
			currency: "CNY",
			minimumFractionDigits: 4,//小数点后保留位数
			currencyDisplay: "name",//结尾显示货币名称
		}
	);
console.log(formatter.format(number));
</pre>

>4、样例：Intl.DateTimeFormat.format函数
<pre class="prettyprint lang-javascript">
// <a href="https://tc39.es/ecma402/#sec-datetimeformat-abstracts" target="_blank">点此查阅DateTimeFormat的各个option的可取值</a>
let dtFormatter = new Intl.DateTimeFormat("zh-CN", {
		dateStyle: "medium", // full long medium short
		timeStyle: "medium",
		timeZone: "Asia/Shanghai",
	});
console.log(dtFormatter.format(new Date()));
// 输出  xxxx年xx月xx日 时:分:秒

let dtFormatter = new Intl.DateTimeFormat("zh-CN", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit", //numeric 2-digit
		//weekday: "long",//long shot narrow
		hour: "2-digit",
		hour12: false,
		minute: "2-digit",
		second: "2-digit",
		//fractionalSecondDigits: 3,//如果添加此项，则会附带毫秒值
		timeZone: "Asia/Shanghai",
	});
console.log(dtFormatter.format(new Date()));
</pre>

>5、样例：Intl.DateTimeFormat.formatToParts函数
<pre class="prettyprint lang-javascript">
let dtFormatter = new Intl.DateTimeFormat("zh-CN", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit", //numeric 2-digit
		weekday: "long",//long shot narrow
		hour: "2-digit",
		hour12: false,
		minute: "2-digit",
		second: "2-digit",
		fractionalSecondDigits: 3,//如果添加此项，则会附带毫秒值
		timeZone: "Asia/Shanghai",
	});
let partsArray = dtFormatter.formatToParts(new Date());
//它返回的是一个数组：将日期时间的各个组成部分分割为一个数组返回
for (const part of partsArray) {
	console.log(part);//part的范式：{"type":"xxx", "value":"vvv"}
}
</pre>

>6、样例：Intl.RelativeTimeFormat
<pre class="prettyprint lang-javascript">
// 相对于当前的某个时间点的时间的语言表达
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
