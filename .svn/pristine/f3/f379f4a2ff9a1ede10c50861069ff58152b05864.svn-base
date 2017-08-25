;(function($) {
	function searchExist(targetDom, id){
		
	}
	function selectTab(thisDom,id){
		
	}
	function addTab(thisDom,obj){
		var thisDom = $(thisDom);
		
	}
	$.fn.boncTab = function(options) {
        if (typeof options == 'string') { //如果options不是对象，而是字符串，默认调用其方法，参数传递进来
            return $.fn.boncTab.methods[options](this, param);
        }

        return this.each(function() {
            initBarObj = options;
            navContainer = this;
            initBoncNav(this, options);
        });
    };
    //对外提供的方法
    $.fn.boncTab.methods = {
    	"exists" : searchExist(thisDom,id),
    	"select" : selectTab(thisDom,id),
    	"add" : addTab(thisDom,obj)
    };
})(jQuery);
