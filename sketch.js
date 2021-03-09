var log;
var ball1;
var ball2;
var ball3;
var ball4;
var ground;
var slingShot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
	createCanvas(800,650);


	engine = Engine.create();
	world = engine.world;

	log = new Log(425,350,250,20);
	
	ball1 = new Ball(350,400,25)

	ball2 = new Ball(400,400,25)

	ball3 = new Ball(450,400,25)

	ball4 = new Ball(500,400,25)

	ground = new Ground(width/2, 630, width,20)

	slingShot = new Slingshot(ball1.body,{x:300,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  log.display();
  ground.display();
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly()
}
