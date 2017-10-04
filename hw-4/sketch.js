function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 800, 1000 );
}

function draw() {
    // set the background color
    background( 'rgb(80, 0, 0)' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 400, 800 );


    // ** ARMS **********************************
    push();
    //Left Arm
    fill( 'rgb(198, 191, 109)')
    rect( -200, 70, 45, 75, 0, 0, 90, 90)

    push();
    //Right Arm
    fill( 'rgb(198, 191, 109)')
    rect( 160, 70, 45, 75, 0, 0, 90, 90)

    push();
    // Sleve Left
    fill( 'rgb(0, 255, 0)')
    rect( -215, -80, 75, 160, 90, 0, 90, 90 );

    push();
    // Sleve Right
    fill( 'rgb(0, 255, 0)')
    rect( 140, -80, 75, 160, 0, 90, 90, 90 );

    pop();
    // **END ARMS**

    //**Pants**
    push();
    fill('rgb(16, 17, 143)')
    rect( -150, -0, 300, 300)

    // ** BODY **********************************
    push();
    //Neck
    fill( 'rgb(198, 191, 109)')
    rect( -50, -225, 100, 75, 90, 90, 0, 0)

    push();
    // Main Shirt
    fill( 'rgb(0, 255, 0)')
    rect( -150, -150, 300, 300, 90, 90, 10, 10 );

    push();
    //Logo
    fill('rgb(87, 133, 149)')
    rect( 35, -75, 45, 45, 90, 90, 90, 90 );

    //**Hat**
    push();
    fill( 'rgb(0, 0, 0)')
    rect( -80, -385, 165, 100, 90, 90, 90, 90 )

    pop();
    // **END BODY**

    // ** HEAD **********************************
    push();
    fill( 'rgb(198, 191, 109)')
    rect( -90, -375, 175, 200, 90, 90, 90, 90 )

    // **Eye **
    push();
    fill( 'rgb(0, 0, 0)')
    rect( -70, -310, 35, 25, 90, 90, 90, 90 )

    // **Eye **
    push();
    fill( 'rgb(0, 0, 0)')
    rect( -0, -310, 35, 25, 90, 90, 90, 90 )
    // **end Eye**

    // **Mouth**
    push();
    fill( 'rgb(112, 52, 52)')
    rect( -25, -250, 35, 5,)

    pop();
    // **Mouth**

    pop();
    // **END HEAD**



    // ** END CHARACTER SANDBOX *******************
    pop();

}
