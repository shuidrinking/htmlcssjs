 #### 1、clip-path属性用于在盒子上绘制或者剪切出任意自定义形状
 >1.1 语法范式
<pre class="prettyprint lang-s">
clip-path:函数名(参数)
可用函数名包括：
inset、polygon、circle、ellipse、path
</pre>

>1.2 可用函数
<pre class="prettyprint lang-s">
#polygon 定义多边形
范式：polygon(点1, 点2, ... , 点n)
说明
1、所有点都处于第1象限
2、每个点都有x和y属性，属性值是百分比，不是具体的长度值
3、每个点的数据结构： x百分比 y百分比
4、点的数量不限
5、样例：clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);

#path 定义任意形状
样例：
clip-path: path("M  20  240  L  20  80 L 160  80  L 160  20 L 280 100  L 160 180 L 160 120  L  60 120 L  60 240 Z");
 </pre>
 
>1.3 举例
<pre class="prettyprint lang-s">
#绘制等腰三角形
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
#绘制消息窗口
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
#绘制左箭头
clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
</pre>

<div style="text-align:center;width:80%;padding:0.1rem;display:flex;gap:0.2rem;">
	<div style="background-color:#ff8900;clip-path: polygon(50% 0%, 0% 100%, 100% 100%);width:50px;height:50px;"></div>
	<div style="background-color:#00bcff;clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);width:50px;height:50px;"></div>
	<div style="background-color:#00bb67;clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);width:50px;height:50px;"></div>
	<div style="background-color:#00bb67;clip-path: path('M  20  240  L  20  80 L 160  80  L 160  20 L 280 100  L 160 180 L 160 120  L  60 120 L  60 240 Z');"></div>
</div>

>1.4 在线调试剪切工具
<a href="https://tools.jb51.net/code/css3path" target="_blank">路径在线调试</a>
