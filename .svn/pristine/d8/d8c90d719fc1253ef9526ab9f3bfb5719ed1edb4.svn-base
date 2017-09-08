// 树状下拉框数据
var ztreeData = [
    {"nodeTypeId":0,"tenantId":"admin","orgId":"root","parentId":null,"path":"/root","ord":1,"orgName":"北京分公司"},
    {"nodeTypeId":0,"tenantId":"admin","orgId":"xicheng","parentId":"root","path":"/root/xicheng","ord":1,"orgName":"西城区"},
    	    {"nodeTypeId":1,"tenantId":"admin","orgId":"testOrg003","parentId":"xicheng","path":"/root/xicheng/testOrg003","ord":1,"orgName":"testName003"},
            {"nodeTypeId":1,"tenantId":"admin","orgId":"xc01","parentId":"xicheng","path":"/root/xicheng/xc01","ord":1,"orgName":"西城区01"},
            {"nodeTypeId":1,"tenantId":"admin","orgId":"testOrg002","parentId":"xicheng","path":"/root/xicheng/testOrg002","ord":1,"orgName":"testName002"},
            {"nodeTypeId":1,"tenantId":"admin","orgId":"xc02","parentId":"xicheng","path":"/root/xicheng/xc02","ord":2,"orgName":"西城区02"},
            {"nodeTypeId":0,"tenantId":"admin","orgId":"dongcheng","parentId":"root","path":"/root/dongcheng","ord":2,"orgName":"东城区"},
            {"nodeTypeId":1,"tenantId":"admin","orgId":"xc03","parentId":"xicheng","path":"/root/xicheng/xc03","ord":3,"orgName":"西城区03"},
            {"nodeTypeId":0,"tenantId":"admin","orgId":"haidian","parentId":"root","path":"/root/haidian","ord":3,"orgName":"海淀区"},
            {"nodeTypeId":0,"tenantId":"admin","orgId":"chaoyang","parentId":"root","path":"/root/chaoyang","ord":4,"orgName":"朝阳区"}
];
// 树状下拉框的配置
var ztreeOption = {
	id: 'orgId',
	pId: 'parentId',
	name: 'orgName',
	flag: false
};

var tbl1= {
	data:[
	    {"productid":"收入类","productname":"全业务计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"},
	    {"productid":"收入类","productname":"移动网计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"},
	    {"productid":"收入类","productname":"固网计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"},
	    {"productid":"收入类2","productname":"全业务计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"},
	    {"productid":"收入类2","productname":"移动网计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"},
	    {"productid":"收入类2","productname":"固网计费收入","unit":"万元","curValue":'1,991.16',"dateRing":"6.69%","monthGrowth":"-12.08%","yestVal":"1,86.26","beforeYestVal":"1926.47","monthAccu":"95,880.04","accuRing":"-0.19%"}
    ],
	init:function(){
		$('#tbl1').datagrid({
		    data:tbl1.data,
	    	scrollbarSize:10,
	    	singleSelect:true,
            collapsible:true,
            rownumbers:true,
            fit:true,
            pagination:false,
            view:groupview,
            groupField:'productid',
            groupFormatter:function(value,rows){
                return value;
            },
		    columns:[[
		        {field:'productname',title:'指标名称',width:'20%'},
		        {field:'unit',title:'单位',width:'10%'},
		        {field:'curValue',title:'当日值',width:'10%'},
		        {field:'dateRing',title:'日环比',width:'10%'},
		        {field:'monthGrowth',title:'月同比',width:'10%'},
		        {field:'yestVal',title:'昨日值',width:'10%'},
		        {field:'beforeYestVal',title:'前日值',width:'10%'},
		        {field:'monthAccu',title:'当月累计',width:'10%'},
		        {field:'accuRing',title:'累计环比',width:'10%'}	        
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
		{"id":"0026","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"}
	],
	formatBusinessName:function(val,row){
		return '<span class="clicktoSeeBusiness cm-a">' +val+ '</span>'
	},
	init:function(){
		$('#tbl2').datagrid({
		    data:tbl2.data,
		    fit:true,
	    	scrollbarSize:10,
	    	pagination:true,
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
	// 加载部门下拉框树
	peacock.initDownTree('downTree', ztreeData, ztreeOption);
	
	peacock.initDatepicker();
	
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
