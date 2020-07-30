function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  for (let i = 0; i < width; i++) {
    stroke(255);
    point(i, random(height));
  }

}