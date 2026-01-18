<style type="text/css">
/* 弹出窗口 */
.popup-box{
	display: none;
	position: fixed;
	top: -1rem;
	right: -1rem;
	padding: 0.1rem;
	background-color: #ffffff;
	border-radius: 0.04rem;
	box-shadow: 0 0 0.1rem #b9b9b9;
	transition: all 0.2s linear 0s;
	width: fit-content;
		
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0.05rem;
}
/* 弹出框中的子菜单 */
.popup-item{
	height:0.4rem;
	cursor: pointer;
	border-radius: 0.04rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.1rem;
	padding:0 0.1rem;
}
.popup-item:hover{
	background-color:#f0f0f0;
}
.popup-item label{
	font-family:shuidrinking;
	margin-left:0.1rem
}

/*触发弹出窗口的组件，此页例为“菜单项”*/
.menu-item{
	height: 0.3rem;
	border-radius:0.04rem;
	cursor:pointer;
	position:relative;
	transition: all 0.2s linear 0s;
	border:1px solid #dddddd;
	cursor:pointer;
	padding:0.1rem;
	
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.1rem;
}
.menu-item:hover{
	background-color: #f1f1f1 !important;
}

/*鼠标划过“能触发弹出窗口”的组件时，将其尾部的按钮显示出来*/
.menu-item:hover .setting-button, setting-button:hover{
	visibility: visible;
	transition: all 0.1s linear 0s;
}
.setting-button{
	font-family:shuidrinking;
	margin-left:0.1rem;
	visibility: hidden;
	cursor: pointer;
	height:100%;
	display:flex;
	align-items: center;
}
.setting-button:before {
	content: "\e918";
}
</style>

<script type="text/javascript">
	function popUp(_source) {
		//先隐藏，坐标设置后再显示
		$('popup-box').style.display = 'none';
		let computedStyle=_source.getBoundingClientRect();
		$('popup-box').style.left = window.event.clientX + "px";
		$('popup-box').style.top = window.event.clientY + "px"; 
		$('popup-box').style.display = 'flex';
	}
	//判定鼠标是否挪出了弹出框，如果挪出后隐藏
	function isMoveOut(_source) {
		let computedStyle=_source.getBoundingClientRect();
		if(event.clientX < computedStyle.x || event.clientX > computedStyle.right){
			_source.style.display= "none";
		}
		if(event.clientY < computedStyle.y || event.clientY > computedStyle.bottom){
			_source.style.display= "none";
		}
	}
</script>


<div class="demobox" style="flex-direction: column;align-items: center;">
	<div class="menu-item">
		<label>条目1</label>
		<label class="setting-button" onclick="popUp(this)"></label>
	</div>
	<div class="menu-item">
		<label>条目2</label>
		<label class="setting-button" onclick="popUp(this)"></label>
	</div>
</div>
<!-- 弹出菜单div，绝对定位 -->
<div id="popup-box" class="popup-box" onmouseout="isMoveOut(this)">
	<div class="popup-item">操作一<label>&#xe91f;</label></div>
	<div class="popup-item">操作二<label>&#xe918;</label></div>
</div>


<div class="summary">上面样例的源代码</div>
<details>
	<summary>1、html</summary>
	<pre class="prettyprint lang-html">
&lt;div class="demobox" style="flex-direction: column;align-items: center;"&gt;
	&lt;div class="menu-item"&gt;
		&lt;label&gt;条目1&lt;/label&gt;
		&lt;label class="setting-button" onclick="popUp(this)"&gt;&lt;/label&gt;
	&lt;/div&gt;
	&lt;div class="menu-item"&gt;
		&lt;label&gt;条目2&lt;/label&gt;
		&lt;label class="setting-button" onclick="popUp(this)"&gt;&lt;/label&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;!-- 弹出菜单div，绝对定位 --&gt;
&lt;div id="popup-box" class="popup-box" onmouseout="isMoveOut(this)"&gt;
	&lt;div class="popup-item"&gt;操作一&lt;label&gt;&#xe91f;&lt;/label&gt;&lt;/div&gt;
	&lt;div class="popup-item">操作二&lt;label>&#xe918;&lt;/label>&lt;/div>
&lt;/div>
	</pre>
</details>

<details>
	<summary>2、css</summary>
	<pre class="prettyprint lang-css">
