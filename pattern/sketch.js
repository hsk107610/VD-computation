const GRID = 6;
const CELL = 1080 / GRID;
//1080 / 2 = 540


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  noLoop();
}

function draw() {

  background(2255,255,220);

   for (let gy = 0; gy < GRID; gy++) {
    console.log('gy = ' + gy);
    const cy = gy * CELL + CELL / 2;
    // = 0 * 540 + 540 /2
    // 0 +270
    // cy = 270

  push();
  blendMode(MULTIPLY);
  fill('cyan');
  circle(cy, cy, random(300,500));
  pop();

  push();
  blendMode(MULTIPLY);
  translate(width/2, height/2);
  fill('pink');
  rectMode(CENTER);
  const sz = random(300,500);
  rect(0, 0, sz, sz);
  pop();
}
}