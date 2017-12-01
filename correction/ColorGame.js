var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

var pickedColor = colors[3];
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {

  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var squareBackground = this.style.backgroundColor;
    //compare color to pickedColor
    if(squareBackground === pickedColor) {
      console.log("You won!");
    } else {
      console.log("Try again");
    };
  });
};

