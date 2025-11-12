var menuList=menuList||[];
var menuMap={}; 
var menuPathKeyedMap={};
function init(){
	if(typeof(Worker) == "undefined"){
		return;
	}
	//生成菜单树控件
	var menu = new MenuTree();
	menu.Container = "menuContent";//指定容器
	menu.addNode("0", null, "文档", "0");
	//{"menuCode":"","showText":"","url":"","parentMenuCode":"","levelNo":"2"}
	for(var p in menuList){
		menuMap[menuList[p].menuCode]=menuList[p];
		menuPathKeyedMap[menuList[p].url]=menuList[p];
		menu.addNode(menuList[p].menuCode, menuList[p].parentMenuCode, menuList[p].showText, menuList[p].menuCode);
	}
	menu.expandAllFlag=false;//是否在加载时默认展开所有
	menu.URLProxy = "loadView";
	menu.RootNodeId = "0";//设置跟结点
	menu.openFirstLevelMenus=false;
	menu.generateMenu();//勾画菜单树
}
/**
 * 点击菜单后在iframe中加载目标页面
 * @returns
 */
function loadView(menuCode, _element){
	var url=null;
	if(menuMap[menuCode]){
		url=menuMap[menuCode].url;
	}
	else{
		return;
	}
	if(url.startsWith("http")){
		window.open(url);
		return;
	}
	/* var currentMenu=menuMap[menuCode];
	var positionHTMLString=currentMenu.showText;
	while(true){
		var parentCode=currentMenu.parentMenuCode;
		if(parentCode=="0"){
			break;
		}
		var currentMenu=menuMap[parentCode];
		if(currentMenu){
			positionHTMLString=currentMenu.showText+" >> " + positionHTMLString
		}
		else{
			break;
		}
	}
	$("currentPositionDiv").innerHTML="当前位置："+positionHTMLString; */
	
	let _oldelement = document.querySelector(".activeMenu");
	if(_oldelement){
		_oldelement.classList.remove("activeMenu");
	}
	_element.className="activeMenu";
	var containner = $("contentContainnerDiv");
	Server.loadResource(url, function(data){
		containner.innerHTML="";
		if(url.endsWith(".md")){
			containner.innerHTML = marked.parse(data);
			PR.prettyPrint();
		}
		else{
			function appendElements(_nodeArray, _targetParent){
				if(_nodeArray && _nodeArray.length>0){
					let s = _nodeArray.length ;
					for(let i=(s-1); i>=0; i--){
						if(_nodeArray[i].nodeName=="SCRIPT"){
							let _script=document.createElement("script");
							_script.type="text/javascript";
							if(_nodeArray[i].text){_script.text=_nodeArray[i].text;}
							if(_nodeArray[i].src){_script.src=_nodeArray[i].src;}
							_targetParent.appendChild(_script);
						}
						else if(_nodeArray[i].nodeName=="LINK"){
							let _link=document.createElement("link");
							_link.type="text/css";
							_link.href=_nodeArray[i].href;
							_link.rel=_nodeArray[i].rel;
							_targetParent.appendChild(_link);
						}
						else{
							_targetParent.appendChild(_nodeArray[i]);
						}
					}
				}
			};
			
			let htmlStringParser=new DOMParser();
			let _newDocument = htmlStringParser.parseFromString(data, "text/html");
			let _headsChilds=_newDocument.head.children;
			let _bodyChilds = _newDocument.body.children;
			appendElements(_headsChilds, containner);
			appendElements(_bodyChilds, containner);
		}
		containner.scrollTo({left: 0, top: 0, behavior: "smooth"});
	});
}
/**
 * 设置菜单显示状态
 * @returns
 */
var menuExpand=true;
function toggleMenu(){
	if(menuExpand){
		$("menuDiv").className="menuDivHidden";
		$("menuToggleDiv").className="showMenuIcon";
		$("menuToggleDiv").innerHTML="<div class='arrow arrow-right'></div>";
		$("workAreaDiv").className="workAreaDivMax";
		menuExpand=false;
	}
	else{
		$("menuDiv").className="menuDivShow";
		$("menuToggleDiv").className="hideMenuIcon";
		$("menuToggleDiv").innerHTML="<div class='arrow arrow-left'></div>";
		$("workAreaDiv").className="workAreaDivMin";
		menuExpand=true;
	}
}