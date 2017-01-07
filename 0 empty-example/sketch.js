function setup() {
    createCanvas( windowWidth, windowHeight );
}

function draw() {
    ellipse( mouseX, mouseY, noise( frameCount / 50 ) * 100 );
}

function mousePressed(){
    background( 255 );
}

function keyTyped(){
    if( key = 's' ) saveCanvas( 'export', 'png' );
}

function windowResized(){
    resizeCanvas( windowWidth, windowHeight );
    background( 255 );
}
