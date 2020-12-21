
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render


function preload()
{
dustbinImage=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	box4=createSprite(1000,540,20,20);
	box4.addImage(dustbinImage);
	box4.scale=0.7;

	groundSprite=createSprite(width/2, height-42, width,10);
	groundSprite.shapeColor= "brown";
	
	
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);


	box1=new dustbin(930,580,20,150);
	box2=new dustbin(1010,650,100,20);
	box3=new dustbin(1050,580,20,150);
	paper1=new Paper(100,600,70);

	
	
//Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  box2.display();
  box3.display();
  box1.display();
  paper1.display();

  
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode=== UP_ARROW ){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:265,y:-265})
}
}
