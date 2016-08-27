function Ajax(){
	this.ajax=null;
	if(window.XMLHttpRequest){
		this.ajax = new XMLHttpRequest();
	}else{
		this.ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
}
Ajax.prototype.post = function(url, mess, fn){
	var _this = this;
	_this.ajax.open("post", url, true);
	_this.ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	_this.ajax.send(mess);
	_this.ajax.onreadystatechange = function(){
		if(_this.ajax.readyState == 4 && _this.ajax.status == 200){
			fn(_this.ajax.responseText);
		}
	}
};
Ajax.prototype.get = function(url, fn){
	var _this = this;
	_this.ajax.open("get", url + "?" + new Date().getTime(), true);
	_this.ajax.send();
	_this.ajax.onreadystatechange = function(){
		if(_this.ajax.readyState == 4 && _this.ajax.status == 200){
			fn(_this.ajax.responseText);
		}
	}
};
function ajax() {
	return new Ajax();
}












/*
*5/1
*5/29
*7/5
*8/4
*8/27
*/
