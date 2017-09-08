'use strict';
$(function() {
	initBasicTbl1();
	
	//加载辽宁省地图
	initProvinceMap();
	//加载辽宁省地图
	initProvinceMap2();
})

var dataBusinessMgr = [
	{"id":"0000","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0001","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0002","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0003","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0004","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0005","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0006","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0007","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	{"id":"0008","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"}
];
function initBasicTbl1(){
	$('#basicTbl1').datagrid({
	    data:dataBusinessMgr,
	    columns:[[
	        {field:'id',title:'商机编号',width:'5%',sortable:true},
	        {field:'name',title:'商机名称',width:'10%'},
	        {field:'city',title:'地市编码',width:'10%',sortable:true},
	        {field:'cusId',title:'客户编码',width:'10%'},
	        {field:'cusName',title:'客户名称',width:'10%'},
	        {field:'industryType',title:'行业类型',width:'10%',sortable:true},
	        {field:'firstIndustry',title:'一级行业',width:'10%'},
	        {field:'secIndustry',title:'二级行业',width:'10%'},
	        {field:'progress',title:'周计划进展及问题',width:'10%'},
	        {field:'info',title:'信息内容',width:'15%',align:'right'}
	    ]]
	});
}


//加载辽宁省地图
function initProvinceMap() {
	var myChart = echarts.init(document.getElementById('chartMap'));
	myChart.showLoading();

	$.get('../../peacock/dist/lib/echarts/map/liaoning/liaoning.json', function (geoJson) {	
	    myChart.hideLoading();	
	    echarts.registerMap('LN', geoJson);
		var option = {
			title: {
		        subtext: '2017年9月7日 全省 全业务计费收入 \n\n本月累计：74，158（万元） 月环比：-0.26% \n\n变化量：-193（万元）',
		        subtextStyle: {
		        	width: 50,
		        	color: '#f8a211',
		        	lineHeight: 28
		        }
		   },
	        tooltip: {
	            trigger: 'item',
	            formatter: '{b}<br/>{c} (p / km2)'
	        },
	        visualMap: {
	            min: 0,
	            max: 20000,
	            text:['高','低'],
	            calculable: true,
	            inRange: {
	                color: ['#ffe7fd', '#ef6160']
	            }
	        },
	        series: [
	            {
	                name: '辽宁省全业务计费收入',
	                type: 'map',
	                mapType: 'LN', // 自定义扩展图表类型
	                itemStyle:{
	                    normal:{
	                    	label:{show:true},
	                    	borderColor: '#fff'
	                    }
	                },
	                data:[
	                	{name: '沈阳', value: 20000.00},
	                	{name: '锦州', value: 10057.34},
	                    {name: '阜新', value: 10057.34},
	                    {name: '铁岭', value: 15477.48},
	                    {name: '朝阳', value: 6686.1},
	                    {name: '大连', value: 992.6},
	                    {name: '葫芦岛', value: 0},
	                    {name: '营口', value: 10689.64},
	                    {name: '盘锦', value: 17659.78},
	                    {name: '鞍山', value: 5000.00},
	                    {name: '本溪', value: 0},
	                    {name: '抚顺', value: 11900.9},
	                    {name: '丹东', value: 4918.26},
	                    {name: '辽阳', value: 5881.84}
	                ]	    
	            }
	        ]
	   	};
	    myChart.setOption(option);
	});
	$(window).resize(function() {
		myChart.resize();
	})
}

//加载辽宁省地图
function initProvinceMap2() {
	var myChart = echarts.init(document.getElementById('chartMap2'));
	myChart.showLoading();

	$.get('../../peacock/dist/lib/echarts/map/liaoning/liaoning.json', function (geoJson) {	
	    myChart.hideLoading();	
	    echarts.registerMap('LN', geoJson);
		var option = {
			title: {
		        subtext: '2017年9月7日 全省 全业务计费收入 \n\n本月累计：74，158（万元） 月环比：-0.26% \n\n变化量：-193（万元）',
		        subtextStyle: {
		        	width: 50,
		        	color: '#f8a211',
		        	lineHeight: 28
		        },
		        top: -10
		   },
	        tooltip: {
	            trigger: 'item',
	            formatter: '{b}<br/>{c} (p / km2)'
	        },
	        dataRange: {
		        x: 'right',
		        y: 'bottom',
		        splitList: [
		            {start: 0.0115, label: '≥ 1.15%',},
		            {start: 0.007, end: 0.0115, label: '> 0.70%'},
		            {start: 0.00001, end: 0.007, label: '≤ 0.70%'},
		            {start: 0, end: 0,label: '= 0.00%'},
		            {start: -0.0067, end: -0.00001, label: '> -0.67%'},
		            {start: -0.0119, end: -0.0067,label: '> -1.19%'},
		            {end: -0.0119,label: '≤ -1.19%'}
		        ],
		        color: ['#d50833', '#ffbdb1', '#fdf54c', '#9cdc7e', '#669801']
		    },
	        series: [
	            {
	                name: '辽宁省全业务计费收入',
	                type: 'map',
	                mapType: 'LN', // 自定义扩展图表类型
	                itemStyle:{
	                    normal:{
	                    	label:{show:true},
	                    	borderColor: '#fff'
	                    }
	                },
	                data:[
	                	{name: '沈阳', value: 0.0686},
	                	{name: '锦州', value: 0.01},
	                    {name: '阜新', value: -0.0105},
	                    {name: '铁岭', value: 0.0047},
	                    {name: '朝阳', value: -0.0019},
	                    {name: '大连', value: 0.0113},
	                    {name: '葫芦岛', value: 0},
	                    {name: '营口', value: -0.018},
	                    {name: '盘锦', value: 0.0014},
	                    {name: '鞍山', value: -0.05},
	                    {name: '本溪', value: 0.0112},
	                    {name: '抚顺', value: -0.1199},
	                    {name: '丹东', value: 0.0046},
	                    {name: '辽阳', value: 0.0058}
	                ]	    
	            }
	        ]
	   	};
	    myChart.setOption(option);
	});
	$(window).resize(function() {
		myChart.resize();
	})
}
