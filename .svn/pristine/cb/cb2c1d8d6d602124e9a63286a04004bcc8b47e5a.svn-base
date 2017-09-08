;
(function($) {
    var initBarObj;
    var navContainer;
    var onclickFun = function(title, url, id, closable, isRefresh, opentype) {};
    var doNothing = function(){};
	
	/**
	 * 给有url的叶子菜单绑定点击函数，调用外部打开点击事件
	 * 此种方法绑定所有含有hasClickFun的class点击都会触发
	 */
    var bindOnclickFun = function() {
    	$(document).on("click", ".hasClickFun", function(){ 
			var $this = $(this);
            var title = $this.find('.menuText').text();
            var url = $this.attr('data-url');
            var opentype = $this.attr('data-otype') ;
            var id = $this.attr('id');
            initBarObj.onClick(title, url, id, true, true, opentype);
    	});
    };
	
	/**
	 * 生成菜单初始化html，递归调用最后返回所有html
	 * @param {Object} navArr 孩子节点object数组
	 * @param {Object} lev 层级数
	 */
    var genNavContentHtml = function(navArr, lev) {
        var i = 0,
            html = '<ul class="submenu">';
        if (lev == 0) {
            html = '<div class="mainNavWrap" unselectable="on"><ul id="mainNav">';
        }
        for (i = 0; i < navArr.length; i++) {
            var tempObj = navArr[i];
            var iconTxt = '&#xe604;',
                linkStr = '#',
                aCls = '',
                bCls = '',
                liCls = '',
                closeTxt = '',
                aId = '',
                onclickFun = '',
                openType = 'data-otype="1"',
                controlChildUlHtml = '<li class="topCtrl"><i class="iconfont level1Title">&#xe60d;</i><span>功能菜单</span><i class="controlLeftBarBtn lsbOpening iconfont">&#xe8cc;</i></li>';
            if (i === navArr.length - 1) {
                liCls = 'lastli';
            }
            if (i === 0 && lev == 1) {
                html += controlChildUlHtml;
                liCls = 'firstLi';
            }
            if (tempObj.id) {
                aId = tempObj.id;
            }
            if (tempObj.url) {
                linkStr = tempObj.url;
            }
            if(tempObj.openType){
            	openType = 'data-otype="'+tempObj.openType+'"';
            }
            if (tempObj.children && tempObj.children.length > 0) {
                aCls = 'dropdown-toggle';
                bCls = 'closeArrow';
                closeTxt = '&#xe8cb;';
            } else {
                onclickFun = ' hasClickFun';
            }
            html += '<li class="level' + lev + ' ' + liCls + '"><a id="' + aId + '" href="javascript:void(0);" data-url="' + linkStr + '" '+openType+' class="' + aCls + onclickFun + '" alt="' + tempObj.text + '">';

            if (tempObj.icon && tempObj.icon.indexOf('&#') >= 0 && lev == 1) {
                html += '<i class="sIcon iconfont">' + tempObj.icon + '</i>';
            } else if (tempObj.icon && (tempObj.icon.indexOf('.png') >= 0 || tempObj.icon.indexOf('.jpg') >= 0) && lev == 1) {
                html += '<img class="sIcon" src="../../images/' + tempObj.icon + '"/>';
            }else if(lev == 1){
                html += '<i class="sIcon iconfont replaceIcon">&#xe654;</i>';
            }
            html += '<span class="menuText">' + tempObj.text + '</span>';
            html += '<b class="sIcon iconfont arrow ' + bCls + '">' + closeTxt + '</b></a>';
            if (tempObj.children != undefined && tempObj.children.length > 0) {
                var levChild = parseInt(lev) + parseInt(1);
                html += genNavContentHtml(tempObj.children, levChild);
            }else if(parseInt(lev) == 0){
                html += '<ul class="submenu">'+ controlChildUlHtml +'</ul>';
            }
            html += '</li>';
        }
        html += '</ul>';
        if (lev == 0) {
            html += '</div>';
        }
        return html;
    };

    //生成菜单，传入菜单层级对象和添加到目标对象的id
    var initHtml = function(container, obj, successFun) {
        if (!obj.data) return;
        var NavArr = obj.data;
        var $tag = $(container);
        var i = 0,
            j = 0,
            k = 0,
            htmlChild = '';
        var htmlAll = ' <a class="menuControl active iconfont" id="menuControl1" herf="javascript:void(0)">&#xe6ca;</a>';
        if (NavArr.length != 0) {
            htmlAll += '<div id="navContent"><i class="leftArrowOrg bannerArrow iconfont" unselectable="on">&#xe8ca;</i>';
            htmlAll += genNavContentHtml(NavArr, 0);
            htmlAll += '<i class="rightArrowOrg bannerArrow iconfont" unselectable="on">&#xe605;</i></div><div id="thirdLevWrap" class="thirdLevWrap"></div>';            
            $tag.html(htmlAll);
        } else {
            console.log("菜单数据为空！");
        }
    };
	
	/**
	 * 计算一级菜单的外层包裹ul的宽度，切换树状菜单时需要调用
	 */
    var initNavUlWidth = function() {
        if ($('body').attr('class').indexOf('treeNav') < 0) {
            var oneNavWidth = initBarObj.barsWidth.level0Width;
            var navUlWidth = oneNavWidth * initBarObj.data.length;
            $('#mainNav').width(navUlWidth);
        } else {
        	//树状菜单宽度
            var w1 = initBarObj.barsWidth.ExpandWidth1;
            $('#mainNav').width(parseInt(w1) + parseInt(25) + 'px');
        }
    }
	
	/**
	 * 根据传入的配置项数据返回左侧菜单的宽度
	 */
	function calcLeftBarWidth(){
		var ww = $(window).width();
        var w2 = initBarObj.barsWidth.ExpandWidth2;
        var w1 = initBarObj.barsWidth.ExpandWidth1;
        if (w2.indexOf('%') > 0) {
            w2 = Math.floor(ww * parseFloat(w2.split('%')[0]) / 100);
        }
        if (ww > parseInt(initBarObj.barsWidth.mediaWidth)) {
            return w2;
        } else {
			return w1;
        }
	}
	
	/**
	 *给左侧菜单赋宽度值，调用展开收起左侧菜单的回调函数 
	 */
    var setLevel0SubmenuWidth = function(){
        if ($('body').attr('class').indexOf('normalNav') >= 0 && $('body').attr('class').indexOf('miniMenu') < 0) {
        	var wVal = calcLeftBarWidth();
            $('.level0 > .submenu').width(wVal + 'px');
        } else {
            $('.level0 > .submenu').removeAttr('style');
        }
        //回调函数
        if(initBarObj.AfterSetLevel0SubmenuWidthFun){
        	initBarObj.AfterSetLevel0SubmenuWidthFun();
        }
    }

    //关闭其他菜单或所有菜单
    var closeLeftBarMenus = function($li, fun) {
        if ($li) {
            //关闭初本li外的所有菜单
            $($li).siblings().each(function(e) {
                var $a = $('>a', $(this));
                $a.removeClass('active')
                if ($a.siblings('ul').length > 0) {
                    $a.siblings('ul').hide();
                    $('>b', $a).removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
                }
            });
        } else {
            //关闭所有菜单
            $("li[class^='level1']").each(function(e) {
                var $a = $('>a', $(this));
                $a.removeClass('active')
                if ($a.siblings('ul').length > 0) {
                    $a.siblings('ul').hide();
                    $('>b', $a).removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
                }
            });
        }
    };


	/**
	 *当一级菜单展示不开时候出来左右按钮，每次滑动一个菜单宽度，给左右按钮绑定点击事件 
	 */
    var bindMainNavCtrlBtn = function(tag) {
        var containerDom = $(tag);
        var containerWidth = containerDom.width();
        var mainNavDom = $('#mainNav');
        var mainNavWidth = mainNavDom.width();
        var oneLevel0Width = $('.level0:eq(0) > a').width();
        var mainNavLeft = -parseInt(mainNavDom.css('left').split('px')[0]);
        var maxNavLeft = mainNavWidth - (containerWidth - $('.bannerArrow').width() * 2);
        var leftCtlArrow = $('.leftArrowOrg.bannerArrow');
        var rightCtlArrow = $('.rightArrowOrg.bannerArrow');

        leftCtlArrow.unbind().click(function() {
            if (containerWidth < mainNavWidth && mainNavLeft <= maxNavLeft) {
                mainNavLeft = -parseInt(mainNavDom.css('left').split('px')[0]);
                if (mainNavLeft == 0) return;
                var nextMainNavLeft = -mainNavLeft + oneLevel0Width;
                if (nextMainNavLeft > 0) {
                    nextMainNavLeft = 0;
                }
                mainNavDom.animate({ 'left': nextMainNavLeft },500,function(){
                	showOrHideUlCtrlArrow(navContainer);
                });
            }
        });
        rightCtlArrow.unbind().click(function() {
            if (containerWidth < mainNavWidth && mainNavLeft >= -maxNavLeft) {
                mainNavLeft = -parseInt(mainNavDom.css('left').split('px')[0]);
                if (mainNavLeft == 0) mainNavLeft = 1;
                var nextMainNavLeft = -mainNavLeft - oneLevel0Width;
                if (nextMainNavLeft < -maxNavLeft) {
                    nextMainNavLeft = -maxNavLeft;
                }
                mainNavDom.animate({ 'left': nextMainNavLeft },500,function(){
                	showOrHideUlCtrlArrow(navContainer);
                });
            }
        });
    };

	/**
	 * 二级菜单点击事件，展开或收起三级菜单，只有在树状菜单时候才做此操作
	 */
    var bindLBarLevelToggleClick = function() {
        $('.level1 .dropdown-toggle').unbind().click(function() {
            var bodyCls = $('body').attr('class');
            var isLevel2Submenu = $(this).parent('li').attr('class').indexOf('level2') >= 0?true:false;
            //bodyCls.indexOf('miniMenu') >= 0 &&&& !isLevel2Submenu
            if (bodyCls.indexOf('treeNav') <= 0 ) return;
            var thisDom = $(this);
            if (thisDom.siblings('.submenu').is(':visible')) {
            	//关闭此菜单的submenu
                thisDom.removeClass('active');
                thisDom.siblings('.submenu').hide();
                $('>b', thisDom).removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
            } else {
            	//打开此菜单的submenu
                //closeLeftBarMenus();
                thisDom.addClass('active');
                thisDom.siblings('.submenu').show();
                $('>b', thisDom).removeClass('closeArrow').addClass('openArrow').html('&#xe6a3;');
            }
        });
    };
	
	/**
	 * 一级菜单点击事件，对二级菜单进行切换
	 */
    var bindLevel0Click = function() {
        $('#mainNav > .level0 > a').click(function() {
            var thisDom = $(this);
            var lev0Dom = thisDom.parent('.level0');
            var lev0SiblingsDom = thisDom.parent('.level0').siblings();
            var bodyCls = $('body').attr('class');

            $('#mainNav > .level0.active > a > b').removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
            lev0SiblingsDom.removeClass('active');
            if(bodyCls.indexOf('treeNav') >= 0 && lev0Dom.attr('class').indexOf('active') >=0){
                $(' .level1 a.active').removeClass('active');
                $(' .level1 a > b.openArrow').removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
            }
            if(bodyCls.indexOf('normalNav') >= 0){
                lev0Dom.addClass('active');
            }else{
                lev0Dom.toggleClass('active');
            }
            if (lev0Dom.attr('class').indexOf('active') < 0) {
                $('>b', thisDom).removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
                $(' .submenu', lev0Dom).removeAttr('style');
            } else {
                $('>b', thisDom).removeClass('closeArrow').addClass('openArrow').html('&#xe6a3;');
            }
            
            //回调函数
            if(initBarObj.level0AfterClickFun){
            	initBarObj.level0AfterClickFun();
            }
        });
    };
	
	/**
	 * 展开收起左侧菜单
	 */
    var bindHideOrOpenLeftBarClick = function() {
        function toggleMiniMenu() {
            $('body').toggleClass('miniMenu');
        }
        //定义打开收起左侧菜单按钮事件
        $('.controlLeftBarBtn').unbind().click(function() {
            var cls = $(this).attr('class');
            $('.controlLeftBarBtn').toggleClass('lsbOpening');
            if (cls.indexOf('lsbOpening') >= 0) {
                //收起左侧菜单
                initBarObj.BeforeCollapseFun();
                closeLeftBarMenus();
                toggleMiniMenu();
                initBarObj.AfterCollapseFun();
                bindLeftBarMouseFun();
                $('.controlLeftBarBtn').html('&#xe68c;');
            } else {
                //打开左侧菜单
                initBarObj.BeforeExpandFun();
                closeLeftBarMenus();
                toggleMiniMenu();
                clearLMiniBarStyle();
                initBarObj.AfterExpandFun();
                $('.controlLeftBarBtn').html('&#xe8cc;');
            }
            setLevel0SubmenuWidth();
            $('#thirdLevWrap').hide();
        });
    };

    function clearLMiniBarStyle(tagA) {
        if (tagA) {
            var _tagA = $(tagA);
            $('>.menuText', _tagA).removeAttr('style');
            $('>a>.menuText',_tagA.parent('li').siblings()).removeAttr('style');
            _tagA.siblings('.submenu').removeAttr('style');
            $('>a', _tagA.parent('li').siblings()).siblings('.submenu').removeAttr('style');
        } else {
        	var activeTitle = $('.tabs-selected .tabs-title').text();
        	var activeLevel0Txt = $('.level0.active>a>.menuText').text();
        	if(!(activeTitle == "首页" && $('.treeNav').length == 0 && activeLevel0Txt == "首页")){
	            $('.menuText').removeAttr('style');
	            $('.submenu').removeAttr('style');
        	}
        }
    }

    var bindLeftBarMouseFun = function() {
        //左侧菜单点击事件和mouseenter、mouseout事件
        var tagATimer = null;
        var _tagA, _dropdownmenu, _level0Tips;

        function clearTimmer(){
            clearTimeout(tagATimer);
            clearTimeout(_dropdownmenu.timer);
        }
        
        $('#mainNav .level1 > a').each(function() {
            var _tagA = $(this);
            _dropdownmenu = _tagA.siblings('ul');
            _level0Tips = $('.menuText', _tagA);
            var _tagAPLi = $(this).parent();
            var _tagAAll = $('#mainNav .level1 > a');
            _tagA.on('mouseenter', function() {
            	clearTimmer();
                var bodyCls = $('body').attr('class');
                //只有在有三级菜单或者最小化菜单时显示
                
                if (bodyCls.indexOf('treeNav') >= 0) return;
                _tagA = $(this);
                _tagA.flag = false;
                //鼠标进去展开浮动的子层
                var level1Top = parseInt($(this).parents('.submenu').css('top').split('px')[0]);
                var liTop = $(this).offset().top - level1Top;
                var thirdLevWrapTop = liTop + $(navContainer).height();
                var leftVal = calcLeftBarWidth();
                var h2Txt='', submenuTxt='', h3MoreHtml = '';
                
                if($('.miniMenu').length > 0){
                	leftVal = parseFloat(initBarObj.barsWidth.minWidth);
                }
                $('#thirdLevWrap').hide();
                _tagAAll.removeClass("active");
                _tagA.addClass("active");
                
                if($(this).attr('class').indexOf('hasClickFun')>= 0){
                	h3MoreHtml = 'class="hasClickFun"';
                }
                if($(this).attr('data-otype')){
                	h3MoreHtml += ' data-otype="'+$(this).attr('data-otype')+'"'; 
                }
                
                h2Txt = '<h3 '+h3MoreHtml+' idx="'+$(this).attr("id")+'" data-url="'+$(this).attr("data-url")+'"><span class="menuText">' + $('.menuText',$(this)).text() + '</span></h3>';
                if (_tagA.siblings('ul').length > 0) {
                    submenuTxt = '<ul>' + $(this).siblings('ul').html() + '</ul>';
                    $('#thirdLevWrap').removeClass('onlyH2');
                }else{
                	$('#thirdLevWrap').addClass('onlyH2');
                }
                $('#thirdLevWrap').html(h2Txt+submenuTxt).css({'top': thirdLevWrapTop+'px','left':leftVal+'px'});
                if(!(_tagA.siblings('ul').length == 0 && $('.miniMenu').length == 0)){
                	$('#thirdLevWrap').show();
                }
            }).on('mouseleave', function() {
            	_dropdownmenu = $(this).siblings('ul');
                //写简单左侧菜单的mouse离开导航条触发事件
                var bodyCls = $('body').attr('class');
                if (bodyCls.indexOf('treeNav') >= 0) return;
                clearTimmer();

                tagATimer = setTimeout(function() {
                    if (_tagA.flag) {
                        return;
                    }
                    //关闭子菜单
                    var bodyCls = $('body').attr('class');
                    if (bodyCls.indexOf('treeNav') >= 0) return;
                    $('#thirdLevWrap').hide();
                    _tagAAll.removeClass("active");
                }, 500);

                $('#thirdLevWrap').on('mouseenter', function() {
                    _tagA.flag = true;
                    clearTimmer();
                }).on('mouseleave', function() {
                	clearTimmer();
                    _dropdownmenu.timer = setTimeout(function() {
                        var bodyCls = $('body').attr('class');
                        if (bodyCls.indexOf('treeNav') >= 0) return;
                        $('#thirdLevWrap').hide();
                        _tagAAll.removeClass("active");
                    }, 500);
                });
            });
        });
    }

    //绑定菜单函数
    var bindNavFun = function(container, obj) {
        bindLBarLevelToggleClick();
        bindLevel0Click();
        bindHideOrOpenLeftBarClick();
    };

    function needNavCenter(isNeed){
        if(isNeed){
            $('body').addClass('leftNav');
            $('#mainNav').css({'left':'0px'});
        }
        if(!isNeed || $('body').attr('class').indexOf('treeNav') >= 0){
            $('body').removeClass('leftNav');
        }
    }
	
	/**
	 * 显示或隐藏控制一级菜单左右滑动按钮的显示隐藏和状态
	 * @param {Object} tag jquery dom
	 */
    var showOrHideUlCtrlArrow = function(tag) {
        var containerDom = tag ? $(tag):$(navContainer);
        var containerWidth = containerDom.width();
        var mainNavWidth = $('#mainNav').width();
        var mainNavLeft = -parseInt($('#mainNav').css('left').split('px')[0]);
        var maxNavLeft = mainNavWidth - (containerWidth - $('.bannerArrow').width() * 2);
        var leftCtlArrow = $('.leftArrowOrg.bannerArrow');
        var rightCtlArrow = $('.rightArrowOrg.bannerArrow');
        var typeCls = $('body').attr('class');
        if (typeCls.indexOf('treeNav') >= 0 || containerWidth >= mainNavWidth) {
            leftCtlArrow.hide();
            rightCtlArrow.hide();
            needNavCenter(true);
        } else if (containerWidth < mainNavWidth) {
            needNavCenter(false);
            leftCtlArrow.show();
            rightCtlArrow.show();
            if (mainNavLeft > 0) {
                leftCtlArrow.removeClass('gray');
            } else {
                leftCtlArrow.addClass('gray');
            }
            if (mainNavLeft+1 < maxNavLeft) {
                rightCtlArrow.removeClass('gray');
            } else {
                rightCtlArrow.addClass('gray');
            }
        }
    }
	
	/**
	 * 打开第一个页面作为首页
	 */
    var openFirstPage = function() {
        var firstLevel0ADom = $('.level0 > a:first');
        firstLevel0ADom.click();
        $(' > li:eq(0) > a', firstLevel0ADom.siblings('.submenu')).click();
        $('.level0:first .hasClickFun:first').click();
    }
	
	/**
	 * 树状菜单点击展开收起的事件
	 */
    var bindTreeNavToggleBtn = function() {
        $('.treeNav #menuControl1').unbind().click(function() {
        	var mainNavWrapDom = $('.mainNavWrap');
        	var thisCls = $(this).attr('class');
            if(thisCls.indexOf('active') >= 0){
            	mainNavWrapDom.hide();
            }else{
            	mainNavWrapDom.show();
            }
            $(this).toggleClass('active');
        });
    }
	
	/**
	 * 关闭所有的一级菜单
	 */
    var closeAllLevel0 = function(){
        $('.level0.active > a > b').removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
        $('.level0').removeClass('active');
    }

    //切换菜单类型type：normalNav/treeNav
    function changeNavType(type) {
        if (type == 'normalNav') {
            $('.treeNav #menuControl1').unbind();
            $('body').removeClass('treeNav').addClass('normalNav');
            //if($('body').attr('class').indexOf('miniMenu') >= 0){
                $('.submenu').removeAttr('style');
                $('.level1 > a').removeClass('active');
                $('.openArrow').removeClass('openArrow').addClass('closeArrow').html('&#xe8cb;');
            //}
            $('.mainNavWrap').removeAttr('style');
            if($('.level0.active').length == 0){
                $('.level0:eq(0)').addClass('active');
            }
            initNavUlWidth();
            showOrHideUlCtrlArrow();
        } else if (type == 'treeNav') {
            $('body').removeClass('normalNav').addClass('treeNav');
            $('.menuText').removeAttr('style');
            var _tagAAll = $('.miniMenu #mainNav .level1 > a');
            _tagAAll.removeClass('active');
            showOrHideUlCtrlArrow();
            initNavUlWidth();
            bindTreeNavToggleBtn();
            $('.mainNavWrap').show();
            closeAllLevel0();
        }
        $(window).resize();
    }
    
    /**
     * 递归找跟传入id相同的一级菜单，并设置为激活状态
     * @param {Object} id 对比的id
     * @param {Object} objs 菜单对象数组
     * @param {Object} index 第几个一级菜单
     */
    var recursionEqId = function(id, objs, index){
    	var hasFind = false;
    	if(objs){
			for(var j = 0; j < objs.length; j++){
				if(objs[j].id == id){
					if($('.level0:eq('+index+')').attr('class').indexOf('active') >= 0)return;
					$('.level0:eq('+index+') > a').click();
					hasFind = true;
					break;
				}
				if(!hasFind && objs[j].children){
					var tempObj1 = objs[j].children;
					recursionEqId(id, tempObj1, index);
				}
			}
		}
    	return;
    }
    
    /**
     * 反向激活当前tab的一级菜单，id要唯一
     * @param {Object} title
     * @param {Object} id
     * @param {Object} index
     */
    var tabEchoActiveMenu = function(title,id,index){
    	for(var i=0; i<initBarObj.data.length;i++){
    		if(initBarObj.data[i].id == id){
    			if($('.level0:eq('+i+')').attr('class').indexOf('active') >= 0)return;
    			$('.level0:eq('+i+') > a').click();
    		}else{
    			var tempObj = initBarObj.data[i].children;
    			recursionEqId(id, tempObj, i);
    		}
    	}
    }
	
	/**
	 * 初始化菜单
	 * @param {Object} navWrapDiv
	 * @param {Object} options
	 */
    var initBoncNav = function(navWrapDiv, options) {
        if(options.data.length > 0){
            initHtml(navWrapDiv, options);
            $(window).resize(function() {
                initNavUlWidth();
                bindMainNavCtrlBtn(navWrapDiv);
                showOrHideUlCtrlArrow(navWrapDiv);
                setLevel0SubmenuWidth();
            }).resize();
            bindNavFun(navWrapDiv, options);
            bindOnclickFun();
            if(options.openFirstPage){
            	openFirstPage();
            }else{
            	//激活第一个菜单
            	$('.level0:first-child >a ').click();
            }
            bindLeftBarMouseFun();
            //左侧菜单收起
            //$('.controlLeftBarBtn:eq(0)').click();
        }
    }
    $.fn.boncNav = function(options) {
        if (typeof options == 'string') { //如果options不是对象，而是字符串，默认调用其方法，参数传递进来
            return $.fn.boncMenu.methods[options](this, param);
        }
        //创建一些默认值，拓展任何被提供的选项
        var options = $.extend({
            data: [],
            "openFirstPage":true,
            "onClick": onclickFun,
            "BeforeExpandFun": doNothing,
            "AfterExpandFun": doNothing,
            "BeforeCollapseFun": doNothing,
            "AfterCollapseFun": doNothing,
            "barsWidth": {
                "minWidth": "42",
                "ExpandWidth1": "185",
                "ExpandWidth2": "15%",
                "mediaWidth": "1400",
                "level0Width":75,//一级菜单的宽度
        		"level0WrapMinusWidth":540//h1标签宽度和.userRelated宽度的和
            }
        }, options);

        return this.each(function() {
            initBarObj = options;
            navContainer = this;
            initBoncNav(this, options);
        });
    };
    //对外提供的方法
    $.fn.boncNav.methods = {
        changeNavType: function(type) {
            changeNavType(type);
        },
        tabEchoMenu:function(title,id,index){
        	tabEchoActiveMenu(title,id,index);
        }
    };
})(jQuery);
