function Stone() {
    this.x = 0;
    this.y = 100;
    this.show = function() {
        fill(120);
        rect(this.x, this.y, 50, 50);
    }
}