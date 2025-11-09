#### 操作动画animation的api

<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Animation" target="_blank">MDN文档</a>

>1.API
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

>2.样例
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