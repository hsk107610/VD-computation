const GRID = 9;
const CELL = 1080 / GRID;

function setup() {
 createCanvas(1080, 1080);
 noStroke();
 frameRate(6);
 //noLoop();
}

function draw() {
 background(255, 255, 0);
 const cz = random(0, CELL);
 const sz = random(50, CELL);

 for (let gy = 0; gy < GRID; gy++) {

   for (let gx = 0; gx < GRID; gx++) {
     const cx = gx * CELL + CELL / 2;
     const cy = gy * CELL + CELL / 2;

     push();
     blendMode(OVERLAY);
     fill('black');
     circle(cx, cy, cz);
     pop();

     push();
     blendMode(MULTIPLY);
     translate(cx, cy);
     fill('pink');
     rectMode(CENTER);
     rect(0, 60, sz, sz);
     pop();
   }
 }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 1);
  }
}