#### 如何使用svg滤镜使用详解

#### 一、普通样式中设置；
.some-class{
	filter="url(#svgfilter的id)"
}

#### 二、svg中使用filter

>1、在svg里对复杂图片使用svg过滤器
<pre class="prettyprint lang-html">
&lt;svg&gt;
	&lt;image 
		x="10%" y="10%" width="80%" height="50%" 
		preserveAspectRatio="xMidYMid slice" 
		xlink:href="./复杂图片的名称.jpg" 
		ilter="url(#svgfilter的id)"
	&gt;
	&lt;/image&gt;
&lt;/svg&gt;
</pre>

>2、在svg里对文字使用svg过滤器
<pre class="prettyprint lang-html">
&lt;svg&gt;
	&lt;g filter="url(#svgfilter的id)"&gt;
		&lt;text x="50%" y="50%" dy=".35em" text-anchor="middle"&gt;我是在svg中呈现的文字&lt;/text&gt;
	&lt;/g&gt;
&lt;/svg&gt;
</pre>

>3、在svg里对一个方块形状使用svg过滤器
<pre class="prettyprint lang-html">
&lt;svg&gt;
	&lt;rect x="100" y="100" width="90" height="90" 
	stroke="green" 
	stroke-width="3"
	fill="green" 
	filter="url(#svgfilter的id)"
	/&gt;
&lt;/svg&gt;
</pre>