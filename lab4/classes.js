class Shape {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move (delta) {
        this.x += delta;
        this.y += delta;
    }

    moveToZero() {
        this.x = 0;
        this.y = 0;
    }
}


let shape = new Shape(10, 15);

shape.move(10);