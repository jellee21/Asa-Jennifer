function Ball() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 30;
    this.direction = createVector(1, 1); //movement of the ball 
    this.vel = createVector(1, 1).mult(5);

    this.display = function() {
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    this.update = function() {
        this.pos.x += this.vel.x * this.direction.x;
        this.pos.y += this.vel.x * this.direction.y;
    }

    this.checkEdges = function() {
        if (this.pos.y < this.r && this.direction.y < 0) {
            this.direction.y *= -1; //by multiplying the y, it reverses the direction 
        }
        /*else if (this.pos.y > height - this.r && this.direction.y > 0) {
            this.direction.y *= -1;
        }*/ //delete once ball bounces off paddle
        else if (this.pos.x < this.r && this.direction.x < 0) {
            this.direction.x *= -1;
        }
        else if (this.pos.x > width - this.r && this.direction.x > 0) {
            this.direction.x *= -1;
        }
    }

    this.meets = function(paddle) {
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
}