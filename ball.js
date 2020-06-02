function Ball() {
    //initial pos of ball
    this.pos = createVector(width / 2, height / 2);
  
    this.r = 30;
    //direction of ball is one to x-axis and one to y-axis, so ball would start moving to bottom right
    this.direction = createVector(1, 1);
    //the mult controls the speed of the ball
    this.vel = createVector(1, 1).mult(7);
    
    //x pos and y pos of ball is itself + velocity * by its direction
    this.update = function() {
      this.pos.x += this.vel.x * this.direction.x;
      this.pos.y += this.vel.y * this.direction.y;
    }
    
    this.display = function() {
      ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    //checks if ball hits edge of canvas
    this.checkEdges = function() {
      //if y is less than r of ball and y direction is less than 0, it is hitting the top of canvas
      if (this.pos.y < this.r && ball.direction.y < 0) {
        //reverse the direction of ball
        this.direction.y *= -1;
      }
      //x is less than r of ball and x direction is less than 0, it is hitting the left of canvas
      else if (this.pos.x < this.r && this.direction.x < 0) {
        //reverse the direction of ball
        this.direction.x *= -1;
      }
      //x is more than w of canvas - r of ball anf x direction is more than 0, it is hitting the right of canvas
      else if (this.pos.x > width - this.r && this.direction.x > 0) {
        //reverses the direction
        this.direction.x *= -1;
      }
    }

    //checks when ball meets the paddle
    this.meets = function(paddle) {
      //if y pos of ball is right above the paddle and is x pos of ball is in the range of w of paddle
      if (this.pos.y < paddle.pos.y &&
          this.pos.y > paddle.pos.y - this.r &&
          this.pos.x > paddle.pos.x - this.r &&
          this.pos.x < paddle.pos.x + paddle.w + this.r) {
        return true;
      } 
      else {
        return false;
      }
    }
  
    //check when ball hits brick
    this.hits = function(brick) {
      //dist can calculate distance between brick and ball
      var d = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
      //is d is less than r of brick and r of ball, we know they are hitting 
      if (d < brick.r + this.r) {
        return true;
      } 
      else {
        return false;
      }
    }
  }