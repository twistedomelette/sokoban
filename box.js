function Box() {
    this.x = 160;
    this.y = 210;
    this.show = function() {
        fill(0);
        rect(this.x, this.y, 30, 30);
    }
}