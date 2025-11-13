/**
 * 列队点播式图片播放器<br>
 * email:shuidrinking@126.com<br>
 * author:liuxiaosong<br>
 * date:2025-11-13<br>
 * 
 * 该组件需要 配套样式文件 sd-carousel-image-player.css
 * 使用样例：
 * 
 * 1、引入样式和脚本
 *     <link type="text/css" rel="stylesheet" href="sd-carousel-image-player.css"/>
 *    <script type="text/javascript" src="SDCarouseImagePlayer.js"></script>
 * 2、编辑图片播放器元素
 * <div class="sd-carousel-player">
		<img src="url1">
		...
		<img src="urln">
	</div>
 */
function SDImagePlayer(){
	this.domElement=null;
	this.images=[];//所有图片
	this.total=0;//图片总数
	this.currentIndex=0;//当前显示张数的序号
	this.xOffsetstep = 100;//两张轮播图之间的间隔
	this.scalestep = 0.8;//缩小的递减倍率
	this.opacitystep = 0.8;
	this.nextButton=null;
	this.preButton=null;
	this.preButton=null;
	this.nextButton=null;
	SDImagePlayer.prototype.build=function(_playerbox){
		this.domElement=_playerbox;
		this.preButton=document.createElement("div");
		this.preButton.classList.add("sd-carousel-button");
		this.preButton.classList.add("sd-carousel-pre-button");
		_playerbox.appendChild(this.preButton);
		
		this.nextButton=document.createElement("div");
		this.nextButton.classList.add("sd-carousel-button");
		this.nextButton.classList.add("sd-carousel-next-button");
		_playerbox.appendChild(this.nextButton);
		
		this.images = _playerbox.querySelectorAll("img");//将播放器内的所有图片提出
		this.total=this.images.length;
		
		this.preButton.addEventListener('click', ()=>{
			if(this.currentIndex===0){
				return;
			}
			this.currentIndex--;
			this.render();
		});
		this.nextButton.addEventListener('click', ()=>{
			if(this.currentIndex===this.total-1){
				return;
			}
			this.currentIndex++;
			this.render();
		});
		
		this.images.forEach((item, i)=>{
			item.addEventListener('click',()=>{
				this.currentIndex = i;
				this.render();
			});
		});
		
		//初始化时，展示正中间的图片
		if(this.total%2===0){
			this.currentIndex = this.total/2 -1;
		}
		else{
			this.currentIndex = Math.floor(this.total/2);
		}
		this.render();
	}
	SDImagePlayer.prototype.render=function(){
		for (let i=0; i<this.total; i++){
			const item = this.images[i];
			const sign =Math.sign(i-this.currentIndex);
			
			let xOffset=(i - this.currentIndex) * this.xOffsetstep;
			if(i !== this.currentIndex){
				xOffset = xOffset + this.xOffsetstep*sign;
			}
			const dis = Math.abs(i - this.currentIndex);
			const zIndex=this.total - dis;
			item.style.zIndex = zIndex;
			
			const scale = this.scalestep**dis;
			
			const rotateY= i===this.currentIndex ? 0:45 *-sign; //非1号位图片在Y轴的旋转度数
			
			item.style.transform=`translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;
			
			const opacity =this.opacitystep ** dis;
			item.style.opacity = opacity;
		}
	}
}