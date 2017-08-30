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
function formatBusinessName(val,row){
	return '<span class="clicktoSeeBusiness cm-a">' +val+ '</span>'
}

function initTbl1(){
	$('#tbl1').datagrid({
	    data:dataBusinessMgr,
	    columns:[[
	        {field:'id',title:'商机编号',width:'5%',sortable:true},
	        {field:'name',title:'商机名称',width:'10%',formatter:formatBusinessName},
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
$(function(){
	peacock.initCommonSelect();
	initTbl1();
	$(window).resize(function(){
		$('#tbl1').datagrid('resize');
	});
});
