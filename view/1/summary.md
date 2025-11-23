#### 概要标题标签，点击后展开概要信息

>1、语法范式
<pre class="prettyprint lang-html">
&lt;details&gt;
	&lt;summary&gt;概要标题&lt;/summary&gt;
	&lt;div&gt;详细解释说明&lt;/div&gt;
&lt;/details&gt;
</pre>

>2、关键css定义
<div class="demobox">
	<details class="common-details">
		<summary>查看关键css定义</summary>
		<pre class="prettyprint lang-css">
/* 隐藏summary前的默认三角 */
::marker {
	font-size:0;/*这是最有效的做法*/
	display: none;/*无效*/
}
/*
 * 默认是not([open])的状态，class名称前无需加前缀：
 * details:not([open]) summary::after 等价于 summary::after 
 * details[open] summary::after等价于 [open] summary::after
 */
summary {
	/* user-select: none; */
	outline: 0; /*消除轮廓*/
	position: relative;
	display: flex;/*垂直居中*/
	justify-content: flex-start;
	align-items: center;
	padding: 0.1rem 0;
	cursor:pointer;
	font-weight:bold;
}
summary::after {
	content:'';
	position:absolute;
	z-index:0;
	right:0.2rem;
	top:calc(50% - 0.03rem);
	transition:0.2s;
	transform:rotate(180deg);/*裁剪一个箭头形状*/
	clip-path: polygon(100% 80%, 100% 100%, 50% 20%, 0 100%, 0 80%, 50% 0);
	width: 0.12rem;
	height: 0.06rem;
	background-color: #757575;
}
[open] summary::after {
	transform: rotate(0deg);/*打开明细时，箭头反向*/
}
/*详细解释说明样式定义*/
details[open]::details-content {
}
		</pre>
	</details>
</div>

>3、应用场景1：点击标题展示详情
<div class="demobox">
	<details class="common-details">
		<summary>Epcot 乐园</summary>
		<div>我的个性化css定义如下：</div>
		<pre class="prettyprint lang-css">
/*details的class="common-details"*/
.common-details{
	width:8rem;
}
.common-details summary{
	font-weight:bold;
	color:#0767a8;
}
.common-details[open]::details-content {
	color: #002fa7;
}
		</pre>
	</details>
</div>

>4、应用场景2：下拉框或悬浮下拉菜单
<div class="demobox">
	<details>
		<summary class="top-menu">一级菜单</summary> 
		<div class="sub-menu-box">
			<a >二级菜单1</a>
			<a >二级菜单2</a>
			<a >二级菜单3</a>
			<a >二级菜单4</a>
		</div>
	</details>
	<details>
		<summary class="top-menu">一级菜单</summary> 
		<div class="sub-menu-box">
			<a >二级菜单1</a>
			<a >二级菜单2</a>
			<a >二级菜单3</a>
			<a >二级菜单4</a>
		</div>
	</details>
</div>
<div class="demobox">
	<details class="common-details">
		<summary>本例代码</summary>
		<div>（1）html</div>
		<pre class="prettyprint lang-html">
&lt;details>
	&lt;summary class="top-menu"&gt;一级菜单&lt;/summary&gt; 
	&lt;div class="sub-menu-box"&gt;
		&lt;a &gt;二级菜单...&lt;/a&gt;
	&lt;/div&gt;
	</pre>
	<div>（2）css</div>
	<pre class="prettyprint lang-css">
.top-menu{
	user-select: none;
	border-radius:0.04rem;
	width:1rem;
	padding:0.1rem;
}
.top-menu:hover{
	background-color:#e3e3e3;
}
.sub-menu-box {
	user-select: none;
	position: absolute;
	background-color: #ffffff;
	min-width: 1rem;
	padding: 5px 0;
	z-index: 1;
}
.sub-menu-box a {
	display: block;
	padding: 5px 10px;
	color: inherit;
	cursor:pointer;
}
.sub-menu-box a:hover {
	background-color: #f0f0f0;
}
		</pre>
	</details>
</div>

