//custom variables for y-coordinate of sun & horizon
let shapeHeight;

let designWidth = 400;
let designHeight= 400;
let horizon ;
function setup() {
  createCanvas(windowWidth,windowHeight);
  horizon =height/2;
}

function draw() {

  //shape follows y-coordinate of mouse
  shapeHeight = mouseY;
  currentWidth = mouseX;
  inverseShapeHeight = -mouseY

  //light blue background if the shape is above horizon

  //with if-else statement
  if (shapeHeight < horizon) {
    background("#ddf0f0"); // Sky blue if above horizon
    
  } else {
    background("#3b3b45"); // Dark greyish-blue if below horizon
  }

  //sun
  fill("#fcdf6a"); // Sun color
  circle(width/8, shapeHeight, width/4);

//moon
  fill("white"); // Moon color
  circle(width/8, inverseShapeHeight+800, width/4);
  
  textSize(20);
  if (shapeHeight < horizon) {
    fill("black"); // Text is black if above horizon
    
  } else {
    fill("white"); // Text is white if below horizon
  }
  text('Hello! My name is Minkyu Kim!', currentWidth/2, shapeHeight/2);
  


  // draw line for horizon
  stroke('black');
  line(0,horizon,width,horizon);

  //grass

  if (shapeHeight < horizon) {
    fill("#73b370"); // Grass is light green if above horizon
    
  } else {
    fill("#314a30"); // Grass is dark green if below horizon
  }

  rect(0, horizon, width, height);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  horizon = height / 2; // recalc horizon after resize
}

