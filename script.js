//your JS code here. If required.
function getSize(){
	var x = document.documentElement.clientWidth;
	var y = document.documentElement.clientHeight;

	document.getElementById("sizeInfo").innerHTML = "<h1>Width: " + x + " and Height: " + y + "</h1>"
}