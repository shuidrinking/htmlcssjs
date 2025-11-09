#### 1、为图片设置与图片形状一致的阴影

>1.1 滤镜drop-shadow与boxshadow的区别
<pre class="prettyprint lang-s">
box-shadow添加的阴影只会跟随盒子的border，四方四正
drop-shadow滤镜会使严格按照图形中的图像边缘绘制阴影
</pre>

>1.2 滤镜drop-shadow的语法范式
<pre class="prettyprint lang-s">
#多个drop-shadow可以叠加在一个图形上
#除颜色参数外，其他3个参数必须携带单位，例如px、rem等，可以为负值
#颜色参数可以是第1个，也可以放到最后
filter:drop-shadow(x偏移长度 y偏移长度 高斯模糊值 颜色) ... drop-shadow(x偏移长度 y偏移长度 高斯模糊值 颜色);
</pre>
<div style="text-align:center;">
	<img  style="width:200px;height:200px;filter: drop-shadow(0 0 10px crimson);" src="image/business/firefox-logo.svg" >
<div>