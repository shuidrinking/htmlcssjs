#### svg滤镜

<a href="https://yoksel.github.io/svg-filters" target="_blank">svg滤镜在线调试和代码生成工具</a>

#####一、svg过滤器filter的编写语法范式

>1.1、范式如下，其中&lt;defs&gt;标签可以省略掉不写
<pre class="prettyprint lang-html">
&lt;svg width="0" height=""&gt;
	&lt;defs&gt;
		&lt;filter
			id="过滤器的id"
			filterUnits="定义过滤器区域单元"
			primitiveUnits="定义过滤器次区域单元"
			
			x="x轴坐标"
			y="y轴坐标"
			
			width="长度"
			height="长度"
			
			filterRes="过滤器区域数目"
			xlink:href="引用另一个过滤器" &gt;
			&lt;filter类型标签&gt;
				目前有18种过滤器类型，因此有18个类型标签可选
			&lt;/filter类型标签&gt;
			...一个filter里可以组合使用多个filter类型...
		&lt;/filter&gt;
		...多个filter都定义在这里...
	&lt;defs&gt;
&lt;/svg&gt;
</pre>

>1.2、属性取值说明
<pre class="prettyprint lang-s">
（1）	filterUnits − 定义过滤器效应区域单元。它指定了在过滤器内的各种长度值的坐标系和定义过滤器次区域的属性。如果filterUnits="userSpaceOnUse"，值表示是当前用户坐标系内的值；如果filterUnits="objectBoundingBox"，值表示包围盒子的分数或百分比值。默认是userSpaceOnUse。
（2）	primitiveUnits − 定义过滤器效应次区域单元。它指定了在过滤器内的各种长度值的坐标系和定义过滤器次区域的属性。如果filterUnits="userSpaceOnUse"，值表示是当前用户坐标系内的值；如果filterUnits="objectBoundingBox"，值表示包围盒子的分数或百分比值。默认是userSpaceOnUse。
（3）	x − 过滤器盒子的x轴坐标，默认是0。
（4）	y − 过滤器盒子的y轴坐标，默认是0。
（5）	width − 过滤器盒子的宽度，默认是0。
（6）	height − 过滤器盒子的高度，默认是0。
（7）	filterRes − 过滤器区域数。
（8）	xlink:href − 用来引用另一个过滤器。
</pre>

##### 二、使用方法

```
通过设置元素的filter属性为url(#svg过滤器id)实现
filter:url(#someId)
```

##### 三、svg过滤器类型

```
feBlend
feColorMatrix
feComponentTransfer
feComposite
feConvolveMatrix
feDiffuseLighting
feDisplacementMap
feFlood
feGaussianBlur
feImage
feMerge
feMorphology
feOffset - filter for drop shadows
feSpecularLighting
feTile
feTurbulence
feDistantLight
fePointLight
feSpotLight
```