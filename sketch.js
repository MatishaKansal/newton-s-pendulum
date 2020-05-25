// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
// function preload()
// {
	
// }
var engine, world;
var ball;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1= new Bob(230, 310, 20);
	ball2= new Bob(270, 300, 20);
	ball3= new Bob(310, 300, 20);
	ball4= new Bob(350, 300, 20);
	ball5= new Bob(390, 300, 20);
	roof = new Roof(300, 200, 200, 10);

	rope1 = new Rope(ball1.body, roof.body, - 40*2, 0);
	rope2 = new Rope(ball2.body, roof.body, - 20*2, 0);
	rope3 = new Rope(ball3.body, roof.body, 0*2, 0);
	rope4 = new Rope(ball4.body, roof.body, 20*2, 0);
	rope5 = new Rope(ball5.body, roof.body, 40*2, 0);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	// Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 


	Engine.run(engine);
  
}


function draw() {
	background(244, 253, 255);
    Matter.Engine.update(engine);
  rectMode(CENTER);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



