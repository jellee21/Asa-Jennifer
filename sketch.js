var paddle;
var ball;
var bricks = [];
var playingGame = false;
var youWin = false;
var winText;
var rules;

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle();
  ball = new Ball();

  //i is less than 20, so we draw 20 bricks
  for (var i = 0; i < 20; i++) {
    //create new brick and push it to array
    bricks.push(new Brick());
  }
  createText();
}

function draw() {
  background(255);

  //calling the functions of paddles.js
  paddle.display();
  //only when playingGame is true paddle can move
  if (playingGame) paddle.checkEdges();
  if (playingGame) paddle.update();

  //calling the functions of ball.js
  ball.display();
  //only when playingGame is true ball can move
  if (playingGame) ball.checkEdges();
  if (playingGame) ball.update();

  //if ball is hitting paddle, reverse direction so ball bounces back
  if (ball.meets(paddle) && ball.direction.y > 0) {
      ball.direction.y *= -1;
  }

  //loop through bricks array
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].display();
    if (ball.hits(bricks[i])) {
      //if brick has radius greater then 40 and gets hit by ball, brick's radius would get half smaller
      if (bricks[i].r >= 40) {
        bricks[i].r = bricks[i].r / 2;
      } 
      else {
        //if ball hits, splice deletes one element, so brick just breaks instead of get smaller
        bricks.splice(i, 1);
      }
      //ball change its direction whenever its hits bricks
      ball.direction.y *= -1;
    }
  }
  
  //if ball goes below canvas, game is over and ball would be reset to center
  if (ball.pos.y > height) {
    playingGame = false;
    ball.pos = createVector(width / 2, height / 2);
  }

  //if no more bricks, user wins
  if (bricks.length === 0) {
    youWin = true;
    playingGame = false;
  }

  //if user wins is true text is shown
  if (youWin) {
    winText.style('display', 'block');
  } 
  //if user wins is false text is hidden
  else {
    winText.style('display', 'none');
  }

  //while user is playinGame is true text is hidden
  if(playingGame) {
    rules.style('display', 'none');
  }
  //while user is playinGame is false text is shown
  else{
    rules.style('display', 'block');
  }
}

//if keys are released, paddle stops moving
function keyReleased() {
  paddle.isMovingRight = false;
  paddle.isMovingLeft = false;
}

function keyPressed() {
  //if a is pressed paddle moves left
  if (key === 'a' || key === 'A') {
    paddle.isMovingLeft = true;
  } 
  //if a is pressed paddle moves right
  else if (key === 'd' || key === 'D') {
    paddle.isMovingRight = true;
  } 
  //if s is pressed game starts
  else if (key === 's' || key === 'S') {
    //if user destroys all 20 bricks and they press s again, this will create 20 more bricks
    if (bricks.length === 0) {
      for (var i = 0; i < 20; i++) {
        bricks.push(new Brick());
      }
    }
    playingGame = true;
    youWin = false;
  }
}

function createText() {
  //createP function creates a html p element
  winText = createP('YOU WIN!!!!');
  winText.position(width / 2, 80);
  rules = createP("press 'S' to start, 'A'to move left 'D' to move right");
  rules.position(width / 2, 10);
}

