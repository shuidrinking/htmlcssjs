#### Unicode编码和中文字符转换

>1、Unicode转中文
<pre class="prettyprint lang-javascript">
function unicodeToChinese(str) {
  return str.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
  });
}

var unicodeStr = "\\u4e2d\\u56fd";
var chineseStr = unicodeToChinese(unicodeStr);
console.log(chineseStr); // 输出: 中国
</pre>

>2、中文转Unicode
<pre class="prettyprint lang-javascript">
function chineseToUnicode(data){
	if(!data){return;}
	let str =''; 
	let reg = new RegExp(/^[\u4E00-\u9FA5]$/);
	for(let i=0;i&lt;data.length;i++){
		if(reg.test(data.charAt(i))){
			str+="\\u"+data.charCodeAt(i).toString(16);
		}
		else{
			str+=data.charAt(i);
		}
	}
	return str;
}
</pre>