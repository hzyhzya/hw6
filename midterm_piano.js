function setup() {
  createCanvas(700, 300);
}

function draw() {
  background(225);
  for (var i = 0; i < width; i = i + 65) { 
  noStroke();
  fill(255);
  rect(i, 0, 60, 300);
  for (var x = 50; x < width; x = x + 65) {
  fill(0)
  rect(x, 0, 20, 150);
  }}
}

function keyPressed() {
  //if (key == "Q") {
    //sounds[Q].play();
}
