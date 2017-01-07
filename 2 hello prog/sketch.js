function setup() {
    createCanvas( windowWidth, windowHeight );
    background( 0 );
}

function draw() {
    noStroke();
    fill( random( 255 ) );
    ellipse( mouseX, mouseY, noise( frameCount / 50 ) * 100 );
}

function mousePressed(){
    background( 0 );
}

function keyTyped(){
    if( key = 's' ) saveCanvas( 'export', 'png' );
}

function windowResized(){
    resizeCanvas( windowWidth, windowHeight );
    background( 0 );
}
