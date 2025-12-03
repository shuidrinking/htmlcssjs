#### 1、盒模型定义

>1.1、概念
CSS 中的 box-sizing 属性定义了 user agent 应该如何计算一个元素的总宽度和总高度。

>1.2、box-sizing取值说明
<pre class="prettyprint lang-s">
#content-box 
content-box 默认值，标准盒子模型。width 与 height 只包括内容的宽和高，不包括边框（border），内边距（padding），外边距（margin）。注意：内边距、边框和外边距都在这个盒子的外部。任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
#border-box
width 和 height 属性包括内容，内边距和边框，但不包括外边距。
border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在 width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。
</pre>