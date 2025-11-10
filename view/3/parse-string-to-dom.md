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
	
	/*本函数负责将解析后的一组dom元素迁移到目标父元素内*/
	function appendElements(_nodeArray, _targetParent){
		if(_nodeArray && _nodeArray.length>0){
			let s = _nodeArray.length ;
			for(let i=(s-1); i>=0; i--){
				if(_nodeArray[i].nodeName=="SCRIPT"){
					//对于javascript，不能直接append，否则不会被浏览器解析
					let _script=document.createElement("script");
					_script.type="text/javascript";
					_script.text=_nodeArray[i].text;
					_targetParent.appendChild(_script);
				}
				else{
					_targetParent.appendChild(_nodeArray[i]);
				}
			}
		}
	};
	
	let htmlStringParser=new DOMParser();
	let _newDocument = htmlStringParser.parseFromString(data, "text/html");
	let _headsChilds=_newDocument.head.children;
	let _bodyChilds = _newDocument.body.children;
	appendElements(_headsChilds, _parentElement);
	appendElements(_bodyChilds, _parentElement);
}
//特别注意
如果html字符串的最前位置是style、script标签，则parseFromString返回的结果中会自动将它们置于head中，如果混在中间，则会被置于body中。
</pre>
>2.效果等同于设置innerHTML或调用document.write
<pre class="prettyprint lang-javascript">

</pre>
>3.与createElement相比
<pre class="prettyprint lang-javascript">
createElement只能创建一个指定的元素
</pre>