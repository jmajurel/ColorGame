var redcolor = document.querySelector("#red-color");
var greencolor = document.querySelector("#green-color");
var bluecolor = document.querySelector("#blue-color");
var menu = document.getElementById("menu");
var messageInd = document.getElementById("message");
var easymodebtn = document.querySelector("#easy-mode");
var hardmodebtn = document.querySelector("#hard-mode");
/*
* Return a random number between two values inclusive
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

/*
* Return a random color Element
*/
function getRandomColorElement() {
  return getRandomIntInclusive(0, 255);
};

/*
 * Generate random color.
 * The function will return a color object obtaining the three elements Red, Green and Blue
*/
function getRandomColor() {
  var randomColor = {
    red: getRandomColorElement(),
    green: getRandomColorElement(),
    blue: getRandomColorElement()
  };
  return randomColor; 
};

/*
* Update the Color Indicator
*/
function updateIndicator(newColor) {
  redcolor.textContent = newColor.red;
  greencolor.textContent = newColor.green;
  bluecolor.textContent = newColor.blue;
};

/*
 * Update the Color square in the game room
*/
function updateGameRoom(newColor) {
  var colorSquares = document.querySelectorAll('.color:not(.invisible)'); 
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
};

/*
 * This function will update the user message in the navbar
 */
function updateMessage(newMessage) {
  messageInd.textContent = String(newMessage); 
};

function newGame() {
  //Generate new color
  var newColor = getRandomColor();
  //update indicator
  updateIndicator(newColor);
  //update gameroom
  updateGameRoom(newColor); 
  //update message
  updateMessage("");

};

menu.addEventListener("click", newGame);

easymodebtn.addEventListener("click", function() {
  var colorSquares = document.querySelectorAll(".color"); 
  for(var i = 3; i < colorSquares.length; i++) {
    colorSquares[i].classList.add("invisible") ;
  };
  newGame();
}); 

hardmodebtn.addEventListener("click", function() {
  var colorSquares = document.querySelectorAll(".color"); 
  for(var i = 3; i < colorSquares.length; i++) {
    colorSquares[i].classList.remove("invisible") ;
  };
  newGame();
}); 

