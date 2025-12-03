#### 浏览器根据dpr选择img标签的srcset属性值相应的图片

>1、背景知识
<pre class="prettyprint lang-s">
js中调用window.devicePixelRatio可获得当前浏览器的缩放率，默认是1倍
图片的实际分辨率 = css设置的分辨率 × window.devicePixelRatio时就不会模糊
使用img标签的srcset属性以及sizes属性，sizes是媒介查询属性，可以让浏览器自动选择文件，使用srcset后就不需要src了
</pre>

>2、单独使用srcset属性时，适用于所有因素一旦加载就稳定不变的场景
<pre class="prettyprint lang-html">
语法范式：
&lt;img srcset="图片路径 缩放率 [, 图片路径 适配缩放率] "/&gt;
样例：
&lt;img srcset="xxxx.jpg, xxxx2.jpg 2x, xxxx4.jpg 4x"/&gt;
当缩放率没有合适的匹配时，会选择差值最小的
</pre>

>3、如果浏览器窗口大小被人为调整或者dpr被人为调整（ctrl+鼠标滚轮），就需要使用srcset+sizes两个属性
<pre class="prettyprint lang-html">
语法范式：
&lt;img 
	srcset="图片 设备像素（单位w）或图像尺寸px [,图片 设备像素或图像尺寸px]" 
	sizes="(max-width: 屏幕宽度最大px) 图片的css宽度（单位vw）或图像尺寸px [,(max-width: 屏幕宽度最大px) 图片的css宽度或图像尺寸px] "
/&gt;
样例：
&lt;img 
	srcset="xxxx.jpg 150w, xxxx2.jpg 300w, xxxx4.jpg 600w, xxxx6.jpg 900w, xxxx10.jpg 1200w"
	sizes="(max-width: 600) 600px, (max-width: 900) 900vw, (max-width: 1400) 1200vw, "
/&gt;
</pre>