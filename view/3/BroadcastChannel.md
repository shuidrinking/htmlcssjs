#### 同源网页之间通信工具类BroadcastChannel

```
BroadcastChannel 接口表示给定源的任何浏览上下文都可以订阅的命名频道，也就是各种形态的窗口都能加入“群聊”。它允许同源的不同浏览器窗口、标签页、frame 或者 iframe 下的不同文档之间相互通信。
消息通过 message 事件进行广播，该事件在侦听该频道的所有 BroadcastChannel 对象上触发，发送消息的对象除外。
```

>1.使用样例
<pre class="prettyprint lang-javascript">
const producer = new BroadcastChannel("频道id");
producer.postMessage("消息内容");
const consumer = new BroadcastChannel("频道id");

//发送消息
let message="hi boy !";
producer.postMessage(message);
/*
监听正常消息 message
参数event增加了以下5个专用属性：
data ： 由消息发送者发送的数据。
origin ： 一个表示消息发送者来源的字符串。
lastEventId ： 一个表示事件唯一 ID 的字符串。
source ： 一个消息事件源，可以是一个用于表示消息发送者的 WindowProxy、MessagePort 或 ServiceWorker 对象。
ports ：一个与发送消息（通过频道发送消息或向 SharedWorker 发送消息）的频道相关联的 MessagePort 对象的数组。
*/
consumer.addEventListener("message", (event) => { received.textContent = event.data; })
consumer.onmessage = (event) => { received.textContent = event.data; }

//监听接收消息异常 messageerror
consumer.addEventListener("messageerror", (event) => { console.error(event); })
consumer.onmessageerror = (event) => { console.error(event); }

//调用close()方法退出群聊
</pre>