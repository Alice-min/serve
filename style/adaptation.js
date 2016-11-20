//整体缩放
function resetZoom(){
	var deviceWidth=document.documentElement.clientWidth;//获取设备宽度
	var scale=deviceWidth/640;//640设计稿宽度
	document.body.style.zoom=scale;
}
resetZoom();
window.onresize=function (){
	resetZoom();
}