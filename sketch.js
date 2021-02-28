/***********************************************************************************
	Rooms of My "Dream" House
	by Sean Ko

------------------------------------------------------------------------------------
	Take a tour of my minimalistic eco-friendly and plant-friendly home through simple states (rooms)!


***********************************************************************************/

// image variables
var typeAssets[];

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
}

//splash draw function
drawSplash = function() {
  image(typeAssets[0], width/2, height/2);
}

//living room draw function

drawlivingRoom = function() {
   image(livingRoomAssets[0],width/2, height/2);
   image(livingRoomAssets[1],280, 680);
}

//bedroom draw function
drawbedRoom = function() {
   image(bedRoomAssets[0],width/2, height/2);
   image(bedRoomAssets[1],871, 582);
}

//office draw function
drawOffice = function() {
   image(officeAssets[0],width/2, height/2);
   image(officeAssets[1],width/2, 100);
}

//dining room draw function
drawdiningRoom = function() {
   image(diningRoomAssets[0],width/2, height/2);
   image(diningRoomAssets[1], 550, 518);
}

//bathroom draw function
drawbathRoom = function() {
   image(bathRoomAssets[0],width/2, height/2);
   image(bathRoomAssets[1],width/2, 660);
}

//garage draw function
drawgarage = function() {
   image(garageAssets[0],width/2, height/2);
   image(garageAssets[1], 400, 550);
}

// Change the drawFunction variable based on your interaction
function keyTyped() {
//living room nav options
  if( drawFunction === drawlivingRoom ) {
    if(key === '4') {
      drawFunction = drawdiningRoom;
    }
    else if(key === '6'){
      drawFunction = drawgarage;
  }
}
//bedroom nav options
  if( drawFunction === drawbedRoom ) {
    if(key === '5') {
      drawFunction = drawbathRoom;
    }
  }
//office room nav options
  if( drawFunction === drawOffice ) {
    if(key === '4') {
      drawFunction = drawdiningRoom;
    }
    else if(key === '5'){
      drawFunction = drawbathRoom;
  }
}
//dining room nav options
  if( drawFunction === drawdiningRoom ) {
    if(key === '1') {
      drawFunction = drawlivingRoom;
    }
    else if(key === '3'){
      drawFunction = drawOffice;
  }
}

//bathroom nav options
  if( drawFunction === drawbathRoom ) {
    if(key === '2') {
      drawFunction = drawbedRoom;
    }
    else if(key === '3'){
      drawFunction = drawOffice;
  }
}
 
//garage nav options
  if( drawFunction === drawgarage ) {
    if(key === '1') {
      drawFunction = drawlivingRoom;
    }
}
}
