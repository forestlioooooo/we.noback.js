(function(window, undefined) {
	'use strict';

	/**
	Usage:
	```javascript
	window.noback(function(redirect){
		if(!redirect){
			// 显示即将退出提醒
		}else{
			redirect('./app.html'); // enter the web app
		}
	});
	```*/
	window.noback = function(callback) {
		if (window.history.length == 1 || (window.location.search.indexOf('?noback') == 0 && window.history.length > 1)) {
			callback(function(url) {
				window.setTimeout(function() {
					window.location = url;
				}, 100);
			});
		} else {
			callback(undefined);
		}
	};
})(window);
