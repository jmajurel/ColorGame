var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modes = document.querySelectorAll(".mode");

init();

function init() {
  setupModes();
  setupSquares();
  reset();
}

function setupModes() {
  for(var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function() {
      modes[0].classList.remove("selected");
      modes[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "EASY") {
        numSquares = 3;
      }
      else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {

    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY AGAIN?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      };
    });
  };
}

function reset() {

  //Init reset textcontent
  resetButton.textContent = "NEW COLORS";

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();

  //update header
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";

  for( var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i]; 
    } else {
      squares[i].style.display = "none";
    }
  }
  //reset message Display
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", reset);


function changeColors(color) {
  //loop throuh all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for( var i =0; i< num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {

  //for red
  var r = Math.floor(Math.random() * 256);

  //for green
  var g = Math.floor(Math.random() * 256);

  //for blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
