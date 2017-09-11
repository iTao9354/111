
$(function() {	
	// 初始化饼图1
	initPerformContractPie1();
	// 初始化饼图2
	initPerformContractPie2();
	
	// 该档各地市完成情况
	completeBar();
	
	// 初始化“散点图”
	initScatterChart();
})


// 初始化饼图1 
// 假数据
var pieData = [
    {
    	value:301900, 
    	name:'家客', 
    	childrenPie: [
    		{
    			value:33200, 
    			name:'完成≥C档',
    			childrenBar: [1040, 2040, 3040, 1140, 5240, 3340, 4440, 2540, 1240, 2340, 3440, 4540, 5740]
    		},
	        {
	        	value:10200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        },
	        {
	        	value:23400, name:'完成≥B档',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        },
	        {
	        	value:5500, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
	        },
	        {
	        	value:74800, 
	        	name:'完成≥A档',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:154800, 
	        	name:'完成＜A档单元',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        }
    	],
    	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
    },
    {
    	value:161900, 
    	name:'维系',
    	childrenPie: [
    		{
    			value:1100, name:'完成≥C档',
    			childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
    		},
	        {
	        	value:22200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [1040, 2040, 3040, 1140, 5240, 3340, 4440, 2540, 1240, 2340, 3440, 4540, 5740]
	        },
	        {
	        	value:24400, 
	        	name:'完成≥B档',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:6500, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        },
	        {
	        	value:87900, 
	        	name:'完成≥A档',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        },
	        {
	        	value:19800, 
	        	name:'完成＜A档单元',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        }
    	],
    	childrenBar: [2020, 3020, 4020, 2120, 3220, 2320, 3420, 1520, 3220, 5320, 3420, 5520, 3720]
    },
    {
    	value:336100, 
    	name:'渠道',
    	childrenPie: [
    		{
    			value:22200, name:'完成≥C档',
    			childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
    		},
	        {
	        	value:65200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
	        },
	        {
	        	value:74400, 
	        	name:'完成≥B档',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:65400, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        },
	        {
	        	value:8900, 
	        	name:'完成≥A档',
	        	childrenBar: [3920, 1920, 2920, 3120, 4920, 2320, 4420, 5520, 5920, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:100000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [5020, 5320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        }
    	],
    	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
    },
    {
    	value:187100, 
    	name:'大客户',
    	childrenPie: [
    		{
    			value:12200, 
    			name:'完成≥C档',
    			childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
    		},
	        {
	        	value:6200, name:'B≤完成<C档',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        },
	        {
	        	value:54400, 
	        	name:'完成≥B档',
	        	childrenBar: [3020, 1320, 2020, 2620, 2320, 3320, 4720, 5820, 5220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:65400, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
	        },
	        {
	        	value:38900, 
	        	name:'完成≥A档',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        },
	        {
	        	value:10000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        }
    	],
    	childrenBar: [5020, 4020, 3020, 2120, 1220, 2320, 2420, 5520, 3220, 2320, 5420, 2520, 1720]
    },
    {
    	value:163000, 
    	name:'营业',
    	childrenPie: [
    		{
    			value:11100, 
    			name:'完成≥C档',
    			childrenBar: [4020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
    		},
	        {
	        	value:2200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:74400, 
	        	name:'完成≥B档',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:6400, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        },
	        {
	        	value:38900, 
	        	name:'完成≥A档',
	        	childrenBar: [3820, 1820, 2820, 2820, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:30000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        }
    	],
    	childrenBar: [5011, 4011, 1120, 2110, 1120, 1120, 2420, 5520, 4520, 3220, 5520, 5520, 4720]
    },
    {
    	value:426200, 
    	name:'商企',
    	childrenPie: [
    		{
    			value:92200, name:'完成≥C档',
    			childrenBar: [3020, 2320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
    		},
	        {
	        	value:35200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:54400, 
	        	name:'完成≥B档',
	        	childrenBar: [1120, 2120, 3120, 1220, 2320, 3420, 4520, 5620, 1320, 2420, 3520, 4620, 5820]
	        },
	        {
	        	value:75400, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [5020, 5320, 4020, 3420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:89000, 
	        	name:'完成≥A档',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:80000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        }
    	],
    	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
    },
    {
    	value:308600, 
    	name:'乡镇',
    	childrenPie: [
    		{
    			value:92200, name:'完成≥C档',
    			childrenBar: [1420, 520, 3920, 2100, 2920, 390, 5920, 3520, 2220, 5320, 2420, 2520, 3720]
    		},
	        {
	        	value:15200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:24400, 
	        	name:'完成≥B档',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        },
	        {
	        	value:63400, name:'A≤完成＜B档',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:8400, 
	        	name:'完成≥A档',
	        	childrenBar: [5020, 1320, 2020, 2420, 2320, 3320, 5420, 5520, 2220, 5320, 5420, 3520, 1620]
	        },
	        {
	        	value:105000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
	        }
    	],
    	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
    },
    {
    	value:246900, 
    	name:'校园',
    	childrenPie: [
    		{
    			value:22000, 
    			name:'完成≥C档',
    			childrenBar: [2020, 4320, 3020, 5120, 1230, 732, 2420, 5420, 5220, 2420, 5320, 3520, 4520]
    		},
	        {
	        	value:5200, 
	        	name:'B≤完成<C档',
	        	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
	        },
	        {
	        	value:70400, 
	        	name:'完成≥B档',
	        	childrenBar: [1020, 4320, 3420, 2120, 2220, 4320, 5420, 3520, 2220, 5320, 2420, 2520, 3720]
	        },
	        {
	        	value:45400, 
	        	name:'A≤完成＜B档',
	        	childrenBar: [5020, 1320, 2020, 2420, 4320, 2320, 4420, 5520, 2220, 2320, 5420, 3520, 1620]
	        },
	        {
	        	value:83900, name:'完成≥A档',
	        	childrenBar: [3020, 1920, 2920, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
	        },
	        {
	        	value:20000, 
	        	name:'完成＜A档单元',
	        	childrenBar: [3020, 1320, 2020, 2420, 2320, 3320, 5420, 5520, 2220, 2320, 5420, 3520, 1620]
	        }
    	],
    	childrenBar: [3020, 1020, 2020, 3120, 4220, 2320, 4420, 5520, 5220, 2320, 3420, 5520, 2720]
    }
];
// 第二个饼图默认为第一个饼图不区分专业线的各档总完成情况
var pieData2 = [
	{
		value:39600, 
		name:'完成≥C档', 
		childrenBar: [1000, 2000, 3000, 1100, 2200, 3300, 4400, 5500, 1200, 2300, 3400, 4500, 5700]
	},
    {
    	value:50900, 
    	name:'B≤完成<C档',
    	childrenBar: [2010, 3010, 4010, 2110, 3210, 4310, 5410, 5510, 1210, 3310, 4410, 5510, 5710]
    },
    {
    	value:42200, 
    	name:'完成≥B档',
    	childrenBar: [2020, 3020, 2020, 5120, 2220, 3320, 420, 2520, 3220, 3320, 1420, 5520, 5720]
    },
    {
    	value:43500, 
    	name:'A≤完成＜B档',
    	childrenBar: [5030, 2030, 2030, 1130, 2230, 2330, 3430, 5530, 1230, 2330, 3430, 4530, 4730]
    },
    {
    	value:44800, 
    	name:'完成≥A档',
    	childrenBar: [1040, 2040, 3040, 1140, 5240, 3340, 4440, 2540, 1240, 2340, 3440, 4540, 5740]
    },
    {
    	value:46100, 
    	name:'完成＜A档单元',
    	childrenBar: [1050, 2050, 4050, 1150, 2250, 3350, 4450, 4550, 1250, 2350, 3450, 4550, 5750]
    }
];

/**
 * 柱状图默认是总档下各地市完成情况
 * 一、当鼠标只划入第一个饼图，则第二个饼图变为该专业线下各档完成情况，柱状图变为该专业线下总档的各地市完成情况
 * 二、当鼠标划入第一个饼图，第二个饼图变为该专业线下各档完成情况，紧接着鼠标划入第二个饼图的某档，则柱状图变为该专业线下该档的各地市完成情况
 * 三、当鼠标不划入第一个饼图，直接划到第二个饼图的某当上即不区分专业线的各档总完成情况，此时柱状图变为不区分专业线下该档的各地市完成情况
 * **/
var barData = [1500, 2000, 3600, 5000, 2000, 5600, 1000, 4000, 2000, 5900, 1500, 1000, 2000];


function initPerformContractPie1() {
	
	var myChart = echarts.init(document.getElementById('performContractPie1'));

    // 指定图表的配置项和数据
    var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'center',
	        width: 180,
	        orient: 'horizontal',
	        data:['家客','维系','渠道','大客户','营业', '商企', '乡镇', '校园']
	    },
	    graphic:{
            type:'text',
            left:'center',
            top:'60%',
            style:{
                text: peacock.sum(pieData),
                textAlign:'center',
                fill:'#3e3e3e',
                font: '22px "微软雅黑"'
            },
            onclick: function() {
            	alert('总量为'+peacock.sum(pieData))
            }
        },
        color: ['#90c8af', '#d58264', '#5bb0f0', '#ffb880', '#d97a80', '#97b553', '#e6cf0d', '#f0fbc3'],
	    series: [
	        {
	            name:'专业线',
	            type:'pie',
	            center: ['50%', '62%'],
	            radius: ['35%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: true,
	                    formatter: '{b}'
	                },
	                emphasis: {
	                    show: true,
	                    position : 'center',
	                    textStyle: {
	                        fontSize: '20',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: true
	                }
	            },
	            data: pieData
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
    
    //添加点击事件（单击），还有其他鼠标事件和键盘事件等等
    myChart.on("mouseover", function (param){    
    	// 第二个饼图联动
		pieData2 = pieData[param.dataIndex].childrenPie;
		initPerformContractPie2();
		
		// 柱状图联动
		barData = pieData[param.dataIndex].childrenBar;
		completeBar();
    });
}

// 初始化饼图2
function initPerformContractPie2() {
	
	var myChart = echarts.init(document.getElementById('performContractPie2'));

    // 指定图表的配置项和数据
    var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'center',
	        width: 210,
	        orient: 'horizontal',
	        data:['完成≥C档','B≤完成<C档','完成≥B档','A≤完成＜B档','完成≥A档', '完成＜A档单元']
	    },
	    graphic:{
            type:'text',
            left:'center',
            top:'60%',
            style:{
                text: peacock.sum(pieData2),
                textAlign:'center',
                fill:'#3e3e3e',
                font: '22px "微软雅黑"'
            },
            onclick: function() {
            	alert('总量为'+peacock.sum(pieData))
            }
        },
        color: ['#90c8af', '#d58264', '#5bb0f0', '#ffb880', '#d97a80', '#97b553', '#e6cf0d', '#f0fbc3'],
	    series: [
	        {
	            name:'某档',
	            type:'pie',
	            center: ['50%', '62%'],
	            radius: ['35%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: true,
	                    formatter: '{b}'
	                },
	                emphasis: {
	                    show: true,
	                    position : 'center',
	                    textStyle: {
	                        fontSize: '20',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: true
	                }
	            },
	            data: pieData2
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
    
    //添加点击事件（单击），还有其他鼠标事件和键盘事件等等
    myChart.on("mouseover", function (param){    		
		// 柱状图联动
		barData = pieData2[param.dataIndex].childrenBar;
		completeBar();
    });
}


// 该档各地市完成情况
function completeBar() {
	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('completeChart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '该档各地市值变化趋势图',
            textStyle: {
            	fontSize: 14,
            	fontWeight: 'normal'
            },
            x: 'center'
        },
        tooltip: {},
        xAxis: {
        	axisLine: {
        		lineStyle: {
        			color: '#c7c7c7'
        		}
        	},
        	axisLabel: {
        		rotate: 45
        	},
        	axisTick: {
        		show: false
        	},
            data: ["朝阳","阜新","铁岭","沈阳","锦州","葫芦岛", "营口", "鞍山", "辽阳", "本溪", "丹东", "大连", "盘锦"]
        },
        yAxis: {
        	max: 6000,
        	interval: 1000,
        	axisLine: {
        		lineStyle: {
        			color: '#c7c7c7',
        			width: 2
        		}
        	},
        	axisTick: {
        		show: false
        	},
        	splitLine: {
        		lineStyle: {
        			opacity: 0.2
        		}
        	}
        },
        series: [{
            name: '销量',
            type: 'bar',
            barWidth: 20,                
            itemStyle: {
            	normal: {
            		color: '#ffa992'
            	}
            },                
            data: barData
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
}


// 散点图
function initScatterChart() {
	var hours = ['完成＜A档单元', '完成≥A档', 'A≤完成＜B档', '完成≥B档', 'B≤完成<C档', '完成≥C档'];
	var days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];	
	var data = [[0,0,5],[0,1,3],[0,2,0],[0,3,4],[0,4,0],[0,5,6],[1,0,7],[1,1,2],[1,2,3],[1,3,0],[1,4,0],[1,5,0],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,5],[3,0,7],[3,1,3],[3,2,4],[3,3,2],[3,4,1],[3,5,0],[4,0,1],[4,1,3],[4,2,0],[4,3,2],[4,4,0],[4,5,4],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[6,0,1],[6,1,0],[6,2,0],[6,3,5],[6,4,4],[6,5,0]];
	
	var myChart = echarts.init(document.getElementById('scatterChart'));

    // 指定图表的配置项和数据
    var option = {
	    tooltip: {
	        position: 'top'
	    },
	    title: [],
	    singleAxis: [],
	    series: []
	};
	
	echarts.util.each(days, function (day, idx) {
	    option.title.push({
	        textBaseline: 'middle',
	        top: (idx + 0.5) * 100 / 7 -5 + '%',
	        text: day,
	        textStyle: {
	        	color: '#898c92',
	        	fontWeight: 'normal'
	        }
	    });
	    option.singleAxis.push({
	        left: 150,
	        type: 'category',
	        boundaryGap: false,
	        data: hours,
	        top: (idx * 100 / 7 + 5) + '%',
	        height: (100 / 7 - 15) + '%',
	        axisLine: {
	        	lineStyle: {
	        		width: 1,
	        		color: '#898c92'
	        	}
	        },
	        axisTick: {
        		lineStyle: {
	        		width: 1
	        	}
        	}
	    });
	    option.series.push({
	        singleAxisIndex: idx,
	        coordinateSystem: 'singleAxis',
	        type: 'scatter',
	        data: [],
	        symbolSize: function (dataItem) {
	            return dataItem[1] * 4;
	        }
	    });
	});
	
	echarts.util.each(data, function (dataItem) {
	    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
	});

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
    
    //添加点击事件（单击），还有其他鼠标事件和键盘事件等等
    myChart.on("click", function (param){    		
		$('.row1').slideUp(600, function() {
			$('.cm-toTop').show();
		});
		$('body').css('overflow-y','hidden');
		$('.row3').show();
		
		console.log(param.dataIndex);
    });
}

// 点击回到顶部，饼图和柱状图拉下
function backToTop() {
	$('.row1').slideDown(600, function() {		
		$('.row3, .cm-toTop').hide();
		$('body').css('overflow-y','auto');
	});
}
