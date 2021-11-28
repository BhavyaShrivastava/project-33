const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var child1,child1_img;
var child2,child2_img;
var child3,child3_img;
var child4,child4_img;
var invisibleGround;
var snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;


function preload(){

  background_img = loadImage("snow1.jpg");
  child1_img = loadImage("child5.png");
  child2_img = loadImage("child3.jpg");
  child3_img = loadImage("child1.jpg");
  child4_img = loadImage("child2.jpg");
  child5_img = loadImage("child4.jpg");
}

function setup() {

  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  Snow1 = new snow(30,50,10);
  snow2 = new snow(200,60,10);
  snow3 = new snow(340,100,10);
  snow4 = new snow(400,200,10);
  snow5 = new snow(550,300,10);
  snow6 = new snow(600,400,10);
  snow7 = new snow(750,200,10);
  snow8 = new snow(850,300,10);
  snow9 = new snow(950,500,10);
  snow10 = new snow(100,400,10);


   child1option = {
    isStatic:true
  }
  child1 = Bodies.rectangle(500,500,20,20,child1option);
  child2 = Bodies.rectangle(900,500,20,20,child1option);
  child3 = Bodies.rectangle(300,500,20,20,child1option);
  child4 = Bodies.rectangle(100,500,20,20,child1option);
  child5 = Bodies.rectangle(700,500,20,20,child1option);



  World.add(world,child1);

  invisibleGround = Bodies.rectangle(0,600,500,10);
  invisibleGround.visible = true;

}

function draw() {
 background(background_img);  

  Engine.update(engine);

  imageMode(CENTER);
  image(child1_img ,child1.position.x,child1.position.y,150,150);
  image(child2_img ,child2.position.x,child2.position.y,150,150);
  image(child3_img ,child3.position.x,child3.position.y,150,150);
  image(child4_img ,child4.position.x,child4.position.y,150,150);
  image(child5_img ,child5.position.x,child5.position.y,150,150);


  if(keyDown("space") && child1.y >= 159) {
    child1.velocityY = -12;
  }

 // child1.velocityY = child1.velocityY + 0.8

 // child1.collide(invisibleGround);

  Snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();

  
  rect(invisibleGround.position.x,invisibleGround.position.y,1000,500)

  
  drawSprites();

}
