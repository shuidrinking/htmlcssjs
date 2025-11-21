#### 加载html、md、css、js等文件的内容到本页，并渲染到指定位置
```
不使用iframe，直接将指定的html文件以及css、js文件等前端静态文件，加载并渲染到当前页面的指定div或其他容器元素中
html文件中亦可包含style、javascript
```

#### 一、加载文件的套路

>1.1、加载html、md、json等文件
```
使用XmlHttpRequest或fetch，发送 GET请求，提取答复内容即可
```

>1.2、将md文件内容“翻译”为html内容
```
将markdown内容转化为html内容的开源工具组件非常多，笔者使用 marked ( https://github.com/markedjs/marked )
```

>1.3、加载css、js文件
```
在指定的div或其他容器元素中新建<script>并设置src，或者新建<link>并设置href属性
```

#### 二、渲染的套路

>2.1、使用innerHTML将内容设置到指定容器

>2.2、对含有script标签的html或md文件，需要激活其中的脚本
```
对于link或者style标签无需特殊处理。但是对于script标签需要激活，否则会被浏览器忽略。
在加载后需要调用下面的代码实现。
```

<pre class="prettyprint lang-javascript">
function activeJavascript(_containner, htmlString){
	//将html内容渲染到_containner中
	_containner.innerHTML = htmlString;
	
	/*需要重置脚本，通过innerHTML设置的脚本默认会被浏览器忽略*/
	//提取_containner容器中的script标签
	let _scriptList = _containner.querySelectorAll("script");
	if(_scriptList && _scriptList.length>0){
		//提取脚本
		let scriptDefList=[];
		_scriptList.forEach(_script =>{
			scriptDefList.push({"text":_script.text, "type":_script.type, "onload":_script.onload, "onerror":_script.onerror, "src":_script.src});
			_script.parentNode.removeChild(_script);
			//这个script可能在子孙元素中，因此不能用这句：_containner.removeChild(_script);
		});
		//按新的script进行激活
		scriptDefList.forEach(scriptDef=>{
			let _script=document.createElement("script");
			_script.type="text/javascript";
			if(scriptDef.text){_script.text=scriptDef.text;}
			if(scriptDef.type){_script.type=scriptDef.type;}
			if(scriptDef.onload){_script.onload=scriptDef.onload;}
			if(scriptDef.src){_script.src=scriptDef.src;}
			_containner.appendChild(_script);
		});
	}
}
</pre>