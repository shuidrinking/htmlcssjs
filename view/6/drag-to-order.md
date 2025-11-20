#### 拖拽排序

>1、实现套路
```
（1）引入edk4j的SDDragWithinLimits.js前端组件
（2）以“将待被拖动的元素所在的父元素”为参数，调用SDDragWithinLimits.enableDrag函数，为待拖动的元素赋予拖动属性
```
<pre class="prettyprint lang-javascript">
	&lt;script type="text/javascript" src="./javascript/components/SDDragWithinLimits.js" onload="setEnableDrag();" defer&gt;&lt;/script&gt;
	&lt;script type="text/javascript"&gt;
		function setEnableDrag(){
			//listOne和listTwo是两组需要被拖动排序的元素
			SDDragWithinLimits.enableDrag(document.querySelector("#listOne"));
			SDDragWithinLimits.enableDrag(document.querySelector("#listTwo"));
		}
	&lt;/script&gt;
</pre>

>2、样例
<style>
.onedemo{
	gap:0.05rem;
}
.onedemo>div, .drag-item{
	cursor:pointer;
	height: 0.3rem;
	line-height: 0.3rem;
	padding: 0 0.1rem;
	position: relative;
	--color:#008bc7;
	color:var(--color);
	border:0.01rem solid var(--color);
	border-radius: 0.04rem;
}
</style>

<div class="demobox">
	<div id="groupOne" class="onedemo">
		<div>大力精钢腿</div>
		<div>要你命三千</div>
		<div>无敌铁头功</div>
	</div>
	<div id="groupTwo" class="onedemo">
		<div>黑玉断续膏</div>
		<div>十香软筋散</div>
		<div>三尸脑神丹</div>
	</div>
</div>

<script src="./javascript/components/SDDragWithinLimits.js" onload="setEnableDrag();" defer></script>
<script type="text/javascript">
	function setEnableDrag(){
		SDDragWithinLimits.enableDrag(document.querySelector("#groupOne"));
		SDDragWithinLimits.enableDrag(document.querySelector("#groupTwo"));
	}
</script>