#### 加强的插入元素函数

```
BroadcastChannel 接口表示给定源的任何浏览上下文都可以订阅的命名频道，也就是各种形态的窗口都能加入“群聊”。它允许同源的不同浏览器窗口、标签页、frame 或者 iframe 下的不同文档之间相互通信。
消息通过 message 事件进行广播，该事件在侦听该频道的所有 BroadcastChannel 对象上触发，发送消息的对象除外。
```

>1、使用样例
<pre class="prettyprint lang-javascript">
node.insertAdjacentElement(positionString, _newElement);
/*
positionString有4个可选值：
beforebegin : 元素前插入
afterbegin : 元素内部开头
beforeend : 元素内部末尾
afterend : 元素后插入

如下所示：
&lt;!-- beforebegin --&gt;
&lt;p&gt;
  &lt;!-- afterbegin --&gt;
  foo
  &lt;!-- beforeend --&gt;
&lt;/p&gt;
&lt;!-- afterend --&gt;
*/
</pre>