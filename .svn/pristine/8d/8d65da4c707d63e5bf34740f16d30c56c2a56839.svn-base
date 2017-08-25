var tbl1= {
	data:[
	    {"productid":"FI-SW-01","productname":"Koi","unitcost":10.00,"status":"P","listprice":36.50,"attr1":"Large","itemid":"EST-1"},
	    {"productid":"K9-DL-01","productname":"Dalmation","unitcost":12.00,"status":"P","listprice":18.50,"attr1":"Spotted Adult Female","itemid":"EST-10"},
	    {"productid":"RP-SN-01","productname":"Rattlesnake","unitcost":12.00,"status":"P","listprice":38.50,"attr1":"Venomless","itemid":"EST-11"},
	    {"productid":"RP-SN-01","productname":"Rattlesnake","unitcost":12.00,"status":"P","listprice":26.50,"attr1":"Rattleless","itemid":"EST-12"},
	    {"productid":"RP-LI-02","productname":"Iguana","unitcost":12.00,"status":"P","listprice":35.50,"attr1":"Green Adult","itemid":"EST-13"},
	    {"productid":"FL-DSH-01","productname":"Manx","unitcost":12.00,"status":"P","listprice":158.50,"attr1":"Tailless","itemid":"EST-14"},
	    {"productid":"FL-DSH-01","productname":"Manx","unitcost":12.00,"status":"P","listprice":83.50,"attr1":"With tail","itemid":"EST-15"},
	    {"productid":"FL-DLH-02","productname":"Persian","unitcost":12.00,"status":"P","listprice":23.50,"attr1":"Adult Female","itemid":"EST-16"},
	    {"productid":"FL-DLH-02","productname":"Persian","unitcost":12.00,"status":"P","listprice":89.50,"attr1":"Adult Male","itemid":"EST-17"},
	    {"productid":"AV-CB-01","productname":"Amazon Parrot","unitcost":92.00,"status":"P","listprice":63.50,"attr1":"Adult Male","itemid":"EST-18"}
    ],
	init:function(){
		$('#tbl1').datagrid({
		    data:tbl1.data,
	    	scrollbarSize:10,
	    	singleSelect:true,
            collapsible:true,
            rownumbers:true,
            fit:true,
            view:groupview,
            groupField:'productid',
            groupFormatter:function(value,rows){
                return value + ' - ' + rows.length + ' Item(s)';
            },
		    columns:[[
		        {field:'itemid',title:'项目名称',width:'20%'},
		        {field:'productid',title:'产品名称',width:'40%'},
		        {field:'listprice',title:'定价',width:'10%',align:'right'},
		        {field:'unitcost',title:'成本',width:'10%',align:'right'},
		        {field:'attr1',title:'属性',width:'10%'},
		        {field:'status',title:'型号',width:'10%',align:'center'}
		        
		    ]]
		});
	}
};

var myChart = {
	init:function(){
		var option = {
		    color:['#bea6f2','#04d88c'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['本月','上月'],
		        bottom:0
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        top:'2%',
		        bottom: '8%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        axisLabel:{
		            color:'#777'
		        },
		        axisLine:{
		            lineStyle:{
		                color:'#cccccc'
		            }
		        },
		        data: ['01日','02日','03日','04日','5日','06日','07日']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel:{
		            color:'#757d8a'
		        },
		        axisLine:{
		            lineStyle:{
		                color:'#cccccc'
		            }
		        },
		        splitLine:{
		            lineStyle:{
		                color:'#e1e1e1'
		            }
		        }
		    },
		    series: [
		        {
		            name:'本月',
		            type:'line',
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		         {
		            name:'上月',
		            type:'line',
		            data:[10, 12, 30, 34, 60, 60, 20]
		        }
		    ]
		};
		var myChart = echarts.init(document.getElementById('chart1'));
		// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        return myChart;
	}
};

var tbl2 = {
	data:[
		{"id":"0000","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0001","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0002","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0003","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0004","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0005","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0006","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0007","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0008","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0009","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0010","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0011","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0012","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0013","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0014","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0015","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0016","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0017","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0018","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0019","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0020","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0021","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0022","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0023","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0024","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0025","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
		{"id":"0026","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
	],
	formatBusinessName:function(val,row){
		return '<span class="clicktoSeeBusiness cm-a">' +val+ '</span>'
	},
	init:function(){
		$('#tbl2').datagrid({
		    data:tbl2.data,
		    fit:true,
	    	scrollbarSize:10,
		    columns:[[
		        {field:'id',title:'商机编号',width:'5%',sortable:true},
		        {field:'name',title:'商机名称',width:'10%',formatter:tbl2.formatBusinessName},
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
};

//美化滚动条
function addNiceScroll(){
	//$('body').niceScroll({cursorcolor:"#ddd",cursorwidth: "5px",cursorborder:"none"});
}

//绑定tab切换事件
function bindPanelChange(){
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  var thisDom = $(this);
	  var idx = thisDom.attr('aria-controls');
	  
	});
}

$(function(){
	peacock.initCommonSelect();
	tbl1.init();
	var chartObj = myChart.init();
	tbl2.init();
	addNiceScroll();
	bindPanelChange();
	$(window).resize(function(){
		$('#tbl1').datagrid('resize');
		chartObj.resize();
		$('#tbl2').datagrid('resize');
	});
});
