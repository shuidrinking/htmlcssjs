#### svg的“stroke-”系列属性实现轮廓绘制

```
stroke系列属性有很多，主要用于定义轮廓的渲染属性，也可将文字视为“轮廓”进行设置，常见例如：
stroke: 它定义了图形的外轮廓的颜色，可以是渐变或者图案
stroke-width: 定义了描边宽度
stroke-dasharray: 虚线中实线条的长度，即：用于绘制形状轮廓的虚线段和间隙的排列形式
stroke-dashoffset: 虚线中实线条起始位置距离起点的偏移量，负数时表示离终点的偏移量 
stroke-linecap: 路径两端的形状，可选值： butt | round | square | inherit 
		
通过animation在100%时将偏移量设置为0，实现按轨迹运动，在animation中：
递减stroke-dashoffset实现绘制
递减stroke-dasharray实现擦除
```
<style>
.line {  
	stroke-dasharray: 1000; /* 定义线条的长度 */  
	stroke-dashoffset: 1000; /* 初始隐藏线条长度 */  
	animation: draw 2s forwards; /* 播放动画 */  
}
@keyframes draw {  
	to {  
		stroke-dashoffset: 0; /* 隐藏量为0，最终线条完全可见 */  
	}
}
</style>
<svg width="400" height="200">  
	<line class="line" x1="10" y1="100" x2="390" y2="100" stroke="blue" stroke-width="3"/>  
</svg>

>html代码
<pre class="prettyprint lang-html">
&lt;svg width="400" height="200"&gt;
	&lt;line class="line" x1="10" y1="100" x2="390" y2="100" stroke="blue" stroke-width="3"/&gt;
&lt;/svg&gt;
</pre>

>css代码
<pre class="prettyprint lang-css">
.line {  
	stroke-dasharray: 1000; /* 定义线条的长度 */  
	stroke-dashoffset: 1000; /* 初始隐藏线条长度 */  
	animation: draw 2s forwards; /* 播放动画 */  
}
@keyframes draw {  
	to {  
		stroke-dashoffset: 0; /* 隐藏量为0，最终线条完全可见 */  
	}
}
</pre>