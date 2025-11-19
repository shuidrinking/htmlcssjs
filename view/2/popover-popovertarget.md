#### 使用popover和popovertarget属性定义“点击后打开或关闭弹出框”

```
如果需要类似window的“开始”菜单
无需再编写js函数实现点击后弹出/关闭 弹出框，css自带的属性组popover和popovertarget可以直接实现

宿主设置属性：popovertarget="弹出元素的id"
弹出元素的属性：popover anchor="宿主的id"
其中popover标记“我是个被弹出元素”

CSS 伪类 :popover-open 用于表示一个处于显示状态的 popover 元素（即带有 popover 属性的元素）


默认情况下，弹出框会出现在视口的中间位置。默认样式在用户代理样式表中是这样实现的：
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
因此，下面代码的效果是：“各位好”在屏幕正中间弹出
<button popovertarget="my-popover">打开弹出框</button>
<div popover id="my-popover">各位好！</div>

我们可以自定义:popover-open的样式
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

<div class="containner">
	<button class="startKey" id="startKey" popovertarget="menu-items">
		<div aria-hidden="true">➕</div>
	</button>
	<menu class="menu-items" id="menu-items" popover anchor="startKey">
		<div class="item" aria-hidden="true">
			♥️
		</div>
		<div class="item" aria-hidden="true">
			💾
		</div>
		<div class="item" aria-hidden="true">
			🔗
		</div>
		<div class="item" aria-hidden="true">
			✉
		</div>
		<div class="item" aria-hidden="true">
			🛒
		</div>
	</menu>
</div>

<style>
:root {
	--btn-size: 0.3rem;
	--extra-space: 0.15rem;
}
.containner{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;	
	width: 100%;
	position:relative;
}
.startKey {
	border-radius: 50%;
	width: var(--btn-size);
	aspect-ratio: 1;
	background: darksalmon;
	z-index: 1;
	cursor:pointer;
}

/* 变换时间 */
.startKey > div {
  transition: transform 0.3s;
}

.menu-items {
	display: grid;
	place-content: center;
	width: 300px;
	aspect-ratio: 1;
	position: absolute;
	bottom: calc(50% - 150px);
	left: calc(50% - 150px);
}

.item {
	display: grid;
	place-content: center;
	offset-path: circle(100px);
	background-color: var(--bg);
	animation-composition: accumulate; /* 多个动画效果累加，重叠属性值与add不同，会综合计算 */
	opacity: 1;
	transition: all 1s var(--delay) ease;
	border-radius: 50%;
	width: var(--btn-size);
	aspect-ratio: 1;
	cursor:pointer;
	text-align:center;
	grid-area: 1/1;
}
.containner:has(:popover-open) .startKey > div {
	transform: rotate(-45deg);
}

.menu-items:not(:popover-open) .item {
	--radius: 0;
	offset-distance: 105%;
}

:popover-open .item{
	opacity: 1;
}
.item:nth-child(5) {
	--bg: pink;
	offset-distance: 100%;
	--delay: 0.4s;
}
.item:nth-child(4) {
	--bg: thistle;
	offset-distance: 87.5%;
	--delay: 0.3s;
}

.item:nth-child(3) {
	--bg:	paleturquoise;
	offset-distance: 75%;
	--delay: 0.2s;
}

.item:nth-child(2) {
	--bg: lightgreen;
	offset-distance: 62.5%;
	--delay: 0.1s;
}

.item:nth-child(1) {
	--bg: peachpuff;
	offset-distance: 50%;
	--delay: 0s;
}
	
.menu-items:not(:popover-open) {
	.item:nth-child(1) {
	  --delay: 0s;
	}

	.item:nth-child(2) {
	  --delay: 0.1s;
	}

	.item:nth-child(3) {
	  --delay: 0.2s;
	}

	.item:nth-child(4) {
	  --delay: 0.3s;
	}

	.item:nth-child(5) {
	  --delay: 0.4s;
	}
}
</style>