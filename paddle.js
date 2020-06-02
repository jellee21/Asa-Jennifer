function Paddle(){
    this.w = 160;
    this.h = 20;
    //initial position of paddle
    this.pos = createVector(width / 2 - this.w / 2, height - 40);
    this.isMovingLeft = false;
    this.isMovingRight = false;

    //draws the rectangle on canvas
    this.display = function(){
      rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    
    
    this.update = function(){
      //decrease x position by 20 when a key is pressed
      if (this.isMovingLeft){
        this.move(-20);
      } 
      //increase x position by 20 when d key is pressed
      else if (this.isMovingRight){
        this.move(20);
      }
    }
    
    //changing the x position of paddle 
    this.move = function(step){
      this.pos.x += step;
    }
    
    //checks if paddle hits edge of canvas
    this.checkEdges = function(){
      //if x pos of padddle is less than 0, paddle is out of canvas, so we set x pos back to 0
      if (this.pos.x < 0) this.pos.x = 0;
      //if x pos is moe than w of canvas - w of paddle, we rest back to w of canvas - w of paddle 
      else if (this.pos.x > width - this.w ) this.pos.x = width - this.w;
    }
  }