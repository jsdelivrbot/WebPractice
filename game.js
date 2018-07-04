var secretNumber = 4;
while (true) {
var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
	alert("you got it right");
} else {
	alert("wrong. too close");	
}
}
