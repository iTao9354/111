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

//表格新增按钮点击事件
function addNewData(){
	//easyui清空表单
	$('#tbl1Info').form('clear');
	
	//打开弹窗
	layer.open({
		type: 1,
		title: '新增',
		area: ['500px', '380px'],
		content: $("#tbl1Info"),
		btn: ['确定', '取消'],
		btn1: function(index, layero) { //确定按钮回调
			/*$.ajax({ //新增数据
				"url": peacock.warpRandom(webpath + "/add"),
				"data": {
				},
				dataType: "json",
				"type": "POST",
				success: function(data) {
					if(data == 1) {
						layer.msg('新增成功！', {
							time: 2000,
							icon: 1
						});
						//刷新表格
						
						//关闭弹窗
						layer.close(index);
					} else {
						layer.msg('新增失败！', {
							time: 2000,
							icon:2
						});
					}
				},
				error: function(data) {
					console.log(data);
				}
			});*/
			layer.close(index);
		},
		btn2: function(index, layero) { //取消按钮回调
			layer.close(index);
		}
	});
}

//表格修改按钮点击事件
function upd(id){
	//旧数据序列进表单中
	$('#tbl1Info').form('load',{
		businessName:'aaaaaa',
		businessName2:'bbbbb',
		businessName3:'businessName3',
		industryType:'2',
		checkboxObj:['111','222'],
		state:'AL',
		select3:'111',
		select3Text:'1111',
	});
	
	//打开弹窗
	layer.open({
		type: 1,
		title: '修改',
		area: ['500px', '380px'],
		content: $("#tbl1Info"),
		btn: ['确定', '取消'],
		btn1: function(index, layero) { //确定按钮回调
			/*$.ajax({ //新增数据
				"url": peacock.warpRandom(webpath + "/add"),
				"data": {
				},
				dataType: "json",
				"type": "POST",
				success: function(data) {
					if(data == 1) {
						layer.msg('新增成功！', {
							time: 2000,
							icon: 1
						});
						//刷新表格
						
						//关闭弹窗
						layer.close(index);
					} else {
						layer.msg('新增失败！', {
							time: 2000,
							icon:2
						});
					}
				},
				error: function(data) {
					console.log(data);
				}
			});*/
		},
		btn2: function(index, layero) { //取消按钮回调
			layer.close(index);
		}
	});
}

//表格删除按钮点击事件
function del(id){
	layer.confirm('确定删除第 '+id+' 行数据？', {
		icon: 3,
		btn: ['是', '否'] //按钮
	}, function() {
		layer.closeAll();
		//        	$.ajax({
		//        		url: webpath + "ssologOut",
		//        		type: "POST",
		//        		dataType:"json",
		//        		error:function(){},
		//        		success:function(data){
		//					initTbl1();
		//        		}
		//        	});
		
	}, function() {
		return;
	});
}

function initTbl1(){
	//用easyui默认的checkbox，改了样式
	var checkboxWidth = 29;//默认checkbox列的宽度
	var lastCalcWidth = $('#tbl1').parent().width() * 15 /100 - checkboxWidth;//最后一列的宽度15%-27
	$('#tbl1').datagrid({
	    data:dataBusinessMgr,
	    checkOnSelect:true,//选中行checkbox选中
	    singleSelect:true,//单选
	    toolbar: [
	    	{
	    		text: '<div class="datagrid-addBtn"><i class="iconfont">&#xe696;</i><span>新增</span></div>',
	    		handler: function() {
	    			addNewData();
	    		}
	    	}
	    ],
	    columns:[[
	    	{
	    		field:'',
				checkbox: true
	    	},
	        {field:'id',title:'商机编号',width:'5%',sortable:true},
	        {field:'name',title:'商机名称',width:'10%',formatter:formatBusinessName},
	        {field:'city',title:'地市编码',width:'10%',sortable:true},
	        {field:'cusId',title:'客户编码',width:'10%'},
	        {field:'cusName',title:'客户名称',width:'10%'},
	        {field:'industryType',title:'行业类型',width:'10%',sortable:true},
	        {field:'firstIndustry',title:'一级行业',width:'10%'},
	        {field:'secIndustry',title:'二级行业',width:'10%'},
	        {field:'progress',title:'周计划进展及问题',width:'10%'},
	        {field:'info',title:'操作',width:lastCalcWidth+'px',align:'center',
	        	formatter : function(value, rowData, rowIndex) {
					return '<span class="iconfont" title="修改" onclick="upd('
						+ rowData.id
						+ ')";>&#xe66f;</span>'
						+ '<span class="iconfont icon-delBtn" onclick="del('
						+ rowData.id
						+ ');" title="删除">&#xe614;</span>';
				}
	        }
	    ]],
	    onCheck:function(index,row){
	    	//此函数在jquery.easyui.ext.js中定义,检查全选checkbox样式
	    	extCheckChkAllClass();
	    },
	    onUncheck:function(index,row){
	    	extCheckChkAllClass();
	    },
	    onLoadSuccess:function(data){
	    	//此函数在jquery.easyui.ext.js中定义，全选checkbox样式和点击事件
			extBindChkAllClick();	    	
	    }
	});
}
$(function(){
	var selectData = [
		{key:'100',text: 1111},
		{key:'101',text: 2222},
		{key:'102',text: 3333}
	];
	$('#selectTest1').peacock_select({field:"select1",data:selectData});
	$('#selectTest2').peacock_select({field:"select2",data:selectData});
	$('#selectTest3').peacock_select({field:"select3",data:selectData});
	
	initTbl1();
	$(window).resize(function(){
		$('#tbl1').datagrid('resize');
	});
});
