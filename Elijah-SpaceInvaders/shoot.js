function shoot(x, y) {
    this.x = x;
    this.y = y;

this.show = function() {
    fill(50, 0, 200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    }
this.hits = function(alien) {
    var d = dist(this.x, this.y, shoot.x, shoot.y);
    if (d < this.r + shoot.r) {
        return true;
    } else {
        return false;
    }
}

this.move = function() {
    this.y = this.y - 1;
    }

}