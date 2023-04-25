let bubble = [];
let myCatcher = [];
let myKelp = [];

function setup() {
  createCanvas(960, 540);
  // the bubbles
  for (let i = 0; i < 50; i++) {
    this.x = random(width);
    this.y = random(height);
    bubble[i] = new Bubble(x, y);
  }
  // the crabs
    let catcher = new myCatchers(width - 50, random(height), random(-20, 20), random(-20, 20));
  myCatcher.push(catcher);

  //the kelp
  for (let i = 0; i < 50; i++) {
    this.x = random(width);
    this.y = random(height);
    let speedX = random(-5, 5);
    let speedY = random(-5, 5);
    myKelp[i] = new Kelp(x, y, speedX, speedY);
  }
}

function draw() {
  background("darkblue");

  // Check for collisions between Kelp and myCatcher
  for (let i = 0; i < myKelp.length; i++) {
    for (let j = 0; j < myCatcher.length; j++) {
      if (myKelp[i].collidesWith(myCatcher[j])) {
        myKelp.splice(i, 1); // Remove Kelp from the array
        i--;
        break;
      }
    }
  }

  // this creates the 50 bubbles
  for (let i = 0; i < 50; i++) {
    bubble[i].move();
    bubble[i].show();
  }

  // this updates and displays the myCatcher
  for (let i = 0; i < myCatcher.length; i++) {
    myCatcher[i].update();
    myCatcher[i].display();
    // create new myCatcher instances if there are less than 5 in the array
    if (myCatcher.length < 3) {
      let catcher = new myCatchers(width - 50, random(height), random(20, -20), random(20, -20));
      myCatcher.push(catcher);
    }
  }
 
  // this moves and displays the kelp
  for (let i = 0; i < myKelp.length; i++) {
    myKelp[i].move();
    myKelp[i].show();
  }
}

//bubbles

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }
  // this shakes the bubbles in the ocean
  move() {
    //this will make the bubbles randomly move
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    //creates the bubbles
    stroke(255);
    strokeWeight(4);
    fill("lightblue");
    ellipse(this.x, this.y, 24, 24);
  }
}

//crab

class myCatchers {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.radius = 50;
  }
  // this mioves the crab left and right
  update() {
    this.x += this.speed;
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.speed *= -1;
    }
  
  }
  //this shows and creates the crab
  display() {
    push();
    translate(this.x, this.y);
    //left leg
    noStroke();
    fill("orangered");
    rect(-10, 9, 15);
    rect(-20, 15, 15);
    rect(-30, 25, 15);
    //left arm
    noStroke();
    fill("orangered");
    rect(-10, 0, 15);
    rect(-20, -10, 15);
    //right leg
    fill("orangered");
    rect(36, 9, 15);
    rect(46, 15, 15);
    rect(56, 25, 15);
    //right arm
    noStroke();
    fill("orangered");
    rect(36, 0, 15);
    rect(45, -9, 15);
    //bottom body
    noStroke();
    fill("red");
    ellipse(20, 10, 50);
    //head
    noStroke();
    fill("red");
    ellipse(20, -25, 40);
    //eyes
    if (mouseIsPressed == true) {
      fill("black");
    } else {
      fill("white");
      ellipse(25, -30, 15); //right white
      ellipse(15, -30, 15); //left white
      fill("black");
      ellipse(25, -30, 5);
      ellipse(15, -30, 5);
    } //the eyes blink
    //smile
    if (mouseIsPressed == true) {
      fill("black");
    } //the smile does not change when mouse is pressed
    arc(21, -19, 15, 15, 5, 180);
    pop();
  }
}
// this is the crabs food
class Kelp {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = 50;
  }

  show() {
    push();
    translate(this.x, this.y);
    stroke(0.25);
    fill("limegreen");
    rect(100, 100, 30, 25, 100);
    rect(200, 200, 30, 55, 100);
    pop();
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  collidesWith(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.radius + other.radius;
  }
}
