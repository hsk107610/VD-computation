function preload(){
  face = loadImage('1.png');
}

function setup() {
  createCanvas(400, 400);
  background(220); 
  
  image(face, 0, 0);
}

