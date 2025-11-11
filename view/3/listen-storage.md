#### 监听storage变化

<pre class="prettyprint lang-javascript">

window.addEventListener('storage', function(event) {
	if(event.storageArea === localStorage) {
	}
	else if (event.storageArea === sessionStorage) {
	}
	console.log('localStorage 发生变化');
	console.log('Key 发生变化的值是: ' + event.key);
	console.log('New Value 发生变化的值是: ' + event.newValue);
});
</pre>