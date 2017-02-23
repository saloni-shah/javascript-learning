var table = document.getElementById("multiplication");
var tcols = table.getElementsByTagName("col");

table.addEventListener("mouseover",TableHandler);
table.addEventListener("mouseout",TableHandler);

function TableHandler(e){
	var t = e.target;
	//console.log(t.parentNode);console.log(t.cellIndex);
	if (t.nodeName != "TD") return;
	var cName = (e.type  == "mouseover" ? "active" : "");
	t.parentNode.className = cName;
	tcols[t.cellIndex].className = cName;
}