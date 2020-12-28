const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var box;
var hexagone;
var tray,slingshot;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  hexagone=new polygon(235,420,30); 
  
  tray=createSprite(330,255,100,5)

  box1=new box(330,255,30,40);
	box2=new box(330,255,30,40);
	box3=new box(330,255,30,40);
  box4=new box(330,255,30,40);
  box5=new box(330,255,30,40);
	box6=new box(330,255,30,40);
	box7=new box(330,255,30,40);
	box8=new box(330,255,30,40);
  box9=new box(360,255,30,40);
	box10=new box(360,255,30,40);
	box11=new box(420,255,30,40);
	box12=new box(450,255,30,40);
	box13=new box(360,255,30,40);
	box14=new box(390,255,30,40);
	box15=new box(420,255,30,40);
  box16=new box(390,255,30,40);
  
slingshot = new chain(hexagone.body,{x:200, y:50});
	

}
  
  function draw(){
    background(255);
    Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box1.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  hexagone.display();
  slingshot.display();

  drawSprites()

}

 
 

function mouseDragged(){
  Matter.Body.setPosition(hexagone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(hexagone.body);
  }
}