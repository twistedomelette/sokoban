let r = 0;
let s = 0;
let stone = [];
let points = [];
let people;
let box = [];
let level = [
            [0, 0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 0, 0, 1, 0],
            [1, 0, 3, 2, 0, 0, 1, 0],
            [1, 1, 1, 0, 2, 0, 1, 0],
            [1, 0, 1, 1, 2, 0, 1, 0],
            [1, 0, 1, 0, 0, 0, 1, 1],
            [1, 2, 0, 2, 2, 2, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            ]
let leveltoo = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0],
            [0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 4, 0],
            [0, 0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            ]
function draw() {
    for (let i=1; i<9; i++){
        for (let j=1; j<10; j++){
            fill('#FFFFFF');
            rect(i*50, j*50, 50, 50);
        }
    }
    for (let i = 0; i < box.length; i++) {
        box[i].show();
    }
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }
    people.show();
    for (let i = 0; i < stone.length; i++) {
        stone[i].show();
    }
    if (finish()) {
        fill(51);
        rect(50, 50, 450, 500);
        fill('#FFD700');
        textSize(80);
        text('You win!', 105, 290);
    }
}

function setup() {
    createCanvas(450, 500);
    background('white');
    for (let j=0; j<9; j++){
        for (let i=0; i<8; i++){
            if (leveltoo[j][i] == 4) {
                points.push(new Points((i+1)*50+25, (j+1)*50+25));
            }
            if (level[j][i] == 3) {
                people = new People();
                people.x = (i+1)*50+25;
                people.y = (j+1)*50+25;
            }
            if (level[j][i] == 2) {
                box.push(new Box());
                box[r].x = (i+1)*50+10;

                box[r].y = (j+1)*50+10;
                r++;
            }
            if (level[j][i] == 1) {
                stone.push(new Stone());
                stone[s].x = (i+1)*50;
                stone[s].y = (j+1)*50;
                s++;
            }
        }
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW && go(people.x-50, people.y, n='l')) {
        people.x -= 50;
    } else if (keyCode === RIGHT_ARROW && go(people.x+50, people.y, n='r')) {
        people.x += 50;
    } else if (keyCode === UP_ARROW && go(people.x, people.y-50, n='u')) {
        people.y -= 50;
    } else if (keyCode === DOWN_ARROW && go(people.x, people.y+50, n='d')) {
        people.y += 50;
    }
}

function go(x, y, n) {
    for (let i = 0; i < stone.length; i++) {
        if (stone[i].x + 25 == x && stone[i].y + 25 == y) {
            return false;
        }
    }
    for (let i = 0; i < box.length; i++) {
        if (box[i].x + 15 == x && box[i].y + 15 == y) {
            if (n == 'l') {
                if (gonext(x-50, y)) {
                    box[i].x -= 50;
                } else {
                    return false;
                }
            }
            if (n == 'r') {
                if (gonext(x+50, y)) {
                    box[i].x += 50;
                } else {
                    return false;
                }
            }
            if (n == 'd') {
                if (gonext(x, y+50)) {
                    box[i].y += 50;
                } else {
                    return false;
                }
            }
            if (n == 'u') {
                if (gonext(x, y-50)) {
                    box[i].y -= 50;
                } else {
                    return false;
                }
            }
        }
    }

    return true;
}

function gonext(x, y) {
    for (let i = 0; i < stone.length; i++) {
        if (stone[i].x + 25 == x && stone[i].y + 25 == y) {
            return false;
        }
    }

    for (let i = 0; i < box.length; i++) {
        if (box[i].x + 15 == x && box[i].y + 15 == y) {
            return false;
        }
    }

    return true;
}

function finish() {
    let sum = 0;
    for (let i = 0; i<box.length; i++) {
        for (let j = 0; j<points.length; j++){
            if (box[i].x + 15 == points[j].x && box[i].y + 15 == points[j].y){
                sum++;
                break;
            }           
        }
    }
    if (sum == points.length) {
        return true;
    } else {
        return false;
    }
}