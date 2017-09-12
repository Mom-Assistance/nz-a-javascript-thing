var trail=[];
var hu=0;
const huchange=1;

function setup(){
  createCanvas(displayWidth, displayHeight);
  noStroke();
  colorMode(HSB);
}

function draw(){
  background(0, 0, 2);
  beginShape(TRIANGLE_STRIP);
  for (var i = 0; i < trail.length; i++) {
    // trail[i].vel.add(p5.Vector.random2D().mult(0.5));
    // trail[i].vel.mult(0.95);
    trail[i].pos.add(trail[i].vel);
    fill(map(sin((trail[i].hu)*0.01%360), -1, 1, 180, 360), 100, 100, 0.5);
    vertex(trail[i].pos.x, trail[i].pos.y);
  }
  endShape();
  if (trail.length>100){
    trail.splice(0, 2);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
  trail.push({pos:createVector(mouseX, mouseY),vel:p5.Vector.random2D().mult(0.5),hu:hu%360});
  hu+=huchange;
}
