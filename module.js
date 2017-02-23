var Lib = Lib || {};
Lib.output = function(){
	var element = document.getElementById("message");
	var color = "black";
	
	function write(msg){
		element.innerHTML += formatMessage(msg);
	}
	function setColor(col){
		color = col;
	}
	function clear(){
		element.innerHTML = "";
	}
	function formatMessage(msg){
		return '<p style="color:'+color+'">'+msg+'</p>';
	}
	return {
		write : write,
		$: write,
		setColor : setColor,
		clear: clear	
	};
}();