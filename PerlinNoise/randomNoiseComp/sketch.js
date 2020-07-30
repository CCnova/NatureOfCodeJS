let xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  // One Dimension Perlin Noise Position Ball
  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.02;

  // One Dimension Random Position Ball
  let y = random(400);
  
  ellipse(x, 200, 24, 24);
  ellipse(y, 300, 24, 24);
}