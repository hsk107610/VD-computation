const GRID = 8;
const CELL = 1080 / GRID;


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  frameRate(6);
}

function draw() { background(255, 255, 0); 
  const cz = random(0, CELL); 
  const sz = random(70, 100); 
  for (let gy = 0; gy < GRID; gy++) { 
    for (let gx = 0; gx < GRID; gx++) { 
      const cx = gx * CELL + CELL / 2; 
      const cy = gy * CELL + CELL / 2;

      // 원 그리기
      push();
      blendMode(OVERLAY);
      fill('cyan');
      circle(cx, cy, cz);
      pop();

      // 사각형 그리기
      push();
      blendMode(MULTIPLY);
      translate(cx, cy);
      fill('pink');
      rectMode(CENTER);
      rect(0, 60, sz, sz, 20);
      pop();
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 1);
  }
}
