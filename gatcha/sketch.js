let n;
let face;

function preload() {
    // get random face
  let n = int(random(1, 10));
  let imgName = n + ".png";  
  face = loadImage(imgName);
}


function setup() {
  createCanvas(400, 400);

  let button = createButton('Hi');
  button.position(10, 10);

  button.mousePressed(() => {
    n = int(random(1, 10));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  


}

function draw() {
  background("beige");

  if( n === 1 ) {
  background('beige');
  }
  if( n === 2 ) {
  background(0,11,85);
  }
  if( n === 3 ) {
  background('pink');
  }
  if( n === 4 ) {
  background(167, 251, 255);
  }
  if( n === 5 ) {
  background('black');
  }
  if( n === 6 ) {
  background('gray');
  }
  if( n === 7 ) {
  background(255, 251, 148);
  }
  if( n === 8 ) {
  background(255, 0, 200);
  }
  if( n === 9 ) {
  background(148, 134, 255);
  }
  if( n === 10 ) {
   background(48, 29, 0);
  }
  image(face, 0, 0);  




}
