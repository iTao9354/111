'use strict';

$(function() {
	// 加载流转日志状态表
	initDraftTbl();
	initApproveTbl();
	initDistributeTbl();
	initFeedbackTbl();
	initEvaluateTbl();
	initConcludeTbl();
	
	// 流转日志状态选项卡
	flowLogTab();
	
	// 查看全部流转日志
	initAllFlowLog();
	
	// 初始化阅知信息表
	initReadInfoTbl();
})

// 加载流转日志状态表
var flowLogObj = {
	draft: [
		{"id":1,"state":1,"name":"起草","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	],
	approve: [
		{"id":2,"state":1,"name":"审批","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	],
	distribute: [
		{"id":3,"state":0,"name":"派发","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	],
	feedback: [
		{"id":4,"state":0,"name":"反馈","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	],
	evaluate: [
		{"id":5,"state":0,"name":"评价","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	],
	conclude: [
		{"id":6,"state":0,"name":"办结","time":"2017-09-04 09:00","process":"宋志杰-->宋志杰","nodeTime":"0.08","charger":"宋志杰","department":"企业发展部","position":"综服中心总经理（省）","options":"审批通过"}
	]
};
var flowLogColumn = [
    {field:'id',title:'节点',width:'7%', align: 'center'},
    {field:'name',title:'状态',width:'8%', align: 'center'},
    {field:'time',title:'记录时间',width:'15%', align: 'center'},
    {field:'process',title:'处理过程',width:'15%', align: 'center'},
    {field:'nodeTime',title:'节点环节时间',width:'10%', align: 'center'},
    {field:'charger',title:'责任人',width:'10%', align: 'center'},
    {field:'department',title:'责任人部门',width:'10%', align: 'center'},
    {field:'position',title:'责任人岗位',width:'15%', align: 'center'},
    {field:'options',title:'处理意见',width:'10%', align: 'center'}
];
function initDraftTbl(){
	$('#draftTbl').datagrid({
	    data: flowLogObj.draft,
	    columns:[flowLogColumn]
	});
}
function initApproveTbl(){
	$('#approveTbl').datagrid({
	    data: flowLogObj.approve,
	    columns:[flowLogColumn]
	});
}
function initDistributeTbl(){
	$('#distributeTbl').datagrid({
	    data: flowLogObj.distribute,
	    columns:[flowLogColumn]
	});
}
function initFeedbackTbl(){
	$('#feedbackTbl').datagrid({
	    data: flowLogObj.feedback,
	    columns:[flowLogColumn]
	});
}
function initEvaluateTbl(){
	$('#evaluateTbl').datagrid({
	    data: flowLogObj.evaluate,
	    columns:[flowLogColumn]
	});
}
function initConcludeTbl(){
	$('#concludeTbl').datagrid({
	    data: flowLogObj.conclude,
	    columns:[flowLogColumn]
	});
}

// 流转日志状态选项卡
function flowLogTab() {
	$('.flowlog-btns > li.completed').click(function() {
		var _this = $(this),
			idx = _this.index();
		_this.addClass('active').siblings().removeClass('active');
		$('.flowlog-tbl > li').eq(idx).show().siblings().hide();
		$('.all-flowlog-wrap').hide();
		$('.flowlog-tbl > li').eq(idx).find('.cm-table').datagrid('resize');
	})
}

// 初始化全部流转日志
function initAllFlowLog() {
	var allFlowlogArr = [];
	for(var name in flowLogObj) {
		if(flowLogObj[name][0].state === 1) {
			allFlowlogArr.push(flowLogObj[name][0]);
		}
	}
	$('#allFlowLogTbl').datagrid({
	    data: allFlowlogArr,
	    columns:[flowLogColumn]
	});
}
// 查看全部流转日志
function checkAllFlowLog() {
	$('.all-flowlog-wrap').show().find('.cm-table').datagrid('resize');
	$('.flowlog-tbl > li').hide();
	$('.flowlog-btns > li.completed').removeClass('active');
}


// 初始化阅知信息表
var ReadInfoData = [
	{name: "蔡延军", department: "人力资源部", position: "部门员工（省）", state: "否", info: "信息信息", time: "2017-09-04 18:00"}
];
function initReadInfoTbl() {
	$('#readInfoTbl').datagrid({
	    data: ReadInfoData,
	    columns:[[
		    {field:'name',title:'阅知人',width:'10%', align: 'center'},
		    {field:'department',title:'阅知人部门',width:'15%', align: 'center'},
		    {field:'position',title:'阅知人岗位',width:'20%', align: 'center'},
		    {field:'state',title:'阅知状态',width:'15%', align: 'center'},
		    {field:'info',title:'阅知人信息',width:'20%', align: 'center'},
		    {field:'time',title:'阅知时间',width:'20%', align: 'center'}
		]]
	});
}
