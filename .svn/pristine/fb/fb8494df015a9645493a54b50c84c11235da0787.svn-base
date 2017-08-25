/*
* @Author: jinhaiyue
* @Date:   2017-08-03 10:49:50
* @Last Modified by:   jinhaiyue
* @Last Modified time: 2017-08-03 10:49:50
*/

'use strict';

$(function(){
	// 加载下拉框		
	initCommonSelect();
	
	// 加载带checkbox复选框的多选下拉菜单树状结构
	initDownTree();
	//初始化zTree树状结构---带右键菜单
	initTree();
	
	//初始化修改图标的zTree树状结构---带右键菜单
	identityTree();
	
	// 初始化文件上传
	initUploader();
	
	// 加载表格
	initDataTable();
	// 点击查询按钮，重新加载目标数据
	$("#searchBtn").bind("click",reloadTableData);
	
});

//自定义下拉框
function initCommonSelect() {
	$('.cm-select').each(function() {
		var _this = $(this),
			selectInp = _this.children('.cm-form-select'),
			selectBtn = _this.children('.cm-select-btn'),
			selectBoxWrap = _this.children('.cm-selectBox-Wrap');
		selectInp.val(selectBoxWrap.children('li:first-child').text());
		$(document).click(function() {
			selectBoxWrap.hide();
			selectBtn.css('transform','rotate(0)');
		});
		
		selectInp.off('click').on('click', function(e) {
			preventEvent(e);
			toggleRotate();
		})
		.next().off('click').on('click', function(e) {
			preventEvent(e);
			toggleRotate();			
			selectInp.css({'border-color': '#d43f3a', 'background-color': '#fffdfd'});
			$(this).css({'color': '#e15b52'});
		});
		
		// 鼠标划入效果
		_this.children('.cm-form-select, .cm-select-btn').hover(function() {
			$(this).parent().css({'border-color': '#d43f3a'});
			selectInp.css({'background-color': '#fcf4f4'});
			selectBtn.css({'color': '#e15b52'});
			// 添加title
			selectInp.attr('title', $(this).val());
		}, function() {
			$(this).parent().css({'border-color': '#ccc'});
			selectInp.css({'background-color': '#fff'});
			selectBtn.css({'color': '#aaa'});
		})
		
		// 下拉操作
		selectBoxWrap.children('li').off('click').on('click', function() {
			selectInp.val($(this).text());
			selectBoxWrap.hide();
			selectBtn.css('transform','rotate(0)');
		})
		
		// 内容过多时出现滚动条
		selectBoxWrap.niceScroll({cursorcolor: '#ccc'});		
		
		function toggleRotate() {
			if(selectBoxWrap.is(':visible') == true) {
				selectBoxWrap.hide();
				selectBtn.css('transform','rotate(0)');
			}else {
				selectBoxWrap.show();
				selectBtn.css('transform','rotate(180deg)');
			}
		}
	})
}

