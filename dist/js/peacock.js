;(function(window){
	window.peacock = _peacock = {};
	//获取浏览器类型
	var browser = function() {
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    if (isOpera) {
	        return "Opera"
	    }; //判断是否Opera浏览器
	    if (userAgent.indexOf("Firefox") > -1) {
	        return "FF";
	    } //判断是否Firefox浏览器
	    if (userAgent.indexOf("Chrome") > -1) {
	        return "Chrome";
	    }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } //判断是否Safari浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        return "IE";
	    }; //判断是否IE浏览器, ie10以下可以判断出来
	    if("ActiveXObject" in window || window.ActiveXObject){
	    	//ie11
	    	return "IE";
	    }
	    //如果都没出去返回
	    return "Can not judge";
	}
	_peacock.browser = browser;
	/**
	阻止向上冒泡
	*/
	function preventEvent(e) {
	    if (e && e.stopPropagation) {
	        e.stopPropagation()
	    } else {
	        window.event.cancelBubble = true
	    }
	}
	_peacock.preventEvent = preventEvent;
	/**
	阻止默认方法
	*/
	function preventDefault(e) {
	    if (e && e.preventDefault) {
	        e.preventDefault();
	    } else {
	        window.event.returnValue = false;
	        return false;
	    }
	}
	_peacock.preventDefault = preventDefault;
	
	/**
     * 动态加载css文件
     * 金术静
     */
	function loadDynamicStyles(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
	_peacock.loadDynamicStyles = loadDynamicStyles;
	
	/**
	 * 动态加载js文件
	 * 金术静
	 */
	function loadDynamicJavascript(url) {
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src = url;
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
	_peacock.loadDynamicJavascript = loadDynamicJavascript;
	
	/*
	 * 自定义下拉框初始化
	 * 靳海月
	 */
	function initCommonSelect(ele,data) {
		var ele = ele?ele:'.common-select';
		$(ele).each(function() {
			var _this = $(this),
				selectInp = _this.children('.cm-select-form'),
				selectBtn = _this.children('.cm-select-btn'),
				selectBoxWrap = _this.children('.cm-selectBox-Wrap');
			if(typeof data !== 'undefined') {			
				// 初始化
				for(var i = 0; i < data.length; i++) {				
					selectBoxWrap.append('<li>'+data[i].text+'</li>');
				}
			}
			selectInp.val(selectBoxWrap.children('li:first-child').text());
			
			// 操作
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
			_this.children('.cm-select-form, .cm-select-btn').hover(function() {
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
					$('.cm-selectBox-Wrap').hide();
					$('.cm-select-btn').css('transform','rotate(0)');
					selectBoxWrap.show();
					selectBtn.css('transform','rotate(180deg)');
				}
			}
		})
	}
	_peacock.initCommonSelect = initCommonSelect;
	
	// 显示提示弹出层
	var showTipsLayer = function(msg, id) {
		layer.tips(msg, '#'+id, {
			tips: [2, '#ff6d5e'],
			time:0
		});
	};
	_peacock.showTipsLayer = showTipsLayer;
	var hideAllTip = function(){
		layer.closeAll('tips');
	}
	_peacock.hideAllTip = hideAllTip;
	
	
	//初始化zTree树状结构---带 checkbox复选框 的多选下拉菜单
	/**
	 * id   下拉树ul的id
	 * data  下拉树中的数据
	 * options  一些常规的配置项  
	 * 			options.id    树状菜单每条数据节点的id字段名，唯一的
	 * 			options.pId   父节点的id字段名，同一层父节点id也是唯一的
	 * 			options.name  每个节点显示的名称
	 * 			options.flag  是否支持多选
	 * 
	 * **/
	function initDownTree(id, data, options) {
		$('#'+id).each(function() {	
			var downWrap = $(this).parent(),
				selInp = downWrap.siblings('.cm-select-form'),
				selBtn = downWrap.siblings('.cm-select-btn');
			
			var setting = {
				data: {
					simpleData: {
						enable: true, 
						idKey: options.id,
						pIdKey: options.pId
					},
					key:{
						name: options.name
					}
				},
				check: {
					enable: options.flag,
					chkboxType: {"Y":"s", "N":"s"}
				},
				callback: {
					beforeClick: function(treeId, treeNode){
						var zTree = $.fn.zTree.getZTreeObj(id);
						zTree.checkNode(treeNode, !treeNode.checked, null, true);
					},
					onClick: function(e, treeId, treeNode) {
						if(!options.flag) {							
							selInp.attr("value", treeNode[options.name]);
						}
					},
					onCheck: function(e, treeId, treeNode){
						var zTree = $.fn.zTree.getZTreeObj(id),
						nodes = zTree.getCheckedNodes(true),
						v = "";
						for (var i=0, l=nodes.length; i<l; i++) {
							v += nodes[i][options.name] + ",";
						}
						if (v.length > 0 ) v = v.substring(0, v.length-1);
						selInp.attr("value", v);
					}
				}
			};
		
			
			if(data!=null&&data.length>0){
				var treeObj = $.fn.zTree.init($("#"+id), setting, data);
				treeObj.expandAll(true);
			}else{
				layer.msg('暂无数据', {time:1000, icon:5});
			}
			
			// 鼠标划入效果
			downWrap.prevAll().hover(function() {
				$(this).parent().css({'border-color': '#d43f3a'});
				selInp.css({'background-color': '#fcf4f4'});
				selBtn.css({'color': '#e15b52'});
				// 添加title属性
				$(this).attr('title', $(this).val());
			}, function() {
				$(this).parent().css({'border-color': '#ccc'});
				selInp.css({'background-color': '#fff'});
				selBtn.css({'color': '#aaa'});
			}).click(showMenu);
			
			// 内容过多时出现滚动条
			downWrap.niceScroll({cursorcolor: '#ccc', horizrailenabled: true});	
			
			function showMenu() {
				var cityOffset = selInp.offset();
				if(downWrap.is(':visible')) {
					downWrap.fadeOut("fast");
					selBtn.css('transform','rotate(0)');
				}else {
					downWrap.css({left:cityOffset.left + "px", top:cityOffset.top + selInp.outerHeight() + "px"}).slideDown("fast");
					selBtn.css('transform','rotate(180deg)');
				}	
				$("body").bind("mousedown", onBodyDown);
				selInp.css({'background-color': '#fcf4f4'}).parent().css({'border-color': '#d43f3a'});
				selBtn.css({'color': '#e15b52'});
				return false;
			}
			function hideMenu() {
				downWrap.fadeOut("fast");
				$("body").unbind("mousedown", onBodyDown);
				selInp.css({'background-color': '#fff'}).parent().css({'border-color': '#ccc'});
				selBtn.css({'color': '#aaa', 'transform':'rotate(0)'});
			}
			function onBodyDown(event) {
				if (!(event.target.className == "cm-menu-content" || $(event.target).parents(".cm-menu-content").length>0)) {
					hideMenu();
				}
			}
		})
	}
	_peacock.initDownTree = initDownTree;
})(window);