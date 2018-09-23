var gota_agua = [];



function setup() {
  createCanvas(710, 400);
  stroke(255, 100);
  for (i=0; i <= 1000; i++){
  	gota_agua[i] = new drop();
  }
}

function draw() {
  background(0);
  for (i =0; i <= gota_agua.length - 1; i++){
  	gota_agua[i].fall();
  };
}

function drop() {
	this.x = random(0,710);
	this.y = random(-100,0);
	this.speed = random(5,20);
	this.wind = random(-5,15);


	this.show = function(){
		line(this.x,this.y+random(0,10),this.x+this.wind,this.y+this.speed);
		this.x += this.wind;

	}
	this.fall = function(){
		line(this.x,this.y+random(0,10),this.x+this.wind,this.y+this.speed);
		this.y += this.speed;
		this.x += this.wind;
		if (this.y > 400){
			this.y = random(-100,0);
		}
		if (this.x > 710){
			this.x = random(0,710);
		}
		if (this.x < 0){
			this.x = random(0,710);
		}
	}

}