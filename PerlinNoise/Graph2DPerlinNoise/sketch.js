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
    vertex(i, random(height));
  }
  endShape();

  noLoop();
}