//初始化zTree树状结构---带 checkbox复选框 的多选下拉菜单
var initDownTree = function(){
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
		check: {
			enable: true,
			chkboxType: {"Y":"s", "N":"s"}
		},
		callback: {
			beforeClick: function(treeId, treeNode){
				var zTree = $.fn.zTree.getZTreeObj("downTree");
				zTree.checkNode(treeNode, !treeNode.checked, null, true);
				return false;
			},
			onCheck: function(e, treeId, treeNode){
				var zTree = $.fn.zTree.getZTreeObj("downTree"),
				nodes = zTree.getCheckedNodes(true),
				v = "";
				for (var i=0, l=nodes.length; i<l; i++) {
					v += nodes[i].orgName + ",";
				}
				if (v.length > 0 ) v = v.substring(0, v.length-1);
				var cityObj = $("#formSel");
				cityObj.attr("value", v);
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
		var treeObj = $.fn.zTree.init($("#downTree"), setting, data);
		treeObj.expandAll(true);
	}else{
		layer.msg('暂无数据', {time:1000, icon:5});
	}
	
	// 鼠标划入效果
	$("#formSel, #menuBtn").hover(function() {
		$(this).parent().css({'border-color': '#d43f3a'});
		$("#formSel").css({'background-color': '#fcf4f4'});
		$('#menuBtn').css({'color': '#e15b52'});
		// 添加title属性
		$(this).attr('title', $(this).val());
	}, function() {
		$(this).parent().css({'border-color': '#ccc'});
		$("#formSel").css({'background-color': '#fff'});
		$('#menuBtn').css({'color': '#aaa'});
	})
	
	// 内容过多时出现滚动条
	$('.cm-menu-content').niceScroll({cursorcolor: '#ccc'});
}
function showMenu() {
	var cityObj = $("#formSel");
	var cityOffset = $("#formSel").offset();
	if($("#menuContent").is(':visible')) {
		$("#menuContent").fadeOut("fast");
		$('#menuBtn').css('transform','rotate(0)');
	}else {
		$("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");
		$('#menuBtn').css('transform','rotate(180deg)');
	}	
	$("body").bind("mousedown", onBodyDown);
	$("#formSel").css({'background-color': '#fcf4f4'}).parent().css({'border-color': '#d43f3a'});
	$('#menuBtn').css({'color': '#e15b52'});
}
function hideMenu() {
	$("#menuContent").fadeOut("fast");
	$("body").unbind("mousedown", onBodyDown);
	$('#formSel').css({'background-color': '#fff'}).parent().css({'border-color': '#ccc'});
	$('#menuBtn').css({'color': '#aaa', 'transform':'rotate(0)'});
}
function onBodyDown(event) {
	if (!(event.target.id == "menuBtn" || event.target.id == "formSel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
		hideMenu();
	}
}

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
				preventDefault(e);
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


//初始化文件上传功能
var initUploader = function(){
	// 初始化webuploader组件，设置上传等事件监听
	var $list = $('#thelist');
	var $btn =$("#ctlBtn");   //开始上传
	var thumbnailWidth = 100;   //缩略图高度和宽度 （单位是像素），当宽高度是0~1的时候，是按照百分比计算  
	var thumbnailHeight = 100; 
	var uploader = WebUploader.create({		
	    // swf文件路径
	    swf: '../../plugins/webuploader-0.1.5/Uploader.swf',
	    // 文件接收服务端。
//	    server: '/file/uploadAll',
	    // 选择文件的按钮。可选。
	    pick: '#picker',
	    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
	    resize: false,
	    method:'POST',
	    // 可重复上传
	    duplicate: true
	});
	$btn.on('click',function(){
		//添加完需要与图片一起上传的参数之后,就可以手动触发uploader的上传事件了.
		uploader.upload();
	});
	
	// 上传事件对象
	var uploaderObj = {
		'fileQueued': function(file){
			$list.append( '<div id="' + file.id + '" class="item">' +
			        '<h4 class="info clearfix" name="'+file.name+'">' + file.name + '<i class="fr iconfont file-delete" title="删除">&#xe61b;</i>'+
			        												'<i class="fr iconfont file-download" title="下载">&#xe724;</i>'+
			        '</h4>' +
			        '<p class="state">等待上传...</p>' +
			    '</div>' );
		},
		'uploadProgress': function( file, percentage ) {
		    var $li = $( '#'+file.id ),
		        $percent = $li.find('.progress .progress-bar');

		    // 避免重复创建
		    if ( !$percent.length ) {
		        $percent = $('<div class="progress progress-striped active">' +
		          '<div class="progress-bar" role="progressbar" style="width: 0%">' +
		          '</div>' +
		        '</div>').appendTo( $li ).find('.progress-bar');
		    }

		    $li.find('p.state').text('上传中');

		    $percent.css( 'width', percentage * 100 + '%' );
		},
		'uploadSucc': function( file ) {
		    $( '#'+file.id ).find('p.state').text('已上传');
		    $('.info .iconfont').show();
		    // 文件下载
		    $('.file-download').on('click', function(){
		    	var name = $(this).parent().attr('name');
//		    	window.open(webpath+'/file/download?fileName='+name+'&filePath=D\:\\frame\\app\\res\\cruser\\'+name);
		    })
		    // 文件删除
		    $('.file-delete').on('click', function(){
		    	var name = $(this).parent().attr('name');
		    	var _this = this;
		    	layer.confirm('删除该用户？（删除后不可恢复）', {
		    		icon: 3,
		    		btn: ['是', '否']   		
		    	}, function(index, layero){
//		    		$.ajax({
//			    		url: webpath + '/file/delete',
//			    		type: 'POST',
//			    		data: {
//			    			filePath: 'D\:\\frame\\app\\res\\cruser\\'+name
//			    		},
//			    		success: function(data){			    			
//			    			if(data){
//			    				$(_this).parents('.item').remove();
//			    				layer.msg('删除成功！', {icon: 1});			    				
//			    			}else{
//			    				layer.msg('删除失败！', {icon: 1});
//			    			}
//			    		}
//			    	})
		    	})
		    	
		    })
		},
		'uploadErr': function( file ) {
		    $( '#'+file.id ).find('p.state').text('上传出错');
		},
		'uploadComp': function( file ) {
		    $( '#'+file.id ).find('.progress').fadeOut();
		}
	};
	
	// 当有文件被添加进队列的时候
	uploader.on( 'fileQueued', uploaderObj.fileQueued);	
	// 文件上传过程中创建进度条实时显示。
	uploader.on( 'uploadProgress', uploaderObj.uploadProgress);	
	// 文件上传成功
	uploader.on( 'uploadSuccess', uploaderObj.uploadSucc);
	// 文件上传失败，显示上传出错。
	uploader.on( 'uploadError', uploaderObj.uploadErr);
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on( 'uploadComplete', uploaderObj.uploadComp);
}


//显示本页面弹出层
var showLayer = function(){
	layer.open({
		type: 1,
		title:'<i class="iconfont">&#xe65b;</i>&nbsp;弹出层标题',
		area: ['900px', '600px'],
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
		closeBtn: false,
		area: ['900px', '600px'],
		content: 'http://www.baidu.com',
		btn: ['关闭'],
		btn1: function(index, layero){
			layer.close(index);
		}
	})
}
// 显示提示弹出层
var showTipsLayer = function(msg, id) {
	layer.tips(msg, '#'+id, {
		tips: [2, '#f8e3d1'],
		time: 3000
	});
};


//初始化表格
function initDataTable(){
	$("#userTable").width("100%").dataTable({
		"columns":[
		            { "data": "userName" },
		            { "data": "loginId" },
		            { "data": "emall" },
		            { "data": "mobile" },
		            { "data": "state" },
		            { "data": "lockLoginTimes" },
		            { "data": "regDate"}
		 ],
//		 "json":{
//			 "total":14,
			 "data":[
			         {"createrId":null,"dataAuth":null,"emall":"admin@bonc.com.cn","lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"admin","memo":null,"mobile":"15942411681","orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":"2017-02-18 13:18:51","pwdValidState":0,"regDate":null,"sex":"男","state":"1","telephone":"66666","tenantAdmin":0,"tenantId":null,"updateDate":"2017-02-18 13:18:51","userId":"admin","userName":"超级管理员"},
			         {"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"5343","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:20:51","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a6c29e60032","userName":"gg"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"888","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:20:38","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a6bf5240031","userName":"888"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"777","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:20:12","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a6b931b0030","userName":"777"},
			         {"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"666","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:19:53","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a6b471e002f","userName":"666"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"555","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:17:25","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a6906e1002c","userName":"555"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"444","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:17:16","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a68e11a002b","userName":"444"},
			         {"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"333","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:17:06","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a68b993002a","userName":"333"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"222","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:16:59","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a689dd50029","userName":"222"},{"createrId":"admin","dataAuth":null,"emall":null,"lastLoginDate":null,"lockDate":null,"lockLoginTimes":0,"loginId":"fff","memo":null,"mobile":null,"orgId":null,"orgnization":[],"password":null,"pwdState":"1","pwdUpdateDate":null,"pwdValidState":0,"regDate":"2017-02-14 10:16:46","sex":null,"state":"1","telephone":null,"tenantAdmin":0,"tenantId":null,"updateDate":null,"userId":"2c90bf625a3a318b015a3a686b100028","userName":"fff"}
			 ],
//		 },
//		 ajax: {
//		     url:webpath+'/user/selectPage',
//		     "type": 'POST',
//		     "dataSrc": function (json) {
//		    	 console.log(JSON.stringify(json));
//		           json.iTotalRecords = json.total;
//		           json.iTotalDisplayRecords = json.total;
//		           return json.data;
//		     }
//		},
		columnDefs:[{
			"targets" : 4,//操作按钮目标列
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data=="1"){
					  html += '<span style="color:green;">未锁定</span>';
				  }else{
					  html += '<span style="color:red;">已锁定</span>';
				  }
			      return html;
			   }
		},{
			  "targets" : 7,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.userId;
				  var html =  '<a href="javascript:void(0);" class="icon-wrap" title="编辑"><i class="iconfont">&#xe66f;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="删除"><i class="iconfont">&#xe614;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="重置密码"><i class="iconfont">&#xe637;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="角色授权"><i class="iconfont">&#xe646;</i></a>';
				      return html;
			   }
		}],
		"pageLength":5,          // 在common-js.jsp已定义一页数据数量，此处为重定义
		"serverSide": false      // 数据从后台调取时此处为true，在公用的common-js.jsp已定义
	});
}

//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#userTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}