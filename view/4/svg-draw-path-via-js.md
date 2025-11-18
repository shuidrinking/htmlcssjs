#### 用脚本控制svg轮廓绘制

<style type="text/css">
	.draw-path{
		/*dash虚线样式实现绘制效果*/
		stroke: #ff0000;/*它定义了图形的外轮廓的颜色，可以是渐变或者图案*/
		stroke-width:2;/*定义了描边宽度*/
		stroke-dasharray:var(--len);/*虚线中实线条的长度*/
		stroke-dashoffset:var(--len);/*虚线中实线条起始位置距离起点的偏移量，负数时表示离终点的偏移量*/
		stroke-linecap:round; /*路径两端的形状，可选值： butt | round | square | inherit*/
		/* animation:stroke 2s forwards; */
	}
	/*通过递减stroke-dashoffset实现绘制，通过递减stroke-dasharray实现擦除*/
	@keyframes stroke {
		to{
			stroke-dashoffset:0;
		}
	}
	.demobox{
		flex-direction: column;
	}
</style>

<script type="text/javascript">
	function draw(){
		const paths = document.querySelectorAll('.draw-path');
		paths.forEach((p)=>{
			//将要绘制的路径起点的偏移量设置为svg的长度
			const l = p.getTotalLength() + 1;
			p.style.setProperty('--len', l);
			let animations = p.getAnimations();
			for(let i=animations.length -1; i>=0;i--){
				//清理上次添加的动画
				animations[i].cancel();
			};
			//添加新动画, 2秒
			p.animate(
					[
						{
							strokeDashoffset:`${l}`,
							offset: 0
						},
						{
							strokeDashoffset:0,
							offset:1
						}
					],
					{
						duration: 2000,
						fill:"forwards"
					}
			);
		});
	}
	setTimeout(draw, 100);
</script>

<div class="demobox">
	<div style="width:100%;display:flex;align-items: center;justify-content: center;">
		<svg>
			<line class="draw-path" x1="10" y1="100" x2="500" y2="100" stroke-width="2"/>  
		</svg>
		<svg>
			<circle class="draw-path" cx="50%" cy="50%" r="50" stroke="black" fill="none" stroke-width="3"></circle>
		</svg>
		<svg class="icon"
			style="width: 100px; height: 100px; vertical-align: middle; fill: currentColor; overflow: hidden;"
			viewBox="0 0 1024 1024" version="1.1"
			xmlns="http://www.w3.org/2000/svg" p-id="6269">
			<path class="draw-path"
				d="M497.800533 540.458667l433.809067-210.722134v-47.982933L497.92 71.202133 65.348267 282.914133l-0.725334 47.1296 433.1776 210.414934zM0 369.800533L1.962667 242.688 497.800533 0l497.809067 241.681067v128.119466L497.800533 611.6096 0 369.800533z"
				fill="transparent" p-id="6270"></path>
			<path class="draw-path"
				d="M99.797333 388.1728L1.962667 436.053333 0 563.182933l497.800533 241.800534 497.809067-241.800534V435.063467L890.436267 384l-71.611734 36.3776 112.785067 54.7584v47.982933L497.800533 733.832533 64.622933 523.4176l0.725334-47.1296L173.687467 423.253333z"
				fill="transparent" p-id="6271"></path>
			<path class="draw-path"
				d="M99.797333 580.1728L1.962667 628.053333 0 755.182933l497.800533 241.800534 497.809067-241.800534V627.063467L890.436267 576l-71.611734 36.3776 112.785067 54.7584v47.982933l-433.809067 210.7136L64.622933 715.4176l0.725334-47.1296L173.687467 615.253333z"
				fill="transparent" p-id="6272"></path>
		</svg>
	</div>
	<div class="button lightBlueButton" onclick="draw()">再绘制一次</div>
</div>

>1、svg代码
<pre class="prettyprint lang-html">
	&lt;svg&gt;
		&lt;line class="draw-path" x1="10" y1="100" x2="500" y2="100" stroke-width="2"/&gt;  
	&lt;/svg&gt;
	&lt;svg&gt;
		&lt;circle class="draw-path" cx="50%" cy="50%" r="50" stroke="black" fill="none" stroke-width="3"&gt;&lt;/circle&gt;
	&lt;/svg&gt;
	
	&lt;svg class="icon"
		style="width: 100px; height: 100px; vertical-align: middle; fill: currentColor; overflow: hidden;"
		viewBox="0 0 1024 1024" version="1.1"
		xmlns="http://www.w3.org/2000/svg" p-id="6269"&gt;
		&lt;path class="draw-path"
			d="M497.800533 540.458667l433.809067-210.722134v-47.982933L497.92 71.202133 65.348267 282.914133l-0.725334 47.1296 433.1776 210.414934zM0 369.800533L1.962667 242.688 497.800533 0l497.809067 241.681067v128.119466L497.800533 611.6096 0 369.800533z"
			fill="transparent" p-id="6270"&gt;&lt;/path&gt;
		&lt;path class="draw-path"
			d="M99.797333 388.1728L1.962667 436.053333 0 563.182933l497.800533 241.800534 497.809067-241.800534V435.063467L890.436267 384l-71.611734 36.3776 112.785067 54.7584v47.982933L497.800533 733.832533 64.622933 523.4176l0.725334-47.1296L173.687467 423.253333z"
			fill="transparent" p-id="6271"&gt;&lt;/path&gt;
		&lt;path class="draw-path"
			d="M99.797333 580.1728L1.962667 628.053333 0 755.182933l497.800533 241.800534 497.809067-241.800534V627.063467L890.436267 576l-71.611734 36.3776 112.785067 54.7584v47.982933l-433.809067 210.7136L64.622933 715.4176l0.725334-47.1296L173.687467 615.253333z"
			fill="transparent" p-id="6272"&gt;&lt;/path&gt;
	&lt;/svg&gt;
	
	&lt;div class="button lightBlueButton" onclick="draw()"&gt;再绘制一次&lt;/div&gt;
</pre>

>2、css代码
<pre class="prettyprint lang-javascript">
.draw-path{
	/*dash虚线样式实现绘制效果*/
	stroke: #ff0000;/*它定义了图形的外轮廓的颜色，可以是渐变或者图案*/
	stroke-width:2;/*定义了描边宽度*/
	stroke-dasharray:var(--len);/*虚线中实线条的长度*/
	stroke-dashoffset:var(--len);/*虚线中实线条起始位置距离起点的偏移量，负数时表示离终点的偏移量*/
	stroke-linecap:round; /*路径两端的形状，可选值： butt | round | square | inherit*/
	/* animation:stroke 2s forwards; */
}
</pre>

>3、javascript代码
<pre class="prettyprint lang-javascript">
function draw(){
	const paths = document.querySelectorAll('.draw-path');
	paths.forEach((p)=>{
		//将要绘制的路径起点的偏移量设置为svg的长度
		const l = p.getTotalLength() + 1;
		p.style.setProperty('--len', l);
		let animations = p.getAnimations();
		for(let i=animations.length -1; i>=0;i--){
			//清理上次添加的动画
			animations[i].cancel();
		};
		//添加新动画, 2秒
		p.animate(
				[
					{
						strokeDashoffset:`${l}`,
						offset: 0
					},
					{
						strokeDashoffset:0,
						offset:1
					}
				],
				{
					duration: 2000,
					fill:"forwards"
				}
		);
	});
}
</pre>