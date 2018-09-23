var attractors = [];
var particulas = [];
function setup(){
	createCanvas(1920,1080);
	// definimos um canvas de 1920 por 1080
	for (var i = 0;i<1000;i++){

		particulas.push(new particula(random(width),random(height)));
	}
	for (var i = 0; i <0; i++){

		attractors.push(createVector(random(width),random(height)));
	}

	//definimos um vetor de 200 por 200
}
function draw(){
	background(0);
	stroke(255);
	strokeWeight(4);
	// Aqui criamos um ponto
	for (var i = 0; i < attractors.length; i++){
		if (i % 2 == 0){
			stroke(0,255,0);
		}
		else {
			stroke(255,0,0);
		}
		point(attractors[i].x,attractors[i].y);
	}
	for (var i = 0;i<1000;i++){
		particula = particulas[i]
		for (var j=0;j<attractors.length;j++){
			particula.atraida(attractors[j],j);
		}
		particula.update();
		particula.show();

	}


}
function mousePressed(){
	attractors.push(createVector(mouseX,mouseY));
}
function particula(x,y){
	// classe objeto
	background(51);
	this.pos = createVector(x,y);
	this.prev = createVector(x,y);
	this.veloc = p5.Vector.random2D();
	// velocidade ^
	this.acc = createVector();
	// Aceleração ^
	this.update = function(){
		this.veloc.add(this.acc);
		this.veloc.limit(5);
		this.pos.add(this.veloc);
		this.acc.mult(0);
		// Aqui passamos a posição para a velocidade 
		// e adicionamos aceleração a velocidade

	}
	// pos cria o ponto
	this.show = function(){
		stroke(190);
		strokeWeight(4);
		line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
		this.prev.x = this.pos.x;
		this.prev.y = this.pos.y;

	}
	// show mostra o ponto no vetor;
	this.atraida = function(target,j){
		// var dir = target - this.pos;
		var force = p5.Vector.sub(target,this.pos);
		// calculo a distancia do objeto para o ponto de atração
		var distance2 = force.magSq();
		// var d = force.mag();
		distance2 = constrain(distance2,25,500);
		// d = constrain(d,25,25);
		// pego a distancia ao quadrado
		var G = 50;
		var strengt = G / distance2;
		//var strengt = G / (d*d);
		force.setMag(strengt);
		if (j % 2 == 1){
			force.mult(-0.5);
		}
		this.acc.add(force);
	}
	
}