function setup() {
  // create a canvas to draw my portrait on
  createCanvas(windowWidth, windowHeight);
}

var moonRotationRate = 0;
var moonRate = 0;
var earthSize = 90;

function draw() {
  // set the background color
  background('rgb(6, 0, 0)');
  // turn the cursor off
  noCursor();
  // UPDATE VALUES
  // base Moon rate on mouseY pos
  moonRotationRate = (mouseY * 0.1);
  // set the arm to spin at a constant rate
  moonRate = moonRate - 3;

  // *****************************
  // Planet SANDBOX
  // *****************************
  push();

  // make the planet and moon follow the mouse.
    translate(mouseX, mouseY);
  // Moon
    push();
  // Moon's info
      strokeWeight(10);
      stroke(0);
  // draw the spinning Moon
      push();
        rotate(radians(moonRate));
  // define and draw the Moon
        fill('rgb(51, 51, 51)');
        noStroke();
        //add a note here
        ellipse(moonRotationRate, ((mouseY/3) + earthSize), 30); //earthSize is called, no matter mouseY, the moon is only as close as earthSize. You could keep them from touching at all by also using moon's diameter.
      pop();
      push();
  // Earth
        strokeWeight(10);
        stroke(0);
        push();
        // Draw earth
        fill('rgb(0, 158, 167)');
        noStroke();
        ellipse(earthSize/2, 0, earthSize); //I moved the moon's X so it's edge rested on mouseX. You can change this back.
      pop();
    pop();
  pop();
}
