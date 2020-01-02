function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(20);
    noStroke();
    //Shape(PositionX, PositionY, Width, Height)
    for (let i = 0; i < 800; i++) {
        rect(random(width), random(height), 4, 4);
    }
}