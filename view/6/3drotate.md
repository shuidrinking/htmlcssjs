#### 鼠标移入box时3d反馈偏转

<div class="demobox">	
	<div class="card"></div>
</div>

>javascript代码
<pre class="prettyprint lang-javascript">
function getRotateDeg(range, value, length){
	return (value /length)*(range[1]-range[0])+ range[0];
}
function initEffect(){
	const card = document.querySelector('.card');
	const yRange =[-10, 10];//旋转幅度H
	card.onmousemove =(e)=>{
		const { offsetX,offsetY } = e;
		const { offsetWidth,offsetHeight }= card;
		const ry = getRotateDeg(yRange, offsetX, offsetWidth);
		const rx = getRotateDeg(yRange, offsetY, offsetHeight);
		card.style.setProperty('--rx',`${rx}deg`);
		card.style.setProperty('--ry',`${ry}deg`);
	}
	card.onmouseleave =()=>{
		card.style.setProperty('--rx', '0deg');
		card.style.setProperty('--ry', '0deg');
	};
}
setTimeout(initEffect, 100);//页面onload后执行初始化，为卡片添加鼠标滑动监听
</pre>

>css代码
<pre class="prettyprint lang-css">
.card{
	--rx:0deg;
	--ry:0deg;
	width:200px;
	height:300px;
	border-radius:10px;
	cursor:pointer;
	background-image: linear-gradient(to left bottom, #f46246, #fa557c, #e75eaf, #bc74d7, #9487eb, #6197f4, #00a3f3, #00afed, #00b9e0, #00c0cf, #2ac6bc);
	/* 指定背景图像的大小 */
	background-size: 200%;
	transition: 0.3s;
	perspective:500px;
	transform: perspective(500px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
}
.card:hover {
	box-shadow:-3px -3px 10px #54a29e, 3px 3px 10px #a79d66;
}
</pre>

<style type="text/css">
	.card{
		--rx:0deg;
		--ry:0deg;
		width:200px;
		height:300px;
		border-radius:10px;
		cursor:pointer;
		background-image: linear-gradient(to left bottom, #f46246, #fa557c, #e75eaf, #bc74d7, #9487eb, #6197f4, #00a3f3, #00afed, #00b9e0, #00c0cf, #2ac6bc);
		/* 指定背景图像的大小 */
		background-size: 200%;
		transition: 0.3s;
		perspective:500px;
		transform: perspective(500px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
	}
	.card:hover {
		box-shadow:-3px -3px 10px #54a29e, 3px 3px 10px #a79d66;
	}
</style>

<script type="text/javascript">
	function getRotateDeg(range, value, length){
		return (value /length)*(range[1]-range[0])+ range[0];
	}
	function initEffect(){
		const card = document.querySelector('.card');
		const yRange =[-10, 10];//旋转幅度H
		card.onmousemove =(e)=>{
			const { offsetX,offsetY } = e;
			const { offsetWidth,offsetHeight }= card;
			const ry = getRotateDeg(yRange, offsetX, offsetWidth);
			const rx = getRotateDeg(yRange, offsetY, offsetHeight);
			card.style.setProperty('--rx',`${rx}deg`);
			card.style.setProperty('--ry',`${ry}deg`);
		}
		card.onmouseleave =()=>{
			card.style.setProperty('--rx', '0deg');
			card.style.setProperty('--ry', '0deg');
		};
	}
	setTimeout(initEffect, 100);
</script>