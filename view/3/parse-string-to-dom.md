#### 利用DOMParser类的parseFromString函数将字符串解析为dom元素或者节点

>1.语法
<pre class="prettyprint lang-javascript">
//函数原型
parseFromString(input, mimeType)
//nput可以为html、xml或svg的内容
//mimeType的可取值：text/html、text/xml、application/xml、application/xhtml+xml、image/svg+xml
//input为html字符串时，函数将返回一个完整的html文档，目标元素位于body中，使用时你需要从body中提取出来
//样例：
function laodFromHtmlString(_parentElement, htmlString=""){
	let htmlStringParser=new DOMParser();
	let _newDocument = htmlStringParser.parseFromString(htmlString, "text/html");
	let _heads=_newDocument.head.children;
	if(_heads && _heads.length>0){
		let s = _heads.length ;
		for(let i=(s-1); i>=0; i--){
			if(_heads[i].nodeName=="SCRIPT"){
				//对于script必须这样才能load，否则不会被加载
				let _script=document.createElement("script");
				_script.type="text/javascript";
				_script.text=_heads[i].text;
				containner.appendChild(_script);
			}
			else{
				_parentElement.appendChild(_heads[i]);
			}
		}
	}
	_parentElement.appendChild(_newDocument.body.children[0]);
}
//特别注意
如果html字符串中混杂了style、script，则parseFromString返回的结果中会自动将它们置于head中，你需要从生成的_newDocument的head里提取！
</pre>
>2.效果等同于设置innerHTML或调用document.write
<pre class="prettyprint lang-javascript">

</pre>
>3.与createElement相比
<pre class="prettyprint lang-javascript">
createElement只能创建一个指定的元素
</pre>