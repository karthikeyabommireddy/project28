
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function preload()
{
	Boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new Tree(850,320);
	
	ground=new Ground(width/2,600,width,20);
	mango1=new Mango(1100,100,30);
	mango2=new Mango(920,200,30);
	mango3=new Mango(990,110,30);
	mango4=new Mango(980,250,30);
	mango5=new Mango(1100,200,30);
	mango6=new Mango(1200,270,30);
	mango7=new Mango(1180,140,30);
	mango8=new Mango(1100,290,30);
	mango9=new Mango(1280,250,30);
	mango10=new Mango(1230,195,30);
	stone=new Stone(235,420,30);
	boy=createSprite(235,420);
	lancher=new Lancher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  lancher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    lancher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		lancher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.Position
stoneBodyPosition=lstone.body.Position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	matter.Body.setStatic(lmango.body,false);
}
}