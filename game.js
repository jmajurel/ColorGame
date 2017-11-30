var redcolor = document.querySelector("#red-color");
var greencolor = document.querySelector("#green-color");
var bluecolor = document.querySelector("#blue-color");
var menu = document.getElementById("menu");
var messageInd = document.getElementById("message");

/*
* Return a random number between two values inclusive
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

/*
* Return a random color Element
*/
function getRandomColorElement() {
  return getRandomIntInclusive(0, 255);
}

function getRandomColor() {
  var randomColor = {
    red: getRandomColorElement(),
    green: getRandomColorElement(),
    blue: getRandomColorElement()
  };
  return randomColor; 
}

/*
* Update the Color Indicator
*/
function updateIndicator(newColor) {
  redcolor.textContent = newColor.red;
  greencolor.textContent = newColor.green;
  bluecolor.textContent = newColor.blue;
}

function updateGameRoom(newColor) {
  var colorSquares = document.querySelectorAll(".color"); 
  var randomLocation = getRandomIntInclusive(0,colorSquares.length-1);
  var count = 0;
  colorSquares.forEach(function(square){
    if(count === randomLocation) {
      square.style.background = `rgb(${newColor.red}, ${newColor.green}, ${newColor.blue}`; 
    }
    else{
      var randColor = getRandomColor(); 
      square.style.background = `rgb(${randColor.red}, ${randColor.green}, ${randColor.blue}`; 
    }
    count++;
  });
}

function updateMessage(newMessage) {
  messageInd.textContent = String(newMessage); 
}

menu.addEventListener("click", function(){
  //Generate new color
  var newColor = getRandomColor();
  //update indicator
  updateIndicator(newColor);
  //update gameroom
  updateGameRoom(newColor); 
  //update message
  updateMessage("");
});
