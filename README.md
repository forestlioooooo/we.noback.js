# we.noback.js

--------------------------------------

微信『**扫码**』打开网页应用，后退转接页核心代码；

作用：
>在即将后退结束（再后退一次就退出微信浏览器）的时候，提醒用户

用法:

```html
<body>
<div id="notification" style="display:none;" >
	<p>即将退出应用!</p>
	<button type="button" onclick="window.history.go(1);">留在应用内</button>
</div>

<script src="./assets/js/we.noback.min.js" ></script>
<script>
	window.noback(function(redirect){
		if(!r){
			document.getElementById('notification').style.display = '';
		}else{
			redirect('./app.html');
		}
	});
</script>
</body>
```
