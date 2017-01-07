var tailleMotif = 50;
var choice;

function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate( 1 );
}

function draw() {
    background( 0, 67, 88 );

    for( var my = 60; my < height-60; my = my + tailleMotif ){
        for( var mx = 45; mx < width-45; mx = mx + tailleMotif ){
            motif( mx, my, tailleMotif );
        }
    }
}

function motif( x, y, taille ){
    noStroke();

    fill( random( [
        '#1F8A70',
        '#BEDB39',
        '#FFE11A',
        '#FD7400'
    ] ) );

    choice = random( 4 );
    if( choice < 1 ){
        triangle(
            x,y,
            x+taille,y,
            x,y+taille
        );
    }
    else if( choice < 2 ){
        triangle(
            x+taille,y+taille,
            x+taille,y,
            x,y+taille
        );
    }
    else if( choice < 3 ){
        triangle(
            x,y,
            x+taille,y,
            x+taille,y+taille
        );
    }
    else{
        triangle(
            x+taille,y+taille,
            x,y,
            x,y+taille
        );
    }
}

function keyTyped(){
    if( key == ' ' ){
        saveCanvas( 'export-' + year() + '-' + month() + '-' + day() + '-' + hour() + '-' + minute() + '-' + second(), 'png' );
    }
}

function windowResized(){
    resizeCanvas( windowWidth, windowHeight );
}
