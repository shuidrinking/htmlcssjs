/**
 * 蜂窝显示组件
 * email:shuidrinking@126.com<br>
 * author:liuxiaosong<br>
 * date:2025-01-17<br>
 * 用法样例：<br>
 * 1、蜂巢样式说明： <br>
 *     sd-honeycomb-row-display此时六边形一个顶点在顶端，设置此class的div中横向放置一行六边形，蜂巢由多行构成；<br>
 *     sd-honeycomb-column-display此时六边形水平边在顶端，设置此class的div中纵向放置一列六边形，蜂巢由多列构成；<br>
 * 2、网页：<br>
 *     2.1、引入样式和脚本
 *     <link type="text/css" rel="stylesheet" href="SDHoneycomb.css"/>
 *    <script type="text/javascript" src="SDHoneycomb.js"></script>
 *    2.2、网页中按需要添加蜂巢元素
 *    <div class="sd-honeycomb-row-display或者sd-honeycomb-column-display"><br>
 *    <div>每个div作为蜂巢六边形单元格</div><br>
 *    </div><br>
 * 3、网页加载时调用蜂巢初始化函数：<br>
 *	    SDHoneycomb.render(null或者自定义编写的六边形class, ()=>{自定义渲染六边形的函数，可以用于设置六边形中的内容以及六边形的样式});
 */
var SDHoneycomb=SDHoneycomb??{};
/**
 * 组件加载时，设置mouseenter和mouseleave事件监听
 * 这里用js实现了鼠标划过时：自身放大，周围邻居缩小。
 * 该效果也可以用css的onhover实现
 * @param String className 蜂巢单元的样式类，默认值："sd-honeycomb-cell"。
 * @param function renderCellFunction 渲染蜂窝单元格的自定义函数，函数的参数为蜂窝单元格div
 */
SDHoneycomb.render = function(className = "sd-honeycomb-cell", renderCellFunction){
	if(!className){
		className = "sd-honeycomb-cell";
	}
	if(!renderCellFunction || typeof renderCellFunction !=="function"){
		renderCellFunction=function(){};
	}
	
	//渲染蜂窝里的单元格
	let renderOneCell=function(item, className, renderCellFunction){
		if(!item.classList.contains(className)){
			item.classList.add(className);
		}
		renderCellFunction(item);
		item.addEventListener('mouseenter', () => {
			item.style.setProperty('--sc', 1.2);
			let index=SDHoneycomb.getCellIndexInParent(item);
			SDHoneycomb.setAroundCellsStyle(item, index, 0.8, 0.6);
		});
		item.addEventListener('mouseleave', () => {
			item.style.setProperty('--sc', 1);
			let index=SDHoneycomb.getCellIndexInParent(item);
			SDHoneycomb.setAroundCellsStyle(item, index, 1, 1);
		});
	}
	
	/*提取单元格的所有行或者所有列，逐个遍历取出单元格进行渲染*/
	let allRowHoneycomb = document.querySelectorAll(".sd-honeycomb-row-display");
	let allColumnHoneycomb = document.querySelectorAll(".sd-honeycomb-column-display");
	//document.querySelectorAll函数返回的是NodeList可以调用forEach
	allRowHoneycomb.forEach((oneGroup)=>{
		//.children是一个HTMLCollection对象，不能直接用forEach
		Array.from(oneGroup.children).forEach((oneCell)=>{
			renderOneCell(oneCell, className, renderCellFunction);
		});
	});
	allColumnHoneycomb.forEach((oneGroup)=>{
		Array.from(oneGroup.children).forEach((oneCell)=>{
			renderOneCell(oneCell, className, renderCellFunction);
		});
	});
}
/**
 * 获取指定元素在其父容器中的序号，从0开始
 * @param {Object} element
 */
SDHoneycomb.getCellIndexInParent = function(element) {
	var parent = element.parentNode;
	var nodes = parent.childNodes;
	var children = parent.children;
	for (var i = 0, s=children.length; i < s; i++) {
		if(children[i]===element){
			return i;
		}
	}
	return -1;
}

/**
 * 鼠标划过时，自身变大，周围节点缩小变暗
 * @param HTMLElement item 鼠标所指的元素
 * @param int index 当前元素在其parent容器中的序号
 * @param number multiple 周围节点缩小倍数
 * @param number opacity 周围节点要被设置的透明度
 */
SDHoneycomb.setAroundCellsStyle = function(item, index, multiple, opacity){
	//本行的序号
	let rowIndex = SDHoneycomb.getCellIndexInParent(item.parentNode);

	let nextSibling = item.nextElementSibling;
	if(nextSibling){
		nextSibling.style.setProperty('--sc', multiple);
		nextSibling.style.setProperty('--op', opacity);
	}

	let prevSibling = item.previousElementSibling;
	if(prevSibling){
		prevSibling.style.setProperty('--sc', multiple);
		prevSibling.style.setProperty('--op', opacity);
	}

	//由于隔行错位显示的原因，相邻行号为偶数（0、2...）时，缩放其内与元素的序号相对本元素要减1
	let sign=1;
	if(rowIndex%2===0){
		sign=-1;
	}

	//上一行
	let parentPre=item.parentNode.previousElementSibling;
	if(parentPre){
		if(parentPre.children[index]){
			parentPre.children[index].style.setProperty('--sc', multiple);
			parentPre.children[index].style.setProperty('--op', opacity);
		}
		if(parentPre.children[index+1*sign]){
			parentPre.children[index+1*sign].style.setProperty('--sc', multiple);
			parentPre.children[index+1*sign].style.setProperty('--op', opacity);
		}
	}
	//下一行
	let parentNext=item.parentNode.nextElementSibling;
	if(parentNext){
		if(parentNext.children[index]){
			parentNext.children[index].style.setProperty('--sc', multiple);
			parentNext.children[index].style.setProperty('--op', opacity);
		}
		if(parentNext.children[index+1*sign]){
			parentNext.children[index+1*sign].style.setProperty('--sc', multiple);
			parentNext.children[index+1*sign].style.setProperty('--op', opacity);
		}
	}
}