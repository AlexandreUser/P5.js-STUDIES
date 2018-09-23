var angle = 0;
var wid = 50;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  //translate(width/2,height/2);
  rotateX(angle);
  var ofset = 0.1
  for (var i =0; i < width; i+= wid){
  	push();
  	var a = angle + ofset;
  	h = map(sin(a),-1,1,0,100);
  	fill(255);
  	translate(i - width/2,0,0);
  	//rect(i - width/2,0,wid - 2,h)
  	box(wid);
  	pop();
  	ofset += 0.1;
  }
  angle += 0.1;

}
