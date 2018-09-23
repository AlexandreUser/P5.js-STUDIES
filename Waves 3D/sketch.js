var angle = 0;
var wid = 50;
var yangle;
var maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  yangle = atan(1/sqrt(2));
  maxD = dist(0, 0, 200, 200);

}

function draw() {
  background(175);
  //translate(width/2,height/2);
  ortho(500,-500,500,-500,-500,500);
  rotateX(PI / 4);
  rotateY(yangle);
  var ofset = 0.1
  for (var y = 0; y < height; y+=wid){
	  for (var x =0; x < width; x+= wid){
	  	push();
	  	var d = dist(x, y, width / 2, height / 2);
	  	var offset = map(d, 0, maxD, -PI, PI);
	  	var a = angle + ofset;
      	var h = floor(map(sin(a), -1, 1, 100, 300));
	  	normalMaterial();
      	translate(x - width / 2, 0, y - height / 2);
	  	//rect(i - width/2,0,wid - 2,h)
	  	box(wid - 10,h,wid - 10);
	  	pop();
	  	ofset += 0.1;
	  }
	  angle += 0.01;

	}

}