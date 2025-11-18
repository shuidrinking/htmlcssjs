#### 操作动画animation的api

<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate" target="_blank">MDN文档</a>

>1.动画对象的api
<pre class="prettyprint lang-javascript">
Animation.cancel()
清除此动画的所有keyframeEffects，并中止播放。
Animation.finish()
设置动画中止播放。
Animation.pause()
暂停播放动画。
Animation.play()
开始或恢复播放动画，或者如果之前完成，则重新开始动画。
Animation.reverse()
反转播放动画，直到播放到动画开始时停止。如果动画完成或未播放，它将从头到尾播放。
</pre>

>2.操作dom元素的动画的api
<pre class="prettyprint lang-javascript">
//getAnimations函数获取元素已有的动画数组
element.getAnimations();

/*
 * animate函数为元素添加1个动画
 * 参数说明：keyframeArray是一个关键帧数组，options中设置：动画时长、播放周期等属性。
 */
element.animate(keyframeArray, options)

/*
animate函数参数详细解释：
1、keyframeArray的范式：
	[
		{css属性键值对, offset:值 , easing:值, composite:值 }, ...其他帧定义...
	]
	1.1、css属性键值对
		（1）关键帧可以为任何的 css 动画属性指定“属性—值”对。属性名使用驼峰式命名法指定，例如 background-color 变成 backgroundColor
		（2）而且有两个特色的 css 属性：
			（2.1）float, 必须写成 cssFloat ，因为"float" 是 JavaScript 的保留关键字
			（2.2）offset, 必须写成 cssOffset ，因为"offset" 表示如下的关键帧 offset
	1.2、offset
	关键帧的 offset 偏移量指定为介于0.0和1.0之间的数字或为null。这相当于使用@keyframes在 CSS 样式表中以百分比指定开始和结束状态。如果此值为null或缺失，则关键帧将在相邻关键帧之间均匀分布。
	1.3、easing
	从这个关键帧直到这一级中的下一个关键帧所使用的 timing function
	1.4、composite
2、options范式：
	{delay:值, duration: 持续毫秒数, ...其他animation中的option...}
*/
</pre>

>3.样例
<pre class="prettyprint lang-javascript">
// animation of the cupcake slowly getting eaten up
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// doesn't actually need to be eaten until a click event, so pause it initially:
nommingCake.pause();
</pre>