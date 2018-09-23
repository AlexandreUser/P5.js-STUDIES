var random_walk;



function setup() {
  createCanvas(710, 400);
  stroke(255, 100);
  random_walk = new random_walker();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  random_walk.walk();
  random_walk.show();
}

function random_walker() {
	this.x = 0;
	this.y = 100;
	this.x_old;
	this.y_old;
	this.show = function(){
		line(this.x,this.y,this.x_old,this.y_old);

	}
	this.walk = function(){
		var possibilite = random(0,100)
		if (possibilite <= 50){
			this.y_old = this.y;
			this.y +=10;
		}
		else{
			this.y_old = this.y;
			this.y -=10;
		}
		if (this.y > 400 || this.y < 0){
			this.y = random(0,100);
			this.y_old = this.y;
		}
		this.x_old = this.x;
		this.x +=10;	
		if (this.x > 710){
			this.x = 0;
			this.x_old = this.x;
		}
		line(this.x,this.y,this.x_old,this.y_old);
	}
	
}