var maVariable;

function setup() {
    createCanvas( windowWidth, windowHeight );
    maVariable = 100;
    // frameRate( 1 );
}

function draw() {
    fill( 255 );
    ellipse( maVariable, maVariable, 100, 100 );
    maVariable = maVariable + 10;

    redCircle( 100, 50, 150 );
    redCircle( 10, 250, '#ff00ff' );
    redCircle( 150, 10, 'rgb(255,150, 0)' );
}

function redCircle( positionX, positionY, couleur ){
    fill( couleur );
    ellipse( positionX, positionY, 40 );
}
