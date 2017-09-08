'use strict';

$(function() {	
	// 初始化饼图1
	initPerformContractPie1();
	
	// 初始化薪酬总额柱状图
	paymentSumBar();
	
	// 初始化“专业线薪酬总额占比图”
	paymentSumProportionPie();
	
	// 初始化地市专业线趋势图
	areaProfessionalLineTrend();
})


// 初始化饼图1
function initPerformContractPie1() {
	var myChart = echarts.init(document.getElementById('performContractPie1'));

    // 指定图表的配置项和数据
    var option = {
	    title : {
	        text: '某站点用户访问来源',
	        subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
}

// 初始化薪酬总额柱状图
function paymentSumBar() {
	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('paymentSumChart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '薪酬总额',
            textStyle: {
            	fontSize: 12,
            	fontWeight: 'normal'
            },
            left: '10%',
            top: 35
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
        	max: 60,
        	interval: 10,
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
            data: [15, 20, 36, 5, 20, 56, 10, 40, 20, 59, 15, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
}


// 初始化“专业线薪酬总额占比图”
function paymentSumProportionPie() {
	var myChart = echarts.init(document.getElementById('paymentSumProportionChart'));

    // 指定图表的配置项和数据
    var option = {
	    title : {
	        text: '专业线薪酬总额占比情况',
	        textStyle: {
            	fontSize: 12,
            	fontWeight: 'normal'
            },
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },	    
	    calculable : true,
	    color: ['#2ec8ca', '#b6a2df', '#5bb0f0', '#ffb880', '#d97a80', '#8d99b3', '#e6cf0d', '#97b553'],
	    series : [
	        {
	            name:'薪酬总额占比',
	            type:'pie',
	            radius : [30, 110],
	            roseType : 'area',
	            data:[
	                {value:10, name:'家客'},
	                {value:5, name:'设备维护'},
	                {value:15, name:'乡镇'},
	                {value:25, name:'大客户'},
	                {value:20, name:'渠道'},
	                {value:35, name:'客户响应'},
	                {value:30, name:'商企'},
	                {value:40, name:'营业'}
	            ]
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
}

// 初始化地市专业线趋势图
function areaProfessionalLineTrend() {
	var myChart = echarts.init(document.getElementById('areaProfessionalLineTrendChart'));

    // 指定图表的配置项和数据
    var option = {
	    title : {
	        text: '近一年地市专业线趋势图',
	        textStyle: {
            	fontSize: 12,
            	fontWeight: 'normal'
            },
	        x:'center'
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	    	right: '10%',
	    	top: '5%',
	        data:['薪酬总额']
	    },
	    xAxis:  {	    	
	        type: 'category',
	        boundaryGap: false,
	        splitLine: {
        		show: true,
        		lineStyle: {
        			color: '#c7c7c7'
        		}
        	},
        	axisLine: {
        		lineStyle: {
        			color: '#c7c7c7'
        		}
        	},
	        data: (function (){
                var now = new Date();
                var res = [];
                var len = 12;
                while (len--) { 
                	if((now.getMonth()+1+len)%12 > 0) {       
                		if((now.getMonth()+1+len)%12 == 1) 
                			res.unshift('01\n\n'+now.getFullYear()+'年');
                		else
	                		res.unshift(peacock.toDouble((now.getMonth()+1+len)%12));                			
                	}else {      
                		res.unshift(peacock.toDouble(now.getMonth()+1+len)+'\n\n'+(now.getFullYear()-1)+'年'); 
                	}                	
                }
                return res;
            })()
	    },
	    yAxis: {
	        type: 'value',
	        min: 60,
	        max: 90,
	        axisLabel: {
	            formatter: '{value} M'
	        },
	        splitLine: {
        		lineStyle: {
        			color: '#c7c7c7'
        		}
        	},
        	axisLine: {
        		lineStyle: {
        			color: '#c7c7c7'
        		}
        	},
	    },
	    series: [{
            name:'薪酬总额',
            type:'line',
            symbol: 'image://img/circle.png',
            symbolSize : 16,
            itemStyle: {
            	normal: {
            		color: '#fe7e4d'
            	}
            },
            data:[81, 88, 85, 73, 62, 73, 78, 60, 80, 70, 60, 80]
	    }]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 自适应
    $(window).resize(function() {
    	myChart.resize();
    })
}
