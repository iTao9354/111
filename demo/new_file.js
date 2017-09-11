// 补0函数
	function toDouble(n) {
		return n < 10 ? '0'+n : '' + n;
	}
	_peacock.toDouble = toDouble;
	
	// 求总和函数
	function sum(arr) {
		var res = 0;
		for(var i = 0; i < arr.length; i++) {
			res += arr[i].value;
		}
		return res;
	}
	_peacock.sum = sum;