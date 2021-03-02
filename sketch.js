/***********************************************************************************
	Pokemon Type Advantage Guide (Project 1)
	by Sean Ko

------------------------------------------------------------------------------------
	Take a tour of my minimalistic eco-friendly and plant-friendly home through simple states (rooms)!


***********************************************************************************/
// Global
// var gDebugMode = false;

// image variables
var typeAssets = [];

// variable that is a function 
var drawFunction;

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
  // textSize(24);

// set to one for startup
  drawFunction = drawSplash;
}

//calls state machine function
function draw() {
  drawFunction();

//debug
  //   if( gDebugMode == true ) {
  //   drawDebugInfo();
  // }
}

//splash screen draw function
drawSplash = function() {
  image(typeAssets[0], width/2, height/2);
}

//fire type draw function
drawfire = function() {
   image(typeAssets[1],width/2, height/2);
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
drawrock = function() {
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

//   //debug function
// function drawDebugInfo() {
//   fill(0);
//     text("X: " + mouseX + "   Y: " + mouseY, 600, 800);
// }

// // keyTyped gets triggered 
// function keyTyped() {
//   if (key === ' ') {
//     gDebugMode = !gDebugMode;
//   }
// }

// Change the drawFunction variable based on your interaction

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawfire;
  }
}

function keyTyped() {
  // fire state nav options 
  if ( drawFunction === drawfire ) {
    if ( key ==='1') {
      drawFunction = drawgrass;
    }
    else if ( key ==='2') {
      drawFunction = drawice;
    }
    else if ( key ==='3') {
      drawFunction = drawwater;
    }
    else if ( key ==='4') {
      drawFunction = drawrock;
    }
  }

    // grass state nav options 
  if ( drawFunction === drawgrass ) {
    if ( key ==='1') {
      drawFunction = drawrock;
    }
    else if ( key ==='2') {
      drawFunction = drawwater;
    }
    else if ( key ==='3') {
      drawFunction = drawice;
    }
    else if ( key ==='4') {
      drawFunction = drawflying;
    }
    else if ( key ==='5') {
      drawFunction = drawfire;
    }
    else if ( key ==='6') {
      drawFunction = drawpsychic;
    }
  }
}