/* 弹出窗口 */
.popup-box{
	display: none;
	position: fixed;
	top: -1rem;
	right: -1rem;
	padding: 0.1rem;
	background-color: #ffffff;
	border-radius: 0.04rem;
	box-shadow: 0 0 0.1rem #b9b9b9;
	transition: all 0.2s linear 0s;
	width: fit-content;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0.05rem;
}
/* 弹出框中的子菜单 */
.popup-item{
	height:0.4rem;
	cursor: pointer;
	border-radius: 0.04rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.1rem;
	padding:0 0.1rem;
}
.popup-item:hover{
	background-color:#f0f0f0;
}
.popup-item label{
	font-family:shuidrinking;
	margin-left:0.1rem
}
/*触发弹出窗口的组件，此页例为“菜单项”*/
.menu-item{
	height: 0.3rem;
	border-radius:0.04rem;
	cursor:pointer;
	position:relative;
	transition: all 0.2s linear 0s;
	border:1px solid #dddddd;
	cursor:pointer;
	padding:0.1rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.1rem;
}
.menu-item:hover{
	background-color: #f1f1f1 !important;
}
/*鼠标划过“能触发弹出窗口”的组件时，将其尾部的按钮显示出来*/
.menu-item:hover .setting-button, setting-button:hover{
	visibility: visible;
	transition: all 0.1s linear 0s;
}
.setting-button{
	font-family:shuidrinking;
	margin-left:0.1rem;
	visibility: hidden;
	cursor: pointer;
	height:100%;
	display:flex;
	align-items: center;
}
.setting-button:before {
	content: "\e918";
}
	</pre>
</details>

<details>
	<summary>3、javascript</summary>
	<pre class="prettyprint lang-javascript">
function popUp(_source) {
	//先隐藏，坐标设置后再显示
	$('popup-box').style.display = 'none';
	let computedStyle=_source.getBoundingClientRect();
	$('popup-box').style.left = window.event.clientX + "px";
	$('popup-box').style.top = window.event.clientY + "px"; 
	$('popup-box').style.display = 'flex';
}
//判定鼠标是否挪出了弹出框，如果挪出后隐藏
function isMoveOut(_source) {
	let computedStyle=_source.getBoundingClientRect();
	if(event.clientX < computedStyle.x || event.clientX > computedStyle.right){
		_source.style.display= "none";
	}
	if(event.clientY < computedStyle.y || event.clientY > computedStyle.bottom){
		_source.style.display= "none";
	}
}
	</pre>
</details>

<div class="summary">实现套路</div>
<pre class="prettyprint lang-javascript">
1、为需要的节点添加“触发按钮”
2、“触发按钮”默认隐藏，鼠标划过时显示“设置图标”
3、为“触发按钮”添加onclick函数
4、“设置图标”的onclick函数中，实现对弹出窗口内容的设置，并将窗口弹出
5、对“弹出窗口”进行onhover事件监听，实现划出时消失
6、在“弹出窗口”右上角添加“关闭图标”
</pre>
<div class="summary">编写技巧</div>
<pre class="prettyprint lang-javascript">
一、弹出框的触发机制：
（1）弹出框本身是一个绝对定位的组件，使用postion:fixed，不过需要注意事发元素的顶部是否已有卷去的高度。如果用absolute，那么必须保证其parent的display为relative；
（2）弹出框显示时，在控制其弹出的js函数里设置其left和top时，定位是基于触发弹出框的元素的“computed后的x和y”，可以使用e.clientX和e.clientY，或者e.target.getBoundingClientRect()获得“触发按钮”的坐标；
二、为弹出框设置onmouseout监听函数，监听弹出框的鼠标划动事件，函数中判定是否划出的算法：
（1）获取弹出框的最小x，最大x，最小y，最大y
（2）判断鼠标的坐标，如果 “最小x&lt;=鼠标x&lt;=最大x 且 最小y&lt;=鼠标y&lt;=最大y”，则在框内，否则已经划出框外
函数实现本身非常简单，如下：
function isMoveOut(_source) {
	let computedStyle=_source.getBoundingClientRect();
	if(event.clientX < computedStyle.x || event.clientX > computedStyle.right){
		_source.style.display= "none";
	}
	if(event.clientY < computedStyle.y || event.clientY > computedStyle.bottom){
		_source.style.display= "none";
	}
}
</pre>

