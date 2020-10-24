function People() {
    this.x = 75;
    this.y = 75;
    this.show = function() {
        fill(0);
        ellipse(this.x, this.y, 25, 25);
    }
}