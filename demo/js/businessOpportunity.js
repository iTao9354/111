/*
* @Author: jinhaiyue
* @Date:   2017-08-03 10:49:50
* @Last Modified by:   jinhaiyue
* @Last Modified time: 2017-08-03 10:49:50
*/

'use strict';
var selectData = [
	{text: 1111},
	{text: 2222},
	{text: 3333}
];
var selectWhetherData = [
	{text: '是'},
	{text: '否'}
];
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
	flag: true
};

$(function() {
	initBasicTbl1();
	$(window).on('resize', function() {
		$('#basicTbl1').treegrid('resize');
	})
	
	// 加载一级行业下拉框树
	peacock.initDownTree('downTree', ztreeData, ztreeOption);
	// 加载二级行业下拉框树
	peacock.initDownTree('downTree2', ztreeData, ztreeOption);
	// 加载三级行业下拉框树
	peacock.initDownTree('downTree3', ztreeData, ztreeOption);
	
	//	加载下拉框
	peacock.initCommonSelect('.common-select', selectData);
	peacock.initCommonSelect('.whether-select', selectWhetherData);
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
	{"id":"0008","name":"商机一","city":"沈阳","cusId":"9999","cusName":"吉林省高升科技有限公司","industryType":"IT","firstIndustry":"计算机信息业","secIndustry":"互联网服务业","progress":"xxx","info":"宽带业务"},
];
function initBasicTbl1(){
	$('#basicTbl1').datagrid({
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
function formatBusinessName(val,row){
	return '<span class="clicktoSeeBusiness cm-a">' +val+ '</span>';
}


function submitForm() {
	var formObj = $('#demoForm');
	if(formObj.isValid()) {
		alert('校验通过！');
	}
}
