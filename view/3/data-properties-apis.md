#### 如何读取/设置 “data-”前缀的属性设置

>1、“data-”前缀的属性说明
<pre class="prettyprint lang-javascript">
html元素的 “data-属性名”，可自行定义多组，属性名根据业务需要自行设置，对应js中的 “元素.dataset.属性名”
html元素的属性有多个横杠时，对应js中的将横杠分隔式转为驼峰式
</pre>

>2、检查是否存在
<pre class="prettyprint lang-javascript">
'keyname' in element.dataset
</pre>

>3、获取：
<pre class="prettyprint lang-javascript">
（1）用点符号获取，多个横杠的属性key需要转化为驼峰式
&lt;div data-some-attr="xxxx"&gt;...&lt;/div&gt;
let _div=...
_div.dataset.someAttr
（2）用中括号获取
element.dataset['keyname']
</pre>

>4、设置
<pre class="prettyprint lang-javascript">
let _div=...
_div.dataset.someAttr="someValue";
设置后，元素中的会被设置到属性data-some-attr

注意：null会被设置为字符串"null"！
</pre>

>5、删除
<pre class="prettyprint lang-javascript">
delete element.dataset.keyname
</pre>

>5.样例
<pre class="prettyprint lang-javascript">
&lt;div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth&gt;
  John Doe
&lt;/div&gt;

const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = "1960-10-03";
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: &lt;div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth="1960-10-03">John Doe&lt;/div&gt;
</pre>