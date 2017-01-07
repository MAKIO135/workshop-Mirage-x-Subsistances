function setup() {
    createCanvas(300,600);
    frameRate(1);
}

function draw() {
    background(239, 236, 202);

    strokeWeight(10);
    stroke(0, 150);
    fill( 167, 163, 126, 20 );
    point( 100, 200 );
    triangle( 150, 0, 0, 400, 300, 400 );

    fill( 4, 99, 128 );
    ellipse( 150, 300, 150 );

    strokeWeight(30);
    stroke( 230, 226, 175 );
    line( 0, 0, 300, 600 );

    // noStroke();
    // noFill();
    rect( 30, 30, 150, 50 );

    stroke( 0 );
    beginShape();
    vertex( 50, 80 );
    vertex( 150, 30 );
    vertex( 250, 400 );
    vertex( 100, 500 );
    vertex( 5, 200 );
    endShape(CLOSE);

}
