#### 绕Y轴旋转
<style>
	/*定义自动旋转的动画*/
	@keyframes autoMove {
		from { }
		to {
			transform: rotateY(-360deg);
		}
	}
	.items {
		width: 200px;
		height: 200px;
		border: 1px solid #c18;
		margin: 200px auto;
		/*指定子元素定位在三维空间内*/
		transform-style: preserve-3d;
		/*让所有item的父级元素（即items）旋转，item就是围绕着旋转了*/
		animation: autoMove 10s infinite linear;
	}
	.items:hover {
		/*鼠标移入 暂停动画*/
		animation-play-state: paused;
	}
	.container {
		/*指定观察者与平面的距离，使有透视效果*/
		/*若无法正常3d效果，将perspective属性提到更上一个父容器即可(此处已上提，从items-->container)*/
		perspective: 200px;
		/*让container的伪类有过渡效果--51-54行*/
		/*transition: all 1s;*/
		width:100%;display:flex;align-items:center;justify-content:center;
	}
</style>
	
<div class="container">
	<div class="items">
		父元素的样式中透视属性perspective的值越小，离旋转对象越近
	</div>
</div>

> css代码
<pre class="prettyprint lang-css">
/*定义自动旋转的动画*/
@keyframes autoMove {
	from { }
	to {
		transform: rotateY(-360deg);
	}
}
.items {
	width: 200px;
	height: 200px;
	border: 1px solid #c18;
	margin: 200px auto;
	/*指定子元素定位在三维空间内*/
	transform-style: preserve-3d;
	/*让所有item的父级元素（即items）旋转，item就是围绕着旋转了*/
	animation: autoMove 10s infinite linear;
}
.items:hover {
	/*鼠标移入 暂停动画*/
	animation-play-state: paused;
}
.container {
	/*指定观察者与平面的距离，使有透视效果*/
	/*若无法正常3d效果，将perspective属性提到更上一个父容器即可(此处已上提，从items-->container)*/
	perspective: 200px;
	/*让container的伪类有过渡效果--51-54行*/
	/*transition: all 1s;*/
	width:100%;display:flex;align-items:center;justify-content:center;
}
</pre>

> html代码
<pre class="prettyprint lang-html">
	&lt;div class="items"&gt;
		父元素的样式中透视属性perspective的值越小，离旋转对象越近
	&lt;/div&gt;
</pre>