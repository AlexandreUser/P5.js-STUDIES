var angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
  stroke(255, 100);
}

function draw() {
  background(0);
  //translate(width/2,height/2);
  rectMode("CENTER");
  var ofset = 0.1
  for (var i =0; i < width; i+= 10){
  	push();
  	var a = angle + ofset;
  	h = map(sin(a),-1,1,0,100);
  	rect(i - width/2,0,9,h)
  	pop();
  	ofset += 0.1;
  }
  angle += 0.1;

}
