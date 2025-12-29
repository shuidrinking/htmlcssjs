<style>
	#textContent {
		background-color: #eee;
		border: 1px solid #ccc;
		padding: 20px;
		width: 50%;
		min-width: 320px;
	}
	h1 {
		margin: 0;
	}
	p {
		line-height: 1.5;
	}
</style>

<script>
setTimeout(function() {
	if(window.ResizeObserver) {
		const divElem = document.querySelector('#textContent');
		const slider = document.querySelector('input[type="range"]');

		divElem.style.width = '600px';

		slider.addEventListener('input', () => {
			divElem.style.width = slider.value + 'px';
		})

		const resizeObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				if(entry.contentBoxSize) {
					if (entry.contentBoxSize[0]) {
						divElem.style.fontSize = (entry.contentBoxSize[0].inlineSize/600)*16 + 'px';
					}
					else {
						divElem.style.fontSize = (entry.contentBoxSize.inlineSize/600)*16 + 'px';
					}
				}
				else {
					divElem.style.fontSize = (entry.contentRect.width/600)*16 + 'px';
				}
			}
		});

		resizeObserver.observe(divElem);
	}
	else {
		console.log('Resize observer not supported!');
	}
}, 1000);
</script>

#### 监听任意对象的尺寸变化

<div class="demobox">
	<div class="onedemo" style="height:auto;">
		<input type="range" value="600" min="300" max="1300">
	</div>
</div>
<div class="demobox">
	<div id="textContent">
		<h1>So what happened?</h1>
		<p>（1）为拖动比例条添加input动作的监听器，拖动时改变这个文本显示框的宽度；<br>（2）定义一个“尺寸监听器”负责监听“文本显示框”的大小，当其尺寸变化发生时，监听器回调函数中会改变“文本显示框”内的字体大小</p>
	</div>
</div>
<div class="demobox">
	<details style="width:5rem;">
		<summary>
			本例代码
		</summary>
		<pre class="prettyprint lang-javascript">
if(window.ResizeObserver) {
	//显示文字的div
	const divElem = document.querySelector('#textContent');
	divElem.style.width = '600px';
	
	//拖拽条，为其添加input监听：拖动时改变“显示文字的div”的宽度
	const slider = document.querySelector('input[type="range"]');
	slider.addEventListener('input', () => {
		divElem.style.width = slider.value + 'px';
	})

	//定义监听器，回调函数实现：“显示文字的div”的大小变动时，设置其内部文字的大小，即：字体跟随容器宽度而变化
	const resizeObserver = new ResizeObserver(entries => {
		for (let entry of entries) {
			if(entry.contentBoxSize) {
				if (entry.contentBoxSize[0]) {
					divElem.style.fontSize = (entry.contentBoxSize[0].inlineSize/600)*16 + 'px';
				}
				else {
					divElem.style.fontSize = (entry.contentBoxSize.inlineSize/600)*16 + 'px';
				}
			}
			else {
				divElem.style.fontSize = (entry.contentRect.width/600)*16 + 'px';
			}
		}
	});
	//监听“显示文字的div”的大小变动
	resizeObserver.observe(divElem);
}
else {
	console.log('Resize observer not supported!');
}
		</pre>
	</details>
</div>


>1、构造函数说明：
<pre class="prettyprint lang-javascript">
let resizeObserver = ResizeObserver(callback(entries, observer))

//每当被监听的元素调整大小时，会调用callback函数，callback接收两个参数：
entries：一个 ResizeObserverEntry 对象数组，可以用于获取每个元素改变后的新尺寸。
observer：对 ResizeObserver 自身的引用。

ResizeObserverEntry有如下属性可在回调函数中使用：

//一个对象，当运行回调时，该对象包含着正在观察元素的新边框盒的大小。
ResizeObserverEntry.borderBoxSize

//一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小。
ResizeObserverEntry.contentBoxSize

//一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小（以设备像素为单位）。
ResizeObserverEntry.devicePixelContentBoxSize 

//一个对象，当运行回调时，该对象包含着正在观察元素新大小的 DOMRectReadOnly 对象。请注意，这比以上两个属性有着更好的支持，但是它是 Resize Observer API 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然被保留在规范中，并且在未来的版本中可能被弃用。
ResizeObserverEntry.contentRect

//对正在观察 Element 或 SVGElement 的引用。
ResizeObserverEntry.target
</pre>

>2、观察器初始化后，将需要被监听的元素加入观察器
<pre class="prettyprint lang-javascript">
resizeObserver.observe(someNode);
</pre>

>3、样例代码
<pre class="prettyprint lang-javascript">
const ro = new ResizeObserver(entries => {
	for (let entry of entries) {
		if(entry.contentBoxSize) {
			if (entry.contentBoxSize[0]) {
				divElem.style.fontSize = (entry.contentBoxSize[0].inlineSize/600)*14 + 'px';
			}
			else {
				divElem.style.fontSize = (entry.contentBoxSize.inlineSize/600)*14 + 'px';
			}
		}
		else {
			divElem.style.fontSize = (entry.contentRect.width/600)*14 + 'px';
		}
	}
});
ro.observe(document.querySelector('#app'));
</pre>