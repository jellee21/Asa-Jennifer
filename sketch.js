var paddle;
var ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle();
    ball = new Ball();
}

function draw() {
    background(255);

    paddle.display();
    paddle.update();
    paddle.checkEdges();

    ball.display();
    ball.update();
    ball.checkEdges();
}

function keyPressed() { //NOTE: keyIsPressed
    if (key === 'a' || key === 'A') { //change to arrow keys
        paddle.isMovingLeft = true;
    }
    else if (key === 'd' || key === 'D') {
        paddle.isMovingRight = true;
    }
}

function keyReleased() {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}