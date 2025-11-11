#### IntersectionObserver监听文档滚动到视窗时的事件

```
Intersection Observer API 是一种异步观察目标元素与其祖先元素或顶级文档视口交叉状态的方法。
这个API允许开发者注册一个回调函数，当目标元素进入或退出与另一个元素（或视口）的交叉区域，或者当两个元素之间的交叉区域变化达到指定的数量时，该回调函数将被执行。
这样就不再需要在主线程上做任何事情来监视元素交叉，浏览器可以自由地优化交叉管理。
广泛用于“图片延迟加载”、“滚动到视窗后开始播放视频，滑过后停止”
```

>1、真实元素在网页里提前占位，化入视窗后就加载
<pre class="prettyprint lang-javascript">
//Intersection0bserver的参数：{观察到之后的回调, 交叉认证的条件}
const ob = new Intersection0bserver((entries)=>{
	/*
	 * entries 表示被监听的对象数组，每个对象的属性中此处需要用的：
	 * isIntersecting:true/false 表示被监听对象与参照位置是否达到了交叉阀值
	 * target: dom对象 
	 */
	for(const entry of entries){
		//如果发生交叉了才执行加载
		if(entry.isIntersecting){
			const img = entry.target;
			img.src = img.dataset.src;
			//加载过后将其观察器解除
			ob.unobserve(img);
		}
	}
},
{
	root: null, //null表示以视觉窗口为参照位置
	rootMargin:"0px', //与参照位置的偏移量，负数表示向内
	threshold:0, //与参照位置的交叉阀值，值为0到1可以为小数，0表示只要边界碰到便是交叉，1表示要完整进入才能是交叉;只有达到阀值才会运行回调
});

//获取页面上有data-src属性的图片
const imgs= document.querySelectorAll('img[data-src]');
//为图片设置观察器
imgs.forEach((img)=>
	ob.observe(img);
});

</pre>

>2、添加一个laoding的元素，每次页面向下划入时边执行ajax再把元素渲染到页面
<pre class="prettyprint lang-javascript">
const ob = new Intersection0bserver((entries)=>{
	const entry= entries[0];
	if(entry.isIntersecting){
		//调用功能函数加载10张图
		LoadMoreImages(10);
	}
},
{
	threshold:0,
});
ob.observe(document.querySelector('.spin');
</pre>

>3、视频滚动到视窗就播放，过了就停止
<pre class="prettyprint lang-javascript">
const vd=document.querySelector('video');
const ob = new Intersection0bserver((entries)=>{
	const entry =entries[0];
	if(entry.isIntersecting){
		vd.play();
	}
	else {
		vd.pause();
	}
},
{
	threshold:1, //视频完全进入视窗时才播放
});

ob.observe(vd);.
</pre>