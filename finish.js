function Points(x, y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        fill('#99FF99');
        ellipse(this.x, this.y, 10, 10);
    }
}