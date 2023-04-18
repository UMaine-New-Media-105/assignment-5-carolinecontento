let bubble = [];

function setup() {
  createCanvas(960, 540);

  for (let i = 0; i < 50; i++) {
    this.x = 250;
    this.y = 300;
    bubble[i] = new Bubble(x, y);
  }
}

function draw() {
  background(220);
  //this creates the 50 bubbles 
  for (let i = 0; i < 50; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}

class Bubble {
  constructor() {
    this.x = 250;
    this.y = 300;
  }

  move() {
    //this will make the bubbles randomly move
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {
    //creates the bubbles
    stroke(255);
    strokeWeight(4);
    fill("lightblue");
    ellipse(this.x, this.y, 24, 24);
  }
}
