#### 套路一：利用DOMParser类的parseFromString函数将字符串解析为dom元素或者节点

<pre class="prettyprint lang-javascript">
//函数原型
parseFromString(input, mimeType)
//input可以为html、xml或svg的内容
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
					let _script=document.createElement("script");
					_script.type="text/javascript";
					if(_nodeArray[i].text){_script.text=_nodeArray[i].text;}
					if(_nodeArray[i].src){_script.src=_nodeArray[i].src;}
					_targetParent.appendChild(_script);
				}
				else if(_nodeArray[i].nodeName=="LINK"){
					let _link=document.createElement("link");
					_link.type="text/css";
					_link.href=_nodeArray[i].href;
					_link.rel=_nodeArray[i].rel;
					_targetParent.appendChild(_link);
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

#### 套路二：利用innerHTML将html字符串设置到目标元素内，并激活其中的javascript

<pre class="prettyprint lang-javascript">
function laodFromHtmlString(_parentElement, htmlString=""){
	_parentElement.innerHTML = htmlString;
	//需要重置脚本，通过innerHTML设置的脚本不会被激活
	let _scriptList = _containner.querySelectorAll("script");
	if(_scriptList && _scriptList.length>0){
		//提取脚本
		let scriptDefList=[];
		_scriptList.forEach(_script =>{
			scriptDefList.push({"text":_script.text, "type":_script.type, "onload":_script.onload, "onerror":_script.onerror, "src":_script.src});
			_script.parentNode.removeChild(_script);
		});
		//激活
		scriptDefList.forEach(scriptDef=>{
			let _script=document.createElement("script");
			_script.type="text/javascript";
			if(scriptDef.text){_script.text=scriptDef.text;}
			if(scriptDef.src){_script.src=scriptDef.src;}
			if(scriptDef.type){_script.type=scriptDef.type;}
			if(scriptDef.onload){_script.onload=scriptDef.onload;}
			_parentElement.appendChild(_script);
		});
	}
}
</pre>