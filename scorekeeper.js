var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var reset=document.querySelector("#reset");
var numInput=document.querySelector("input[type='number']");

var gameOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;
p1Button.addEventListener("click", function() {
	if(!gameOver) {
	p1Score++;
	if(p1Score === winningScore){
		gameOver=true;
		p1Display.classList.add("winningScore");

	}
	p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
	p2Score++;
	if(p2Score === winningScore){
		gameOver = true;
		p2Display.classList.add("winningScore");
	}
	p2Display.textContent = p2Score;
}
});


reset.addEventListener("click", function(){
	resset();
});

function resset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winningScore");
	p2Display.classList.remove("winningScore");
	gameOver =false;
}
numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
	winningScoreDisplay.textContent = winningScore;
	resset();
});