function Brick(pos, r) {
    //generate random sizes of bricks between radius of 20 and 80
    this.r = random(20, 80);
    this.pos = createVector(random(100, width - 100), random(100, height - 400));
    //hexagon bricks
    this.total = 6;
  
    //makes shape with 6 verticies
    this.display = function() {
      push();
      translate(this.pos.x, this.pos.y);
      beginShape();
      for (var i = 0; i < this.total; i++) {
        var angle = map(i, 0, this.total, 0, TWO_PI);
        var r = this.r;
        //x, y position of first vertex
        var x = r * cos(angle);
        var y = r * sin(angle);
        //create a vertex out of this x and y position
        vertex(x, y);
      }
      //connects all 6 verticies
      endShape(CLOSE);
      //after we draw first polygon, we will move oriin back to 0, 0 
      //so when we drawing second polygon, origin will be translated correctly
      pop();
    }
  }