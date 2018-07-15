var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons
	setUpModeButtons();
	//setup square listeners
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for(var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent==="Easy"?numberOfSquares=3:numberOfSquares=6;

			reset(numberOfSquares);
		});
	}
}

function setUpSquares() {
	for(var i=0;i<squares.length;i++) {
		//not needed bcoz we will call the reset button
		//squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent="Correct";
				changeColors(clickedColor);
				resetButton.textContent="Play Again?";
			} else {
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}
}

function reset() {
	//pick random colors
	colors = generateRandomColors(numberOfSquares);
	
	//pick random color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor=colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
}

/*easyBtn.addEventListener("click",function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		} else {
			squares[i].style.display="none";
		}
	}

});

hardBtn.addEventListener("click",function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++) {
		
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		
	}
});*/

resetButton.addEventListener("click", function(){
	/*colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<colors.length;i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent="New Colors";
	messageDisplay.textContent="";*/
	reset();
});

//we are doing this in reset button so commenting
//colorDisplay.textContent = pickedColor;

function changeColors(color) {

	for(var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=color;
	}

	h1.style.backgroundColor = color;

}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for(var i=0;i<num;i++) {
		var random = randomColor();
		arr.push(random);
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return `rgb(${r}, ${g}, ${b})`;
}