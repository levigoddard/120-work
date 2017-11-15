let smileys = [];
let t = 0;

function setup(){
    createCanvas( windowWidth, 600 );

    // create a bunch of random, sine movement smileys
    for (var i = 0; i < 70; i++) {

        // add new smiley objs to the array
        smileys.push(
            {
                period: { x: random(80, 160), y: random(80, 160) },
                maxSize: random(1),
                maxDist: {
                    x: random(width/2),
                    y: random(height/2)
                },
                pos: {
                    x: random(width),
                    y: random(height)
                }
            } // ← end smiley obj
        ); // end array push
    } // end for loop
}

function draw() {
    // set the background to 'white'
    background(0, 0, 0, 10 );

    // determine the number of smileys to draw in the array
    // based on mouse position
    // i.e. left=0 - right=all
    let numToDraw = map( mouseX, 0, width, 0, smileys.length );
    for ( let i = 1; i < numToDraw; i++ ) {
        // draw the smileys
        drawSmiley( smileys[i], t );
    }

    // increment time for the sine wave functions
    t++;

}

/* Draw the Smiley */
function drawSmiley( smiley, time ) {
    // determine the value of individual sine wave functions
    let x = sinePos( smiley.period.x, time );
    let y = sinePos( smiley.period.y, time );

    let pos_x = x * smiley.maxDist.x + smiley.pos.x;
    let pos_y = y * smiley.maxDist.y + smiley.pos.y;

    // draw a smiley based on object data
    smileyFace(
        pos_x,
        pos_y,
        x * smiley.maxSize,
        y * smiley.maxSize
    );
}


/* SMILEY FACE FUNCTION */
function smileyFace( pos_x, pos_y, scale_x, scale_y ) {
    push(); // ← Begin sandbox

    // 1. scale and position smiley face
    translate( pos_x, pos_y );
    scale( scale_x, scale_y );

    // 2. draw smiley face
    stroke( 0 );
    fill('rgba(159, 156, 155, 1)');
    ellipse( 8, 24, 210 );
    noStroke();
    fill( 40, 255 );
    arc( 0, 85, 95, 40, 0, PI );
    ellipse( -20, -15, 7 );
    ellipse( 20, -15, 7 );

    pop(); // ← End sandbox
}


/* sine function */
function sinePos( timeScale, time ) {
    let val = sin( TWO_PI * time/timeScale );
    return val;
}
