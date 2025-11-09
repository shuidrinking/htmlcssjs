#### scroll-snap系列属性，设置滚动吸附

<pre class="prettyprint lang-s">
#一般用于一组图片在一个框内滑动单个展示

#容器框设置
scroll-snap-type: 方向 吸附状态（proxinity、mondatory)
#例如：
scroll-snap-type: x mondatory;


#容器内的子元素设置：
scroll-snap-align: center;/*设置吸附后的对齐方式*/
scroll-snap-stop:always;/*每一个子元素滑动通过时都会停止*/
</pre>