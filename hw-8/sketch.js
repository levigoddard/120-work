var y = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);  // Size must be the first statement
  stroke(rgb(255, 255, 255));     // Set line drawing color to white
  frameRate(36.55);
}
function draw() {
  background(rgb(0, 0, 0));   // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
