'use strict';

var selectData = [
	{text: '日常工作0'},
	{text: '日常工作1'},
	{text: '日常工作2'}
];

$(function() {
	//	加载工单性质下拉框
	peacock.initCommonSelect('.common-select', selectData);
})

