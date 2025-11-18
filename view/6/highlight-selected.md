#### 对被选中的部分进行底部着色

```
着色是设置了background-color，除此之外，还可以设置border-bottom，这就是所谓的“划线”。
```

<div class="demobox">
	<div id="contentDiv" style="line-height:20px;">
		<label style="font-weight:bold;font-size:18px;">拖动选择试试看：</label><br>
		Windows 1.0 时代引入的某些应用程序，虽然历经数十年的更新，至今仍保留在 Windows 11 中。它们的核心功能基本未变，但界面和功能都经历了现代化改造：<br>
		（1）计算器（Calculator） – Windows 1.0 的计算器原本只是一个简单的数学运算工具，如今已经发展为支持科学计算、图形计算、程序员模式以及单位换算的多功能计算器。<br>
		（2）画图（Paint） – 最早称为“Paintbrush”（画刷），最初只能编辑黑白像素图，如今已经成为支持全彩编辑，甚至具备 AI 绘图功能的现代图像编辑工具。<br>
		（3）记事本（Notepad） – 从 Windows 1.0 以来，记事本一直是 Windows 的标志性应用，如今它已经集成了 AI 功能，可提供更智能的文本编辑体验。<br>
		（4）时钟（Clock） – 最初只是一个基本的时间显示工具，如今已经演变为支持世界时钟、计时器、闹钟，甚至包含专注模式的全能应用。<br>
		（5）控制面板（Control Panel） – 尽管 Windows 现代设置应用（Settings）正在逐步取代控制面板，但它依然保留在 Windows 11 中，用于管理高级系统设置。
	</div>
</div>

>css代码
<pre class="prettyprint lang-javascript">
mark{
	background-color:#35e0ef; /*对被选中的内容进行底色高亮标记*/
	border-bottom:1px dashed #ff0000; /*对被选中的内容进行划线*/
}
</pre>
	
>javascript代码
<pre class="prettyprint lang-javascript">
	//Range.surroundContents()
	function doMark(){
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);
		//创建mark标签，用于包裹被选中的内容
		const highlight = document.createElement('mark');
		range.surroundContents(highlight);//自动处理边界拆分
	}
	function initHighlightTool(){
		let _ele=document.querySelector("#contentDiv");
		//添加被拖动时的监听函数
		_ele.addEventListener("mouseup", doMark);
	}
</pre>

<script type="text/javascript">
	//Range.surroundContents()
	function doMark(){
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);
		const highlight = document.createElement('mark');
		range.surroundContents(highlight);//自动处理边界拆分
	}
	function inithighlighttool(){
		let _ele=document.querySelector("#contentDiv");
		_ele.addEventListener("mouseup", doMark);
	}
	setTimeout(inithighlighttool, 200);
</script>
<style>
	mark{
		background-color:#35e0ef; /*对被选中的内容进行底色高亮标记*/
		border-bottom:1px dashed #ff0000; /*对被选中的内容进行划线*/
	}
</style>