## Pokemon Type Advantage Guide (Project 1)
#### by Sean Ko


### Overview
This is a state machine that allows the user to venture through the different type combinations presented in the Pokemon Games. 

Included in this repository is the source code located in the sketch.js file, the project writeup, as well as the index.html, p5.js, and p5.sound.js. 

The project itself is a state machine, and the source code is located in the sketch.js file. There are a total of 12 states that include the 11 Pokemon typings, as well as the splash instructions screen. The user is able to move between states by pressing on the corresponding key next to each type, which is controlled by a keyTyped function. Each state has a unique group of if-statements that only allow specific keyboard input interactions, as each type is only linked with specific type pairings. The assets for each type state are loaded in an array of images, which are then called in their specific draw functions. 

adobe xd presentation link: https://xd.adobe.com/view/1be10cd5-5f84-47fe-9926-2355150e25dc-4eb2/?fullscreen

