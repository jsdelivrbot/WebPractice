var button = document.querySelector("button");

var colorFunc = function() {

	var body = document.querySelector("body");
	body.classList.toggle("highlight");
};
 
button.addEventListener("click",colorFunc);