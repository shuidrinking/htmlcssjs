#### 判定两个dom元素的位置关系

<pre class="prettyprint lang-javascript">
const position = nodeA.compareDocumentPosition(nodeB);

// compareDocumentPosition 返回的是一个位掩码，因此必须使用按位与运算符 (&) 才能得到有意义的值

if(position & Node.DOCUMENT_POSITION_具体值){
}

// 其中具体值及其10进制值和意义：
DOCUMENT_POSITION_DISCONNECTED: (1)不在同一文档中。
DOCUMENT_POSITION_PRECEDING: (2) otherNode 在当前节点之前。
DOCUMENT_POSITION_FOLLOWING: (4) otherNode 在当前节点之后。
DOCUMENT_POSITION_CONTAINS: (8) otherNode 包含当前节点。
DOCUMENT_POSITION_CONTAINED_BY: (16) otherNode 被当前节点包含。
DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: (32) 特定。
</pre>