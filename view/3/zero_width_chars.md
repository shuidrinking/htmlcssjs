#### 零宽字符处理

>1、零宽字符有哪些
<pre class="prettyprint lang-javascript">
// 常见的零宽字符Unicode范围
const ZERO_WIDTH_CHARS = [
	'\u200B', // 零宽度空格
	'\u200C', // 零宽度非连接符
	'\u200D', // 零宽度连接符
	'\uFEFF', // 零宽度非断空格
	'\u2060', // 单词连接符
	'\u2061', // 函数应用
	'\u2062', // 不可见乘号
	'\u2063', // 不可见分隔符
	'\u2064', // 不可见加号
	'\u180E', // 蒙古语元音分隔符
	'\u034F', // 组合用 Grapheme 连接符
	'\u200E', // 从左向右标记
	'\u200F', // 从右向左标记
	'\u202A', // 从左向右嵌入
	'\u202B', // 从右向左嵌入
	'\u202C', // 弹出方向格式
	'\u202D', // 从左向右覆盖
	'\u202E', // 从右向左覆盖
	'\u061C', // 阿拉伯字母标记
	'\u17B5', // Khmer元音继承符
	'\u17B6'  // Khmer元音依赖符
];
</pre>

>2、清理内容中的零宽字符
<pre class="prettyprint lang-javascript">
const ZERO_WIDTH_CHARS = [
	'\u200B', // 零宽度空格
	'\u200C', // 零宽度非连接符
	'\u200D', // 零宽度连接符
	'\uFEFF', // 零宽度非断空格
	'\u2060', // 单词连接符
	'\u2061', // 函数应用
	'\u2062', // 不可见乘号
	'\u2063', // 不可见分隔符
	'\u2064', // 不可见加号
	'\u180E', // 蒙古语元音分隔符
	'\u034F', // 组合用 Grapheme 连接符
	'\u200E', // 从左向右标记
	'\u200F', // 从右向左标记
	'\u202A', // 从左向右嵌入
	'\u202B', // 从右向左嵌入
	'\u202C', // 弹出方向格式
	'\u202D', // 从左向右覆盖
	'\u202E', // 从右向左覆盖
	'\u061C', // 阿拉伯字母标记
	'\u17B5', // Khmer元音继承符
	'\u17B6'  // Khmer元音依赖符
];

function doClean(text=""){
	// 检测并移除零宽字符
	let cleanedText = text; //清除后的结果
	let zeroWidthChars = []; //被清除的零宽字符清单
	
	ZERO_WIDTH_CHARS.forEach(char => {
		if (text.includes(char)) {
			foundChars.push({
				char: char,
				code: 'U+' + char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'),
				count: (text.match(new RegExp(char, 'g')) || []).length
			});
			cleanedText = cleanedText.replace(new RegExp(char, 'g'), '');
		}
	});
	return {"cleanedText": cleanedText, "zeroWidthChars": zeroWidthChars};
}
</pre>