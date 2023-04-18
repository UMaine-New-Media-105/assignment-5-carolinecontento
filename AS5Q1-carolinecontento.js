let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble();
  bubble2 = new Bubble(200, 300, 40);
  bubble3 = new Bubble(100, 200, 40);
  bubble4 = new Bubble(500, 600, 50);
  bubble5 = new Bubble(10, 700, 40);
  // print(bubble.x, bubble.y);
}

function draw() {
  background(220);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

class Bubble {
  constructor() {
    this.x = 250;
    this.y = 300;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill("lightblue");
    ellipse(this.x, this.y, 24, 24);
  }
}
