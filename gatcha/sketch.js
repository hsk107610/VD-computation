let body;
let face;

function preload() {
  body = loadImage('2.png');
  face = loadImage('1.png');
}

function setup() {
  createCanvas(400, 400);
  background('beige');
  image(body, 0, 0);
  image(face, 132, 134);
}

