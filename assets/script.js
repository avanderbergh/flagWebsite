function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("#p5");
  frameRate(0.33);
  noStroke();
}


function japan() {
  background(255);
  fill("red");
  circle(width/2, height/2, height/2); 
}

function germany() {
  fill("black");
  rect(0, 0, width, height / 3);
  fill("red");
  rect(0, height / 3, width, height / 3);
  fill("yellow");
  rect(0, height * 2/3 , width, height); 
}

function draw() {
  if (frameCount % 2 == 0) {
    germany();
  } else { 
    japan();
  }
}