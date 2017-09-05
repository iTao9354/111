style="red";
/*
 * 换肤功能
 */
function toggleSkin(style){
	 $(".tabs").find("li.tabs-selected .icon-refresh").click();
	var curentMain_link=$('#mainLink');
	
	if(style=="red"){
		curentMain_link.attr("href","css/main/main.css");
		$("i.red").parents("li").addClass("active");
	}if(style=="blue"){
		curentMain_link.attr("href","css/main/mainBlue.css");
		$("i.blue").parents("li").addClass("active");
	}
}

function showFSBdiv(){
	$("#fsb span").addClass("yesShow");
	$("#fsb .full-screen-btn").addClass("yesShow");
}

function changeSkin(style){
	$(".sub-model").removeClass("active");
	   $.ajax({
 		url: webpath +"user/updateUserStyle?json",
 		/*async: true,*/
 		type: "POST",
 		data : {userId : userId,userStyle:style},
 		dataType:'json',
 		error:function(){},
 		success:function(data){
 			toggleSkin(style);
 			layer.msg('修改样式成功！', {time: 1000, icon:1});	
 		}
 	}); 
	   
}
$(window).resize();
var tabPanel,i=0,tabCount=1;
var timer, timerMenu,isRun = 1,changeTime = 10*1000,cloneLabel,tabsLength,track=0,istoggle=0;
//框架显示页脚
function toggleFoot(){
	var ckText = $(".btnToggleFoot").text();
	if(ckText == '显示页脚'){
		$(".btnToggleFoot").text('隐藏页脚');
		$('.frameFooter').addClass('footer');
		$(".frame-content").addClass('footer');
		$(window).resize();
	}
	else{
		$(".btnToggleFoot").text('显示页脚');
		$('.frameFooter').removeClass('footer');
		$(".frame-content").removeClass('footer');
		$(window).resize();
	}
}
/*全屏显示*/
/**
 * 暂停按钮
 * isRun=0:播放
 * isRun=1:暂停
 */
var pauseCls ="../dist/img/main/pause.png";
var runCls = "../dist/img/main/run.png";

function fullScream() {
	$("#fsb").removeClass("noElement");
	$(".frame-head,.frameFooter").addClass("frameHide");
	$("#tabs .tabs-header").addClass("add-track");
	$("#tabs").tabs('hideHeader');
	$(".frame-content").addClass('full').removeClass('not-full');
	$("#fsb .badge").text($('#tabs').tabs('tabs').length);
	$(window).resize();
	//$("#fsb .full-screen-btn").removeClass("yesShow"); 
	//$("#fsb span").removeClass("yesShow");
	$('.triangle').hide();
	$('.track .badge').show();
	$(window).resize(function() {
		$('.triangle').hide();
		$('.track .badge').show();
	});	
}
function fullhover(){
	$("#fsb").hover(function (){ 
		if($('#tabs .tabs-wrap').height()) {
			$('.triangle').show();
		}else {
			$('.triangle').hide();
		}
	});
	
	$("#fsb").on('hover','.full-screen-btn',function(){		
		if($(this).hasClass('track')){
			$(this).children('.badge').toggleClass("imgHover");
			$(this).children('img').toggleClass("imgHover");
		}else{
			$(this).children('img').toggleClass("imgHover");
		}	
	});
	
}
/*取消全屏显示*/
function outFullScream(){
	$('#tabs .add-track').show();
	$("#fsb").addClass("noElement");
	$("#tabs").tabs('showHeader');
	$("#tabs .tabs-header").removeClass("add-track");
	$(".frame-head, .frameFooter,.tabs-header").removeClass("frameHide");
	$(".frame-content").addClass('not-full').removeClass('full');
	$(".btnToggleScreen").text('切换窄屏');
	$(window).resize();
	clearInterval(timer);
	track=0;
	isRun = 1;
	$("#pause").attr("title","播放");
	$("#pause").attr("src",pauseCls);
}
	
function pauseLoop(){
	if(isRun==0){
		clearInterval(timer);
		isRun = 1;
		$("#pause").attr("title","播放");
		$("#pause").attr("src",pauseCls);
		$("#pause").get(0).src=pauseCls;
	}else{
		timer = setInterval("nextScream();",changeTime);
		isRun = 0;
		$("#pause").attr("title","暂停");
		$("#pause").attr("src",runCls);
		$("#pause").get(0).src=runCls;
	}
}
/**
 * 下页
 */
function nextScream(){
	var selDiv = $(".tabs").find("li.tabs-selected");
	if(selDiv.next().length==1){
		selDiv.next().click();
	}else{
		$(".tabs").find("li.tabs-first").click();
	}
}
/**
 * 上页
 */
function prevScream(){
	var selDiv = $(".tabs").find("li.tabs-selected");
	if(selDiv.prev().length==1){
		selDiv.prev().click();
	}else{
		$(".tabs").find("li.tabs-last").click();
	}
}
/**
 * 刷新
 */
function  reloadIframe(){
	 $(".tabs").find("li.tabs-selected .icon-refresh").click();
}
//全屏显示浏览轨迹
//------------------------
function getTrack(){
	if(!$('#tabs .tabs-wrap').height()) {
		$('#tabs .add-track').show();
		$('.triangle').show();
		$('.tabs-header,.tabs-wrap').height('auto');
		$("#fsb .badge").text($('#tabs').tabs('tabs').length);
		$('.track .badge').hide();
	}else {
		$('#tabs .add-track').hide();
		$('.triangle').hide();
		$('.track .badge').show();
	}
	$('#tabs .add-track .tabs li').click(function(){
		$('.triangle').hide();
		$('.track .badge').show();
	});
}

/*展开全屏操作菜单*/
function spreadFsb(){
	$('#fsb').removeClass('noElement');
	$('.fsbordMenu').removeClass('active');
}

/*收起全屏操作菜单*/
function collapseFsb(){
	$('.fsbordMenu').addClass('active');
	$('#fsb').addClass('noElement');
	if($('#tabs .tabs-wrap').height()) {
		$('#tabs .add-track').hide();
		$('.track .badge').show();
		$('.triangle').hide();
	}
}

//全屏esc退出
;(function(f){
	if(document.attachEvent){
		document.attachEvent('onkeydown', function(){
			if(event.keyCode == 27){
				f.call(this, event);
			}
		});
		window.frames.document.attachEvent('onkeydown', function(){
			if(event.keyCode == 27){
				f.call(this, event);
			}
		});
		
	}else{
		document.addEventListener('keydown', function(e){
			if(e.which == 27){
				f.call(this, e);
			}
		}, false);
		window.frames.document.addEventListener('keydown', function(e){
			if(e.which == 27){
				f.call(this, e);
			}
		}, false);
	}
})(function(e){
	/** 这里编写当ESC按下时的处理逻辑！ */
	outFullScream();
});


function stopClick(){
	return false;
}


$(function(){
	fullhover();
	//换肤功能
	toggleSkin(style);
	
	$("#track").click(function(){
		getTrack();
	});
	
	$('.fsbordMenu').draggable({
		cursor:"pointer",
		onBeforeDrag:function(){
			$('.fsbordMenu').bind('click',stopClick);
		},
		onDrag : function(e){
			var d = e.data;
            if (d.top < 0){d.top = 0}
            if (d.top + $(d.target).outerHeight() > window.innerHeight){
                d.top = window.innerHeight - $(d.target).outerHeight();
            }
		},
		onStopDrag:function(e){
			$('.fsbordMenu').unbind('click').bind('click',spreadFsb);
		}
	});
});