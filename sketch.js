
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,abc,ground;
var basket1,basket2,basket3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	abc = new ABC (600,440,20,400);
	ground = new Ground (10,650,1000000,50);
	player = new Player (100,350,10);
	basket1 = new Basket (580,250,10,100);
	basket2 = new Basket (480,250,10,100);
	basket3 = new Basket (530,300,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
  basket1.display();
  basket2.display();
  basket3.display();
  ground.display();
  player.display();
  abc.display();
  restitution :0.6;

}


function keyPressed(){
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(player.body,player.body.position,{x:62,y:-150});
	}
	}
