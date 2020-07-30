let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < width; i++) {
    stroke(255);
    vertex(i, random(100));
  }
  endShape();

  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let i = 0; i < width; i++) {
    stroke(255);
    var y = noise(xoff)*height;
    vertex(i, y);

    xoff += 0.02;
  }
  endShape();

  start += inc;

  // noLoop();
}