>5、应用场景3：展开/收起
<div class="demobox">
	<details class="more-toggle">
		<summary>
			<p>大秦帝国【2009】</p>
			<div>
				战国后期，中华大地烽烟四起，秦齐楚燕赵韩魏七国之间你争我夺。
			</div>
			<div class="more-content">
				为什么秦能凭借一次变法迅速崛起？在同样强大的七个诸侯国中，秦国为什么能够力战群雄，成为最终的赢家？创造历史奇迹的秦军却又在秦始皇死后不到三年不可思议的迅速败亡，百万秦军究竟怎么了？本系列带您追寻历史的迷踪，揭秘真实历史中鲜为人知的秘密。
			</div>
			<a>更多</a>
		</summary> 
	</details>
</div>

<div class="demobox">
	<details class="common-details">
		<summary>本例代码</summary>
		<div>（1）html</div>
		<pre class="prettyprint lang-html">
&lt;details class="more-toggle"&gt;
	&lt;summary&gt;
		&lt;p&gt;据台媒报道，大...青睐。&lt;/p&gt;
		&lt;div class="more-content"&gt;
		&lt;p&gt;其他几首歌曲...&lt;/p&gt;
		&lt;/div&gt;
		&lt;a&gt;更多&lt;/a&gt;
	&lt;/summary&gt; 
&lt;/details&gt;
		</pre>
		<div>（2）css</div>
		<pre class="prettyprint lang-html">
.more-toggle summary{
	display:list-item;
}
.more-toggle summary::after{
	display:none;
}
.more-content {
	display: none;
}
[open] .more-content {
	display: block;
}
.more-toggle[open] summary a {
	font-size:0;
}
.more-toggle[open] summary a::before {
	content: '收起';
	font-size: 14px;
}
		</pre>
	</details>
</div>

<style type="text/css">
.more-toggle{
	width:8rem;	
}
.more-toggle summary{
	display:list-item;
}
.more-toggle summary::after{
	display:none;
}
.more-content {
	display: none;
}
[open] .more-content {
	display: block;
}
.more-toggle[open] summary a {
	font-size:0;
}
.more-toggle[open] summary a::before {
	content: '收起';
	font-size: 14px;
}
</style>

<style type="text/css">
/* 隐藏默认三角，注意details::marker , details::-webkit-details-marker设置无效 */
::marker{
	display: none;
	font-size:0; /* 确保对所有浏览器都有效 */
	width:0;
	height:0;
}
summary {
	/* user-select: none; */
	outline: 0; /*消除轮廓*/
	position: relative;
	display: flex;/*垂直居中*/
	justify-content: flex-start;
	align-items: center;
	padding: 0.1rem 0;
	cursor:pointer;
}
summary::after {
	content:'';
	position:absolute;
	z-index:0;
	right:0.2rem;
	top:calc(50% - 0.03rem);
	transition:0.2s;
	transform:rotate(180deg);/*裁剪一个箭头形状*/
	clip-path: polygon(100% 80%, 100% 100%, 50% 20%, 0 100%, 0 80%, 50% 0);
	width: 0.12rem;
	height: 0.06rem;
	background-color: #757575;
}
[open] summary::after {
	transform: rotate(0deg);/*打开明细时，箭头反向*/
}
</style>

<style type="text/css">
.common-details{
	width:8rem;
}
.common-details summary{
	font-weight:bold;
	color:#0767a8;
}
.common-details[open]::details-content {
	color: #002fa7;
}

.top-menu{
	user-select: none;
	border-radius:0.04rem;
	width:1rem;
	padding:0.1rem;
}
.top-menu:hover{
	background-color:#e3e3e3;
}
.sub-menu-box {
	user-select: none;
	position: absolute;
	background-color: #ffffff;
	min-width: 1rem;
	padding: 5px 0;
	z-index: 1;
}
.sub-menu-box a {
	display: block;
	padding: 5px 10px;
	color: inherit;
	cursor:pointer;
}
.sub-menu-box a:hover {
	background-color: #f0f0f0;
}
</style>