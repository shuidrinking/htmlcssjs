#### 用echats6.0实现dashboard的样例

<script src="./javascript/components/echarts6/echarts.6.0.0.min.js" onload="draw();" defer></script>

<div id="statisticImage0" style="width: 600px;height:300px;"></div>
<div id="statisticImage1" style="width: 400px;height:300px;"></div>
<div id="statisticImage3" style="width: 400px;height:300px;"></div>
<div id="statisticImage2" style="width: 300px;height:300px;"></div>

<script type="text/javascript">
	function draw(){
		let myChart0 = echarts.init(document.querySelector('#statisticImage0'));
		let option0 = {
			title: {
				text: '本月订单快照'
			},
			tooltip: {
				feature: {
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			legend: {
				bottom:5,
				data: ['订单金额', '订单数量']
			},
			xAxis: {
				data: ['总销售订单', '已收款订单', '收款在途订单', '售后订单'],
				axisLabel: { interval: 0, rotate: 30 }
			},
			yAxis: [
				{
					type: 'value',
					name: '订单金额',
					position: 'left',
					alignTicks: true,
					axisLine: {
						show: true,
						lineStyle: {
							color: "orange"
						}
					},
					axisLabel: {
						formatter: '{value} 元'
					}
				},
				{
					type: 'value',
					name: '订单数量',
					position: 'right',
					alignTicks: true,
					offset: 0,
					axisLine: {
						show: true,
						lineStyle: {
							color: "#4888f7"
						}
					},
					axisLabel: {
						formatter: '{value} 单'
					}
				}
			],
			series: [
				{
					name: '订单金额',
					type: 'bar',
					showBackground: true,
					yAxisIndex: 0,
					label:{
						show:true,
						position:"top"
					},
					itemStyle:{
						color:"orange",
						borderRadius:[4, 4, 0, 0]
					},
					data: [88888, 79529, 6357, 369]
				},
				{
					name: '订单数量',
					type: 'bar',
					yAxisIndex: 1,
					backgroundStyle: {
						color: '#f0f0f0'
					},
					itemStyle:{
						color:"#4888f7",
						borderRadius:[4, 4, 0, 0]
					},
					label:{
						show:true,
						position:"top"
					},
					data: [
						608, 596, 12, 2
					]
				}
			]
		};
		let myChart1 = echarts.init(document.querySelector('#statisticImage1'));
		let option1 = {
			title: {
				text: '当月销量及库存快照'
			},
			tooltip: {
				feature: {
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			legend: {
				data: ['当月销量', '当前库存']
			},
			xAxis: {
				data: ['苹果', '三星', '索尼', '华为', '小米', 'vivo']
			},
			yAxis: [
				{
					type: 'value',
					name: '件数',
					position: 'left',
					alignTicks: true,
					axisLine: {
						show: true,
						lineStyle: {
							color: "#d3d3d3"
						}
					},
					axisLabel: {
						formatter: '{value} 件'
					}
				},
			],
			series: [
				{
					name: '当月销量',
					type: 'bar',
					label:{
						show:true,
						position:"top"
					},
					itemStyle:{
						borderRadius:[4, 4, 0, 0]
					},
					data: [265, 180, 99, 59, 38, 20]
				},
				{
					name: '当前库存',
					type: 'bar',
					/* showBackground: true, */
					label:{
						show:true,
						position:"top"
					},
					itemStyle:{
						color:"#00a756",
						borderRadius:[4, 4, 0, 0]
					},
					backgroundStyle: {
						color: 'rgba(180, 180, 180, 0.2)'
					},
					data: [
						125, 426, 635, 825, 671, 681
					]
				}
			]
		};
		
		let myChart2 = echarts.init(document.querySelector('#statisticImage2'));
		let option2 = {
			series: [
			{
				type: 'gauge',
				max:26,
				colorBy:"series",
				splitNumber:4,
				axisLine: {
				lineStyle: {
					width: 10,
					color: [
					[0.3, '#67e0e3'],
					[0.7, '#37a2da'],
					[1, '#fd666d']
					]
				}
				},
				pointer: {
					itemStyle: {
						color: 'auto'
					}
				},
				axisTick: {
					distance: -10,
					length: 8,
					lineStyle: {
						color: '#fff',
						width: 2
					}
				},
				splitLine: {
					distance: -30,
					length: 30,
					lineStyle: {
						color: '#fff',
						width: 4
					}
				},
				axisLabel: {
					color: 'inherit',
					distance: 20,
					fontSize: 16
				},
				detail: {
					valueAnimation: true,
					formatter: '{value} 万元',
					color: 'inherit',
					fontSize:16
				},
				data: [
				{
					name:"本月完成销售业绩",
					color: "#ff0000",
					value: 8.8,
					fontSize: 16
				}
				]
			}
			]
		};
		
		let myChart3 = echarts.init(document.querySelector('#statisticImage3'));
		let option3 = {
			title: {
				text: '本年累计销量'
			},
			tooltip: {
				feature: {
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			legend: {},
			xAxis: {
				data: ['苹果', '三星', '索尼', '华为', '小米', 'vivo']
			},
			yAxis: [
				{
					type: 'value',
					name: '件数',
					position: 'left',
					alignTicks: true,
					axisLine: {
						show: true,
						lineStyle: {
							color: "#d3d3d3"
						}
					},
					axisLabel: {
						formatter: '{value} 件'
					}
				}
			],
			series: [
				{
					name: '本年累计销量',
					showBackground: true, 
					type: 'bar',
					label:{
						show:true,
						position:"top"
					},
					itemStyle:{
						borderRadius:[4, 4, 0, 0]
					},
					data: [1562, 399, 162, 2637, 698, 1063]
				}
			]
		};
		
		myChart0.setOption(option0);
		myChart1.setOption(option1);
		myChart2.setOption(option2);
		myChart3.setOption(option3);
	}
</script>