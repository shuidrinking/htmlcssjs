#### mix-blend-mode实现前景色和背景色混合，可应用于“文字适配背景色、文字镂空”等
<style>
.containner{
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	gap:0.1rem;
	position:relative;
}
.subelement{
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position:relative;
	flex-direction: column;
	gap: 0.2rem;
}
circle {
  mix-blend-mode: screen;
}
.isolate {
  isolation: isolate;
}
</style>
<style>
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: screen;
  position: absolute;
}
.circle-1 {
  background: red;
}
.circle-2 {
  background: lightgreen;
  left: 40px;
}
.circle-3 {
  background: blue;
  left: 20px;
  top: 40px;
}
.isolate {
  isolation: isolate; /* Without isolation, the background color will be taken into account */
  position: relative;
}
.box{
	background: linear-gradient(45deg, #000 50%, #fff 50%);
	position: relative;
}
.sb {
	position: absolute;
	font-size: 30px;
	line-height:30px;
	width: 100%;
	height: 100%;
	top: 40%;
	left: 20%;
	color: #fff;
	mix-blend-mode: difference;
	animation: move 3s infinite linear alternate;
}
@keyframes move {
	0% {
		transform: translateX(20%);
	}
	100% {
		transform: translateX(-20%);
	}
}
</style>
<div class="containner">
	<div class="subelement isolate">
		<div style="width:1.2rem;height:1.2rem;position:relative;">
			<div class="circle circle-1"></div>
			<div class="circle circle-2"></div>
			<div class="circle circle-3"></div>
		</div>
		<div>
			对普通标签有效
		</div>
	</div>
	<div class="subelement">
		<svg  style="width:1.2rem;height:1.2rem">
			<g class="isolate">
				<circle cx="40" cy="40" r="40" fill="red" />
				<circle cx="80" cy="40" r="40" fill="lightgreen" />
				<circle cx="60" cy="80" r="40" fill="blue" />
			</g>
		</svg>
		<div>
			对SVG同样有效
		</div>
	</div>
	<div class="subelement isolate" style="width:4rem;height:3rem;background-image:url(image/business/sample3.jpg);background-repeat:no-repeat;background-size: 100%;">
		<div style="color:#ffffff;line-height:1;mix-blend-mode: difference;font-size:30px;width:100%;text-align:center;">
			difference跟背景颜色反相
		</div>
		<div style="line-height:1;background-color:#ffffff;font-weight:bold;mix-blend-mode: screen;font-size:30px;width:100%;text-align:center;">
			镂空文字mix-blend-mode: screen
		</div>
	</div>
	<div class="subelement box isolate">
		<div class="sb">difference差值混合</div>
	</div>
</div>

<pre class="prettyprint lang-css">
mix-blend-mode的属性值非常多，作用是把每个像素的前景色和背景色混合，其中差值混合difference即可实现

/* 关键字值 */
mix-blend-mode: normal; 没有混合效果
mix-blend-mode: multiply;正片叠底
mix-blend-mode: screen;滤色，会实现上下层颜色叠加
mix-blend-mode: overlay;叠加
mix-blend-mode: darken;变暗
mix-blend-mode: lighten;变亮
mix-blend-mode: color-dodge;颜色减淡
mix-blend-mode: color-burn;颜色加深
mix-blend-mode: hard-light;强光
mix-blend-mode: soft-light;柔光
mix-blend-mode: difference;差值
mix-blend-mode: exclusion;排除
mix-blend-mode: hue;色相
mix-blend-mode: saturation;颜色
mix-blend-mode: color;饱和度
mix-blend-mode: luminosity;亮度
mix-blend-mode: plus-darker;
mix-blend-mode: plus-lighter;

/* 全局值 */
mix-blend-mode: inherit;
mix-blend-mode: initial;
mix-blend-mode: revert;
mix-blend-mode: revert-layer;
mix-blend-mode: unset;
</pre>