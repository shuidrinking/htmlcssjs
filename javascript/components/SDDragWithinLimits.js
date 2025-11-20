/**
 * 在限制范围内拖动排序，可用于“菜单项排序”等<br>
 * email:shuidrinking@126.com<br>
 * author:liuxiaosong<br>
 * date:2025-11-20<br>
 * 
 * 用法：将待被拖动的元素所在的父元素作为参数传入enableDrag函数即可
 * SDDragWithinLimits.enableDrag(document.querySelector("#listId"));
 */

var SDDragWithinLimits=SDDragWithinLimits??{};
!(function(){
	let _style=document.querySelector("style[data-sddragwithinlimits-style]");
	if(_style){
		//console.info("样式已存在");
		return;
	}
	/**
	 * 向页面动态添加样式
	 */
	let csscontent=`/*正在被拖动的元素样式*/
.sd-dragging-item{
	opacity:0.4;
}
/*被拖动的元素A经过元素B时，元素B被经过时的样式*/
.sd-dragging-entered{
	border:1px dashed #ff612c;
	background-color:#ffffcb;
}
.sd-dragging-item{
	opacity:0.4;
}`;
	let head = document.head;
	let style = document.createElement('style');
	style.textContent = csscontent;
	style.setAttribute('data-sddragwithinlimits-style', '');
	let firstStyleOrLinkTag = document.querySelector('head>style,head>link');
	if (firstStyleOrLinkTag) {
		head.insertBefore(style, firstStyleOrLinkTag);
	}
	else {
		head.appendChild(style);
	}
})();


//排序序号的属性key
SDDragWithinLimits.orderPropertyKey="data-sddrag-orderno";
//拖动的源头节点，操作流的任何时刻只能拖动一个元素，无需考虑多个并发的情况
SDDragWithinLimits.dragSourceNode = null;

/**
 * 为指定元素内部的元素赋予能被拖动的属性
 * @param {Object} 允许被拖动的元素所在的容器
 */
SDDragWithinLimits.enableDrag=function(_parentElement){
	if(!_parentElement){
		console.error("_parentElement is null");
		return;
	}
	if(!(_parentElement instanceof HTMLElement)){
		console.error("_parentElement is not HTMLElement");
		return;
	}
	let children = _parentElement.children;
	//设置每个元素的序号
	if(children && children.length>0){
		for (let i = 0; i < children.length; i++) {
			//允许元素被拖动
			children[i].setAttribute("draggable","true");
			if(!children[i].getAttribute(SDDragWithinLimits.orderPropertyKey)){
				children[i].setAttribute(SDDragWithinLimits.orderPropertyKey, i+1);
			}
		}
	}
	else{
		console.warn(`the parent element [id=${_parentElement.id}] contains no child element.`);
		return;
	}
	_parentElement.addEventListener('dragstart', function(e) {
		SDDragWithinLimits.dragSourceNode = e.target;
		/*被拖动时，为被拖动元素附加“拖动中”样式*/
		e.target.classList.add("sd-dragging-item");
		/*记下被拖动元素的属性值*/
		e.dataTransfer.setData('text/plain', e.target.getAttribute(SDDragWithinLimits.orderPropertyKey));
	});

	_parentElement.addEventListener('dragover', function(e) {
		if(SDDragWithinLimits.dragSourceNode.parentNode != e.target.parentNode){
			return;
		}
		e.preventDefault(); // 允许放置
		e.dataTransfer.dropEffect = 'move'; // 设置拖拽视觉效果
	});

	_parentElement.addEventListener('dragenter', function(e) {
		if(SDDragWithinLimits.dragSourceNode.parentNode != e.target.parentNode){
			return;
		}
		//被拖动的元素A经过元素B时，设置元素B被经过时的样式
		e.target.classList.add("sd-dragging-entered");
	});

	_parentElement.addEventListener('dragleave', function(e) {
		if(SDDragWithinLimits.dragSourceNode.parentNode != e.target.parentNode){
			return;
		}
		//被拖动的元素A离开了元素B时，移除元素B被经过时的样式
		e.target.classList.remove("sd-dragging-entered");
	});

	_parentElement.addEventListener('drop', function(e) {
		if(SDDragWithinLimits.dragSourceNode.parentNode != e.target.parentNode){
			return;
		}
		/*
		此时的e.target是拖动的目的地的元素，此元素的位置将要被拖动的元素占领
		*/
		e.preventDefault();
		//拖动目的地的元素被经过的样式要再次清除一下
		e.target.classList.remove("sd-dragging-entered");
		
		//提取被拖动的元素的原来的index
		const draggedItemIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
		const dropToTarget = e.target;
		const dragOverEvent = e;
		
		// 移动元素
		SDDragWithinLimits.moveElement(_parentElement, draggedItemIndex, dropToTarget, dragOverEvent);
	});

	_parentElement.addEventListener('dragend', function(e) {
		if(e.target.parentNode!=_parentElement){
			return;
		}
		//拖放结束时，移除被拖动元素的“拖动中”样式
		e.target.classList.remove("sd-dragging-item");
	});
}
/**
 * 被拖动元素落地
 * @param {Object} _parentElement 被拖动元素所在父节点
 * @param {Object} draggedItemIndex 被拖动元素的原序号
 * @param {Object} dropToTarget 拖动放手的目的地的原住元素
 * @param {Object} dragOverEvent 
 */
SDDragWithinLimits.moveElement=function(_parentElement, draggedItemIndex, dropToTarget, dragOverEvent) {
	/*最后又拖回原位置了，没发生变化*/
	//let dragSourceNode = _parentElement.children[draggedItemIndex];//也可以根据index获取
	if(SDDragWithinLimits.dragSourceNode == dropToTarget){
		return;
	}
	//发起者和目标处的序号比对，决定放到原住的前面还是后面
	let targetIndex=parseInt(dropToTarget.getAttribute(SDDragWithinLimits.orderPropertyKey), 10);
	if(draggedItemIndex>targetIndex){
		//后面的往前面的拖了，放到前面的前面
		dropToTarget.insertAdjacentElement("beforebegin", SDDragWithinLimits.dragSourceNode);// beforebegin afterend
	}
	else{
		//前面的往后拖了，放到后面的后面
		dropToTarget.insertAdjacentElement("afterend", SDDragWithinLimits.dragSourceNode);// beforebegin afterend
	}

	//遍历所有元素，以此重新更新各个元素的顺序号
	Array.from(_parentElement.children).forEach((li, index) => {
		li.setAttribute(SDDragWithinLimits.orderPropertyKey, index);
	});
}