var h;
var scl = 20;
var food;

function setup(){

    createCanvas(700, 700);
    h = new had();
    frameRate(10); 
    pickLocation();
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector( floor(random(cols)) , floor(random(rows)));
    food.mult(scl);
}

function draw(){

    background(51);
    h.death();
    h.update();
    h.show();
    

    if( h.eat(food) ){
        pickLocation();
    }

    fill(color(252, 176, 69));
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        h.dir(0, -1);
    }else if (keyCode === DOWN_ARROW){
        h.dir(0, 1);
    }
    else if (keyCode === RIGHT_ARROW){
        h.dir(1, 0);
    }
    else if (keyCode === LEFT_ARROW){
        h.dir(-1, 0);
    }
}


