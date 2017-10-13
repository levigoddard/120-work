function setup() {
    // create a canvas to draw my portrait on
    createCanvas( windowWidth, windowHeight );
}

var moonRotationRate = 0;
var moonRate = 0;


function draw() {
    // set the background color
    background( 'rgb(1, 0, 0)' );
    // turn the cursor off
    noCursor();
    // UPDATE VALUES
    // base Moon rate on mouseY pos
    moonRotationRate = (mouseY * 0.01) - 0.2;
    // set the Moon to spin at a constant rate
    moonRate = moonRate -1 ;

    // *****************************
// Planet SANDBOX
// *****************************
push();

// make the person follow the mouse.
translate( mouseX, mouseY );
// Moon
push();
// Moon's info
strokeWeight( 10 );
stroke( 0 );
// draw the spinning Moon
push();
rotate( radians(moonRate) );
// define and draw the Moon
var moonDistance = mouseY - 10;
fill( 'rgb(51, 51, 51)' );
noStroke();
ellipse( moonRotationRate, moonDistance, 30 );
pop();

push();
// Earth

strokeWeight( 10 );
stroke( 0 );
push();
// Draw earth
fill( 'rgb(0, 158, 167)' );
noStroke();
ellipse( 60, 0, 90 );
pop();
pop();
}
