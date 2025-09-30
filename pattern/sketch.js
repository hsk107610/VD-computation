const GRID = 8;
const CELL = 1080 / GRID;

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  frameRate(6); // 조금 더 부드럽게
}

function draw() {
  background(255, 255, 0);

  const cz = random(0, CELL); 
  const sz = random(70, 100); 

  const t = frameCount * 0.5; // 시간

  for (let gy = 0; gy < GRID; gy++) { 
    for (let gx = 0; gx < GRID; gx++) { 
      const baseX = gx * CELL + CELL / 2;
      const baseY = gy * CELL + CELL / 2;

      // 물결 효과
      // 행 기준으로 x 위치에 따라 y가 사인파로 움직임
      const waveY = sin(baseX * 0.02 + t) * 50; // 높이
      const cx = baseX;
      const cy = baseY + waveY;

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
