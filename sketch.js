/***********************************************************************************
	Rooms of My "Dream" House
	by Sean Ko

------------------------------------------------------------------------------------
	Take a tour of my minimalistic eco-friendly and plant-friendly home through simple states (rooms)!


***********************************************************************************/
// Global
var gDebugMode = false;

// image variables
var typeAssets = [];

// instruction screen

var instructions = []; 

// variables used for instructions 
var midX; 
var startY;
var lineHeight = 48;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  //pokemon type images
  typeAssets[0] = loadImage('assets/splash.png');
  typeAssets[1] = loadImage('assets/fire.png');
  typeAssets[2] = loadImage('assets/water.png');
  typeAssets[3] = loadImage('assets/electric.png');
  typeAssets[4] = loadImage('assets/ground.png');
  typeAssets[5] = loadImage('assets/flying.png');
  typeAssets[6] = loadImage('assets/grass.png');
  typeAssets[7] = loadImage('assets/ice.png');
  typeAssets[8] = loadImage('assets/dragon.png');
  typeAssets[9] = loadImage('assets/psychic.png');
  typeAssets[10] = loadImage('assets/dark.png');
  typeAssets[11] = loadImage('assets/ghost.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 800);

// Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

// set to one for startup
  drawFunction = drawSplash;
}

//calls state machine function
function draw() {
  drawFunction();

//debug
    if( gDebugMode == true ) {
    drawDebugInfo();
  }
}

//splash screen draw function
drawSplash = function() {
  image(typeAssets[0], width/2, height/2);
}

//fire type draw function
drawfire = function() {
   image(typeAssets[1],width/2, height/2);

   // click to grass state
   if ( mouseIsPressed ) {
    if ( mouseX >= 320 && mouseX <= 416 ){
      if ( mouseY >= 340.5 && mouseY <= 371.5){
        drawFunction = drawgrass;
      }
    }
   }

   // // click to ice state 
   // if ( mouseIsPressed ) {
   //  if ( mouseX >= 320 && mouseX <= 416 ){
   //    if ( mouseY >= 340.5 && mouseY <= 371.5){
   //      drawFunction = drawice;
   //    }
   //  }
   // }
}

//water type draw function
drawwater = function() {
   image(typeAssets[2],width/2, height/2);
}

//electric type draw function
drawelectric = function() {
   image(typeAssets[3],width/2, height/2);
}

//ground type draw function
drawground = function() {
   image(typeAssets[4],width/2, height/2);
}

//flying type draw function
drawflying = function() {
   image(typeAssets[5],width/2, height/2);
}

//grass type draw function
drawgrass = function() {
   image(typeAssets[6],width/2, height/2);
}

//ice type draw function
drawice = function() {
   image(typeAssets[7],width/2, height/2);
}

//dragon type draw function
drawdragon = function() {
   image(typeAssets[8],width/2, height/2);
}

//psychic type draw function
drawpsychic= function() {
   image(typeAssets[9],width/2, height/2);
}

//dark type draw function
drawdark = function() {
   image(typeAssets[10],width/2, height/2);
}

//ghost type draw function
drawghost = function() {
   image(typeAssets[11],width/2, height/2);
}

  //debug function
function drawDebugInfo() {
  fill(0);
    text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

// keyTyped gets triggered 
function keyTyped() {
  if (key === ' ') {
    gDebugMode = !gDebugMode;
  }
}

// Change the drawFunction variable based on your interaction

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawfire;
  }
}



