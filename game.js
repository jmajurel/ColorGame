var redcolor = document.querySelector("#red-color");
var greencolor = document.querySelector("#green-color");
var bluecolor = document.querySelector("#blue-color");
var menu = document.getElementById("menu");
var messageInd = document.getElementById("message");
var easymodebtn = document.querySelector("#easy-mode");
var hardmodebtn = document.querySelector("#hard-mode");
var colorSquares = document.querySelectorAll('.color:not(.invisible)'); 
var header = document.getElementById("header");
var gameMode = "hard";

var defaultColor = {
  red: 0,
  green: 161,
  blue: 255 
};

var guessColor = getRandomColor();
setupGame();

function convertColorObjToRGB(color) {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`; 
};

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
  return {
    red: getRandomColorElement(),
    green: getRandomColorElement(),
    blue: getRandomColorElement()
  };
};

/*
* Update the Color Indicator
*/
function updateIndicator(guessColor) {
  redcolor.textContent = guessColor.red;
  greencolor.textContent = guessColor.green;
  bluecolor.textContent = guessColor.blue;
};

/*
 * Update the Color square in the game room
*/
function updateGameRoom(guessColor) {

  var colorSquares = document.querySelectorAll('.color:not(.invisible)'); 
  var randomLocation = getRandomIntInclusive(0, colorSquares.length-1);
  var count = 0;
  colorSquares.forEach(function(square){
    if(count === randomLocation) {
      square.style.background = convertColorObjToRGB(guessColor);
    }
    else{
      var randColor = getRandomColor(); 
      square.style.background = convertColorObjToRGB(randColor);
    }
    count++;
  });
};

function initalizationHeader() {
   header.style.background = convertColorObjToRGB(defaultColor);
}

function initalizationGameRoom(mode) {
  var colorSquares = document.querySelectorAll(".color"); 
  var count = colorSquares.length;
  if(mode === "easy") {
    easyMode();  
  } else {
    hardMode();
  };
};

/*
 * This function will update the user message in the navbar
 */
function updateMessage(newMessage) {
  messageInd.textContent = String(newMessage); 
};

function setupGame() {
  menu.textContent = "NEW COLORS";
  //Initialization Header
  initalizationHeader();
  //Initialisation
  initalizationGameRoom(gameMode);
  //Generate new color
  guessColor = getRandomColor();
  //update indicator
  updateIndicator(guessColor);
  //update gameroom
  updateGameRoom(guessColor); 
  //update message
  updateMessage("");

};

function success(rgb) {
  updateMessage("Well Done!");
  header.style.background = rgb; 
  var colorSquares = document.querySelectorAll(".color"); 
  colorSquares.forEach( function(square) {
    square.classList.remove("invisible"); 
    square.style.background = rgb;
    square.classList.add("disabled");
  });
};

function easyMode() {
  var colorSquares = document.querySelectorAll(".color"); 
  for(var i = 3; i < colorSquares.length; i++) {
    colorSquares[i].classList.add("invisible") ;
  };
  gameMode = "easy";
};

function hardMode() {
  var colorSquares = document.querySelectorAll(".color"); 
  for(var i = 3; i < colorSquares.length; i++) {
    colorSquares[i].classList.remove("invisible") ;
  };
  gameMode = "hard";
};

function lost(square) {
  updateMessage("Try Again");
  square.classList.add("invisible");
};

function game() {
  var rgb = convertColorObjToRGB(guessColor); 
  if(this.style.background == rgb){
    success(rgb);
  }
  else if(this.style.background != rgb){
    lost(this);
  }; 
  menu.textContent = "PLAY AGAIN";
};

menu.addEventListener("click", setupGame);

easymodebtn.addEventListener("click", function() {
  easyMode();
  setupGame();
});

hardmodebtn.addEventListener("click", function() {
  hardMode(); 
  setupGame();
});

colorSquares.forEach(function(square) {
  square.addEventListener("click", game);
}); 

