#### 使用echats6.0绘制地图报表
```
地图数据下载地址：https://geojson.cn/
操作方法：在地图上双击要下载地图数据的地址，在数据类型的下拉框中选择"GeoJSON"，下载即可，例如杭州的地图数据：
https://geojson.cn/api/china/1.6.2/330000/330100.json
```
```
代码编写套路：
1、为echarts.js文件设置onload，当echarts.js加载完成后，开始绘制
2、在绘制函数中，加入同步等待地图的json文件的加载，加载完成后将其数据提取为json对象
	例如：const mapData = await fetch('./asserts/330100.geo.json').then((resp)=>resp.json());
3、获取每个具体地址的业务数据，例如：
	var bizData = [{"name":"上城区", "value":95325}, ...];
4、调用echats的系列函数完成绘制：设置用于展示地图的容器、注册地图数据、设置地图的绘制Option
```
<style>
	.geo{
		width:8rem;
		height:6rem;
		position:fixed;
		left:0;
		top:0;
	}
</style>
<script type="text/javascript" src="./javascript/components/echarts6/echarts.6.0.0.min.js" onload="draw();" defer></script>
<div class="geo"></div>

<script type="text/javascript">
var bizData = [
	{"name":"上城区", "value":95325},
	{"name":"拱墅区", "value":33123},
	{"name":"西湖区", "value":63548},
	{"name":"滨江区", "value":53525},
	{"name":"萧山区", "value":16612},
	{"name":"临平区", "value":35482},
	{"name":"钱塘区", "value":12364},
	{"name":"余杭区", "value":1551},
	{"name":"富阳区", "value":8651},
	{"name":"临安区", "value":7735},
	{"name":"建德市", "value":0},
	{"name":"淳安县", "value":0},
	{"name":"桐庐县", "value":0},
];
async function draw(){
	const myChart = echarts.init(document.querySelector(".geo"));//初始化，获得echart实例
	myChart.showLoading();
	//等待地图加载，加载完成后将其数据提取为json对象
	const mapData = await fetch('./asserts/330100.geo.json.js').then((resp)=>resp.json());
	echarts.registerMap('Hangzhou', mapData);
	myChart.setOption({
		title:{
			text : '业务规模' , //图表标题
		},
		//鼠标划过时弹出提示信息的模板
		tooltip:{formatter: '{b}：{c}'},
		visualMap:{
			//可视地图，一般用户设置不同颜色来展现数据的差异
			left:'left',//可视地图显示的位置
			top:'center',//可视地图显示的位置
			min:0,//区间的最小信
			max:100000,//区间数据的最大值
			text:['高','低'],// 文本，默认为数值文本
			calculable:true,//是否允许控制区间
			//按照业务数据量为各个业务单元区域着色的候选色
			inRange:{
				color:[
					'#313695',
					'#4575b4',
					'#74add1',
					'#abd9e9',
					'#e0f3f8',
					'#ffffbf',
					'#fee090',
					'#fdae61',
					'#f46d43',
					'#d73027',
					'#a50026',
				]
			},
		},
		series:[
			{
			type:'map',//图表类型:地图
			map:'Hangzhou',//使用注册的地图
			roam:true,//是否开启鼠标缩放和平移漫游
			scaleLimit:{
				//缩放比例控制
				min:0.7,//最小缩放到0.7倍
				max:3,//最大缩放到3倍
			},
			data: bizData,
			},
		]
	});
	myChart.hideLoading();
}
</script>
