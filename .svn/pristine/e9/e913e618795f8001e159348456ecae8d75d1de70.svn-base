/*
* @Author: jinhaiyue
* @Date:   2017-08-03 10:49:50
* @Last Modified by:   jinhaiyue
* @Last Modified time: 2017-08-03 10:49:50
*/

'use strict';
// 下拉框数据
var selectData = [
	{key:'1',text: 1111},
	{key:'2',text: 2222},
	{key:'3',text: 3333,selected:true}
];
var selectWhetherData = [
	{key:'1',text: '是',selected:true},
	{key:'0',text: '否'}
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

//初始化zTree默认树状结构
var initTree = function(){
	var setting = {
		data: {
			simpleData: {
				enable:true, 
				idKey:'orgId',
				pIdKey:'parentId'
			},
			key:{
				name:'orgName'
			}
		},		
		callback: {
			beforeClick: function(treeId, treeNode){
				var zTree = $.fn.zTree.getZTreeObj("defaultTree");
				zTree.checkNode(treeNode, !treeNode.checked, null, true);
				return false;
			}
		}
	};
	var data = [
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
//	$.ajax({//初始化组织人员树
//		"url":webpath+"/user/org",
//		"type":"POST",
//		dataType:"json",
//		success:function(data){	
			if(data!=null&&data.length>0){
				var treeObj = $.fn.zTree.init($("#defaultTree"), setting, data);
				treeObj.expandAll(true);
			}else{
				layer.msg('暂无数据', {time:1000, icon:5});
			}
			
//		}
//	});
	// 内容过多出现滚动条
	$('.identity-tree').niceScroll({cursorcolor: '#ccc', horizrailenabled: false});
}


//初始化修改图标的zTree树状结构---带右键菜单
var identityTree = function(){
	var setting = {
		data: {
			simpleData: {
				enable:true, 
				idKey:'orgId',
				pIdKey:'parentId'
			},
			key:{
				name:'orgName'
			}
		},		
		callback: {
			onRightClick:function(e,treeId,treeNode){
				peacock.preventDefault(e);
				if(!treeNode) return;
				treeObj.selectNode(treeNode);
				$(".bootstrapMenu").hide();
				var oWidth = e.clientX - $('#idTreeContent').parents('.panel').offset().left + 15;
				var oHeight = e.clientY - $('#idTreeContent').parents('.panel').offset().top+$(document).scrollTop();
				switch (treeNode.nodeTypeId){
					case 0:
						$("#folderContextMenu").show();
						$("#folderContextMenu").css("left",oWidth);
						$("#folderContextMenu").css("top",oHeight);
						break;
					case 1:
						$("#linkContextMenu").show();
						$("#linkContextMenu").css("left",oWidth);
						$("#linkContextMenu").css("top",oHeight);
						break;
					default:;
						
				}
		    }
		}
	};
	var data = [
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
	if(data!=null&&data.length>0){
		for(var i = 0; i < data.length; i++){
//			data[i].icon = webpath+nodeTypeIcon[data[i].nodeTypeId];
		}
		var treeObj = $.fn.zTree.init($("#identityTree"), setting, data);
		treeObj.expandAll(true);
	}else{
		layer.msg('暂无数据', {time:1000, icon:5});
	}
	
	$(document).click(function() {
		$(".bootstrapMenu").hide();
	});
}
// 图标样式
var nodeTypeIcon = {
		"0":"/resources/camel/img/icon/16x16/floder1-org.png",
		"1":"/resources/camel/img/icon/16x16/resorce.png"
};

//显示本页面弹出层
var showLayer = function(){
	layer.open({
		type: 1,
		title:'弹出层标题',
		area: ['500px', '300px'],
		content: '<div>此处为弹出层内容区</div>',
		btn: ['确定','取消'],
		btn1: function(index, layero){
			layer.close(index);
		},
		btn2: function(index, layero){
			layer.close(index);
		}
	})
}
// 显示父页面弹出层，父页面若无显示弹出层方法，则调用本页面方法
var showHrefLayer = function(){
	layer.open({
		type: 2,
		title: false,
		closeBtn: true,
		area: ['900px', '600px'],
		content: 'http://www.baidu.com',
		btn: ['关闭'],
		btn1: function(index, layero){
			layer.close(index);
		}
	})
}

// 提交进行校验
function submitValidator() {
	var formObj = $('#demoForm');
	//	给可编辑的div上面的input框赋值
	$('.cm-form-editDiv').prev().val($('.cm-form-editDiv').text());
	if(form.isValidator(formObj)) {
		layer.msg('校验通过！')
	}
}

var showSuccessMsg = function(){
	layer.msg('保存成功！', {icon: 1,time:50000});
}

var showFailMsg = function(){
	layer.msg('保存失败！', {icon: 2,time:50000});
}

var showAlertMsg = function(){
	layer.msg('请核对信息！', {icon: 0,time:50000});
}

function openPrompt(){
	/**
	 * 指引插件的扩展，转换文字
	 */
	introJs().setOptions({'prevLabel':'&larr; 上一步','nextLabel':'下一步 &rarr;','skipLabel':'跳过','doneLabel':'完成'}).start();
}

$(function(){	
	// 加载下拉框
	$('#minSelect').peacock_select({field:"minSelect",data:selectWhetherData});
	$('#select1').peacock_select({field:"select1",data:selectData});
	$('#selectsm').peacock_select({field:"selectsm",data:selectData});
	$('#selectlg').peacock_select({field:"selectlg",data:selectData});
	peacock.initDatepicker();
	// 加载带checkbox复选框的多选下拉菜单树状结构
	peacock.initDownTree('downTree', ztreeData, ztreeOption);
	// 加载带checkbox复选框的多选下拉菜单树状结构
	peacock.initDownTree('downTree2', ztreeData, ztreeOption);
	//初始化zTree树状结构---带右键菜单
	initTree();
	
	//初始化修改图标的zTree树状结构---带右键菜单
	identityTree();
});