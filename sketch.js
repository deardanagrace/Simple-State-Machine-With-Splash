/***********************************************************************************
Simple State Machine with Splash
	by Dana Capistrano

	Template by Scott Kildall! 

OverView:
A bunch of moods that when you click on some keys and the mouse, it changes. Now featuring:
instructions! and for...loops :) 
As well as arrays for text and image 

***********************************************************************************/

// Array of images
var images = [];

//Array of text
var strings = [];

//variables for text styling
var midX;
var startY;
var lineHeight = 40;

//color of "postit background"
var offwhite = '#dcdaa9';
//color of text color
var orangetext = '#f96b03';

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

 //text styling
  midX = width/2;
  startY = 30;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
    rectMode(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background('#01633d');

  // will call your state machine function
  drawFunction();

 fill(255);
 for (let i=0 ; i < strings.length; i++) {
 	text (strings[i], midX, startY + (i * lineHeight) )
 }
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
    //background
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);

    //image
    image(images[0], width / 2, height / 2);

    //text
    fill(orangetext);
    text("Are you motived?", width / 2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   //background
    noStroke();
    fill(orangetext);
    square(width / 2, height / 2, 700);

    //image
    image(images[1], width / 2, height / 2);

    //text
    fill(offwhite);
    text("Are you over caffinated?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);

    //image
    image(images[2], width / 2, height / 2);

    //text
    fill(orangetext);
    text("Are you Anxious?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
    //background
    noStroke();
    fill(orangetext);
    square(width / 2, height / 2, 700);

    //Images
    image(images[3], width / 2, height / 2);

    //text
    fill(offwhite);
    text("Are you lonely?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   //background
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);

    //image
    image(images[4], width / 2, height / 2);

    //text
    fill(orangetext);
    text("Are you Overworked?", width / 2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
   text("click for instructions", width/2, height - gTextOffset);
}

drawInstructions = function (){
	text ("Press 1-5 for different moods, Press s for splash page", width/2, height/2);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }

  else if( key === 'h' ) {
    drawFunction = drawSplash;
  }
}

function loadInstructionsArray(){
	strings[0] = "How to Use:";
	strings[1] = "Press H to go to the homescreen";
	strings[2] = "Press 1-5 on the numpad to cycle through moods";
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = loadInstructionsArray;
  }
}