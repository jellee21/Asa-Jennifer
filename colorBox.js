var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var filled = false;
var colorPicker; 

function setup() {
  createCanvas(400, 400);
  bx = width/2;
  by = height/2;
  rectMode(RADIUS);
  strokeWeight(2);
  colorPicker = createColorPicker('blue'); //initial color is blue
  colorPicker.position(bx - (boxSize-10), by + (boxSize+10)); //position color picker below shape
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
    if (locked === false) {
      stroke('blue'); //change stroke color 
      fill(255);
    }
  }
  else {
    if (locked === true) {
      stroke(0); 
      fill(colorPicker.color());
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
    fill(colorPicker.color());
  }
  else {
    locked = true;
  }
}