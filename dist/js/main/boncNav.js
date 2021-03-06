;(function($) {
    var initBarObj;
    var navContainer;
    var onclickFun = function(title, url, id) {
        console.log('点击了' + title + '菜单 url:' + url + ' id:' + id);
    };
    
    //找到第一个有url的菜单返回title,id,url的object
    function findFirstUrl(obj){
    	for(var i = 0; i < obj.length; i++ ){
    		var tempObj = obj[i];
    		if(tempObj.url && tempObj.url != ''){
    			var returnObj = {};
    			returnObj.title = tempObj.text;
    			returnObj.url = tempObj.url;
    			returnObj.id = tempObj.id;
	        	return returnObj;
	       	} else if(tempObj.children && tempObj.children.length > 0){
	        	findFirstUrl(tempObj.children);
	       	}
    	}
    }
    
    //打开第一个url作为首页
	var openFirstPage = function() {
    	var tempObj = {};
    	tempObj = findFirstUrl(initBarObj.data);
    	initBarObj.onClick(tempObj.title, tempObj.url, tempObj.id);
    }
	
	//给左侧菜单添加滚动条
    var addNicescroll = function() {
    	$('.firstNavWrap').niceScroll({cursorcolor:"rgba(33, 37, 45, 0.3)",cursorwidth: "5px",cursorborder:"none"});
    	$('#navContent').niceScroll({cursorcolor:"#ddd",cursorwidth: "5px",cursorborder:"none"});
    }

    var removeNicescroll = function() {
        $('.firstNavWrap,#navContent').getNiceScroll().hide();
    }
	
	//计算左侧导航菜单部分的高度
	function calcWH(){
		$(window).resize(function(){
			var mainWidth = $(window).width() - $('#frame-nav').width();
			var btmHeight = $(window).height() - $('#frame-head').height();
			$('#navContent').css('max-height',btmHeight);
			$('.firstNavWrap').height($('.frame-nav').height() - 34);
		}).resize();
	}
	
	//设置hover出现悬浮子菜单的位置
	function setNavContentPos(){
		//34是菜单图标的高度
		var _tag = $('#firstNavWrap').find('li.active');
		var setTag = $('#navContent');
		var _tagX = 34, 
		_tagOffsetTop = _tag.offset().top,
		_tagBtm = $(window).height() - _tagOffsetTop,
		setTagHalfH = setTag.height()/2,
		liHalfH = $('.firstNav').height()/2,
		topVal = $(navContainer).offset().top + 34;
		var scrollTop = $('.firstNavWrap').getNiceScroll(0).getScrollTop();
		_tagX =  _tagOffsetTop + liHalfH;
		if(_tagX > setTagHalfH){
			topVal = _tagX - setTagHalfH;
		}
		if(topVal < $(navContainer).offset().top + 34){
			topVal = $(navContainer).offset().top + 34;
		}
		if(_tagBtm - liHalfH <  setTagHalfH){
			setTag.css({"top":"auto","bottom": 0});
		}else{
			setTag.css({"top": topVal,"bottom":"auto"});
		}
	}
	
	//有url的菜单绑定点击打开tab事件，和有第三层以下有子菜单的点击展开子菜单
    var bindOnclickFun = function() {
        $('.hasClickFun').each(function() {
            $(this).bind({
                click: function(e) {
                    var $this = $(this), title = $this.text(), url='', id='';
                    if($this.html().indexOf('</i>') >= 0){
                    	title = $this.html().split('</i>')[1];
                    }
                    url = $this.attr('data-url');
                    id = $this.attr('id');
                    initBarObj.onClick(title, url, id);
                }
            })
        });
        $('.lev2Wrap .hasChild').each(function(){
        	$(this).bind({"click":function(){
        		var thisDom = $(this);
        		var iconDom = thisDom.find('.iconfont');
        		var brotherNextDom = $(this).next('div');
        		thisDom.toggleClass('active');
        		brotherNextDom.toggleClass('active');
        		if(thisDom.attr('class') && thisDom.attr('class').indexOf('active') >= 0){
        			iconDom.html('&#xe8c9;');
        		}else{
        			iconDom.html('&#xe8c8;');
        		}
        	}});
        });
    };
	
	//生成二级菜单、三级菜单…
    var genNavContentHtml = function(childrenData, level) {
        var i = 0, html = '';
        for (i = 0; i < childrenData.length; i++) {
            var tempObj = childrenData[i];
            var linkStr = '#',
                url="",
                clickCls = "",
                childCls = "",
                childrenHtml="",
                arrowHtml="";
            if(tempObj.url && tempObj.url != ""){
            	url=tempObj.url;
            	clickCls = "hasClickFun";
            }
            if(level == 2){
            	arrowHtml = '<i class="iconfont">&#xe8c7;</i>';
            }
            if(tempObj.children && tempObj.children.length > 0){
            	childCls = "hasChild";
            	if(level == 2){
            		arrowHtml = '<i class="iconfont">&#xe8c8;</i>';
            	}
            	var levAdd = parseInt(level) + parseInt(1);
            	childrenHtml += '<div class="lev'+ levAdd +'Wrap">';
            	childrenHtml += genNavContentHtml(tempObj.children, levAdd);
            	childrenHtml += '</div>';
            }
            if(level == 1){
            	html += '<div class="secondLevWrap">';
            }
            html += '<span class="navTitle navTitle'+level+' '+clickCls+' '+ childCls +'" id="'+tempObj.id+'" data-url="'+ url +'">'+ arrowHtml +tempObj.text+'</span>';
            html += childrenHtml;
            if(level == 1){
            	html += '</div>';
            }
        }
        return html;
    };

    //生成第一层菜单，传入菜单层级对象和添加到目标对象的id
    var initHtml = function(container, obj) {
        var NavArr = obj.data;
        var $tag = $(container);
        var htmlAll = "", liId = "", liUrl="", liChildren=[];
        var iconDef = "&#xe654;";
        var firstStepHtml = '<span class="iconfont">&#xe654;</span><ul id="firstNavWrap" class="firstNavWrap"></ul><div id="navContent" class="navContent"></div>';
        $tag.html(firstStepHtml);
    	for(var i=0; i<NavArr.length; i++){
    		if(NavArr[i].icon && NavArr[i].icon != ""){
    			iconDef = NavArr[i].icon;
    		}
    		htmlAll += '<li class="firstNav" id="'+NavArr[i].id+'"><i class="iconfont">'+iconDef+'</i></li>';
    	}
        $('#firstNavWrap').html(htmlAll);
        var lis = $tag.find("li");
        for(var i=0; i < lis.length;i++){
        	liId = "", liUrl="", liChildren=[];
        	liId = $(lis[i]).attr('id');
        	if(NavArr[i].url && NavArr[i].url != ""){
        		liUrl = NavArr[i].url;
        	}
        	if(NavArr[i].children && NavArr[i].children.length > 0){
        		liChildren = NavArr[i].children;
        	}
        	$(lis[i]).data({"title":NavArr[i].text,"url":liUrl,"children":liChildren});
        }
    };

    var bindLeftBarMouseFun = function(options) {
        //左侧菜单点击事件和mouseenter、mouseout事件
        var tagATimer = null;
        var _tagA, htmlStr = "", _dropdownmenu = $('#navContent');
        function clearTimmer(){
            clearTimeout(tagATimer);
            clearTimeout(_dropdownmenu.timer);
        }
        $('#firstNavWrap').find('li').each(function() {
            _tagA = $(this);
            _tagA.on('mouseenter', function() {
                clearTimmer();
                _tagA = $(this);
                var url = _tagA.data("url");
                var id = _tagA.attr('id');
                var children = _tagA.data("children");
                var clickCls='';
                
                $('#firstNavWrap').find('li').removeClass('active');
                _tagA.addClass('active');
                if(url && url != ""){
	            	clickCls = "hasClickFun";
	            }
                if(children.length == 0){
                	htmlStr = '<p class="onlyFirstNav"><i class="nOnlyLeft"></i><span class="navTitle navTitle0 '+ clickCls +'" data-url="'+url+'" id="'+id+'">'+_tagA.data("title")+'</span><i class="nOnlyRight"></i></p>';
                }else{
                	htmlStr = '<span class="navTitle navTitle0 '+ clickCls +'" data-url="'+url+'" id="'+id+'">'+_tagA.data("title")+'</span>';
                	htmlStr += '<div class="navsContentWrap">';
                	htmlStr += genNavContentHtml(children, 1);
                	htmlStr += '</div>';
                }
                _dropdownmenu.html(htmlStr);
                setNavContentPos();
                bindOnclickFun();
                _dropdownmenu.show();
            }).on('mouseleave', function() {
                clearTimmer();
                tagATimer = setTimeout(function() {
                    if (_tagA.flag) {
                        return;
                    }
                    //关闭子菜单
                    _dropdownmenu.hide();
                    $('#firstNavWrap').find('li').removeClass('active');
                }, 1000);

                _dropdownmenu.on('mouseenter', function() {
                    _tagA.flag = true;
                    clearTimmer();
                }).on('mouseleave', function() {
                    clearTimmer();
                    _dropdownmenu.timer = setTimeout(function() {
                    _dropdownmenu.hide();
                    $('#firstNavWrap').find('li').removeClass('active');
                    }, 1000);
                });
            });
        });
    }
	
	//菜单初始化事件
    var initBoncNav = function(navWrapDiv, options) {
        if(options.data.length > 0){
            initHtml(navWrapDiv, options);
            bindLeftBarMouseFun(options);
            calcWH();
            addNicescroll();
            openFirstPage();
            $(window).resize(function() {
            });
        }
    }

    $.fn.boncNav = function(options) {
        if (typeof options == 'string') { //如果options不是对象，而是字符串，默认调用其方法，参数传递进来
            return $.fn.boncMenu.methods[options](this, param);
        }
        //创建一些默认值，拓展任何被提供的选项
        var options = $.extend({
            data: [],
            "onClick": onclickFun
        }, options);

        return this.each(function() {
            initBarObj = options;
            navContainer = this;
            initBoncNav(this, options);
        });
    };
    //对外提供的方法
    $.fn.boncNav.methods = {
    };
})(jQuery);
