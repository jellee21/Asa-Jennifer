function Brick() {
    this.r = random(20,80);
    this.pos = createVector(random(100, width - 100), random(100, height - 400));
    this.total = 6; //number of verticies
    this.display = function() {
        push(); //to save current drawing settings 
        translate(this.pos.x, this.pos.y);
        beginShape();
        for(var i = 0; i < this.total; i++) {
            let angle = map(i, 0, this.total, 0, TWO_PI);
            //var i: 0-this.total, angle: 0-2PI
            var x = this.r * cos(angle);
            var y = this.r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop(); //restore settings to origin at (0,0)
    }
}