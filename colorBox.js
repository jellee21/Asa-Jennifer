var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var filled = false;

function setup() {
  createCanvas(400, 400);
  bx = width/2;
  by = height/2;
  rectMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  background(255);
  //test if cursor is over box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true; 
    if (!locked) {
      stroke('blue');//change stroke color 
      fill(255);
    }
  }
  else {
    if (locked === true) {
      stroke(0); 
      fill('blue');
      overbox = true;
    } 
    else {
      stroke(0); 
      fill(255);
      overBox = false;
    }
  }
  //draw the box
  rect(bx, by, boxSize, boxSize);

}

function mousePressed() {
  //color box when cursor is over box & mouse if pressed
  if (overBox) {
    locked = true;
    fill('blue');
  }
  else {
    locked = true;
    fill('blue');
  }
}


function mouseReleased() {
  locked = true;
}