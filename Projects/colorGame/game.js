var noOfColors = 6;
var colors = [];
var pickedColor;

var btnReset = document.querySelector("#btnReset");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");
var btnMode = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".squares");
var h1 = document.querySelector("h1");
var result = document.querySelector("#result");
var displayPicked = document.querySelector("#displayPicked");

function init() {
	eventSetupOption();
	setupSquares();
	setupResetButton();
	reset();
}

function generateColors(num) {
	colors = [];
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		colors.push(`rgb(${r}, ${g}, ${b})`);
	}
	console.log("Generated colors: ", num);
}

function eventSetupOption() {
	for (var i = 0; i < btnMode.length; i++) {
		btnMode[i].addEventListener("click", function () {
			btnMode[0].classList.remove("selected");
			btnMode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (noOfColors = 3) : (noOfColors = 6);
			reset();
		});
	}
}

function reset() {
	generateColors(noOfColors);
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	var index = Math.floor(Math.random() * noOfColors); //since array index starts at 0, we dont need to multiply with noOfColors+1
	pickedColor = colors[index];
	displayPicked.textContent = pickedColor;
	result.textContent = "";
	h1.style.backgroundColor = "steelblue";
	btnReset.textContent = "New Colors";
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				h1.style.backgroundColor = pickedColor;
				result.textContent = "Correct";
				btnReset.textContent = "Play Again?";
				changeColor(pickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				result.textContent = "Try Again";
			}
		});
	}
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function setupResetButton() {
	btnReset.addEventListener("click", reset);
}

init();
