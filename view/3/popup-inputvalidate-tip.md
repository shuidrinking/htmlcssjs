#### 对input的验证不通过时，在input上弹出浏览器内置的气泡

<div class="demobox">
	<div class="onedemo">
		<input placeholder="0～120的数字" id="ageInput" type="text" min="0" max="120" required oninput="validateAndShow()">
		<div class="button lightBlueButton" onclick="validateAndShow()">提交</div>
	</div>
</div>

>1、验证规则
```
验证规则：一个具有非空 validationMessage 的 HTML input 元素被认为是无效的，它会匹配 CSS :invalid 伪类，并导致 checkValidity() 返回 false。
```

>2、弹出气泡的手法：调用HTMLInputElement的函数打出组合效果：
<pre class="prettyprint lang-javascript">
（1）someInput.setCustomValidity(validationMessage)
为元素设置自定义有效性提示消息
若validationMessage非空，则在提交验证时会弹出提示气泡，气泡中的文本就是validationMessage的值

（2）someInput.reportValidity()
提交验证，如果本input的validationMessage非空，则弹出提示气泡，气泡中的内容是validationMessage的值

//上面两个方法已经足够，下面这个函数用不到
（3）someInput.checkValidity():
如果元素是约束验证的候选对象且不满足其约束，则返回布尔值 false。在这种情况下，它还会向元素触发 invalid 事件。如果元素不是约束验证的候选对象，或者它满足其约束，则返回 true。
运行 checkValidity() 方法，如果它返回 false（对于无效输入或未提供 pattern 属性），则以与提交表单相同的方式向用户报告输入无效。
</pre>

>3、实战代码范式
<pre class="prettyprint lang-javascript">
//我们可以编写一个验证函数，实现“当输入无效时可以在输入框上弹出浏览器内置的气泡”，关键代码如下：
function validInput(){
	...
	// 清除之前的validationMessage
	input.setCustomValidity('');
	
	if(验证不通过){
		//设置validationMessage
		input.setCustomValidity('具体的错误提示');
		// 调用input的reportValidity函数，如果validationMessage非空，会弹出浏览器内置的提示气泡
		input.reportValidity();
		return;
	}
}
</pre>

<script type="text/javascript">
	function validateAndShow() {
		let input = document.getElementById('ageInput');
		const val = input.value;
		const min = input.min !== '' ? Number(input.min) : -Infinity;
		const max = input.max !== '' ? Number(input.max) : Infinity;

		// 清除之前的自定义消息
		input.setCustomValidity('');

		if (val === '') {
			// 若必填，可设置消息。否则保留空
			if (input.hasAttribute('required')) {
				input.setCustomValidity('请输入年龄。');
			}
		} else {
			const n = Number(val);
			if (Number.isNaN(n)) {
				input.setCustomValidity('请输入有效的数字。');
			} else if (n < min || n > max) {
				input.setCustomValidity(`请输入介于 ${min} 和 ${max} 之间的数。`);
			}
		}

		// 如果有自定义消息，显示提示气泡（浏览器会显示它）
		input.reportValidity();
	}
</script>
