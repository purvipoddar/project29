
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var ground1,ground2,ground3;
var poly;
var constrain;

function setup() {
  createCanvas(1100,600);
  engine = Engine.create();
	world = engine.world;
  // stroke(255)
  push();
  fill("black");
  ground1 = new Ground(555,580,1100,20);
  pop();

  push();
  fill("brown");
  ground2 = new Ground(400,250,300,15);
  ground3 = new Ground(780,500,350,15);
  pop();
// stack1 blocks
  // layer1
  
   block2 = new Box(180,60,35,45);
   block3 = new Box(210,60,35,45);
   block4 = new Box(230,60,35,45);
  //  layer2
  // upper wale me
   block1 = new Box(170,90,35,45);
   block5 = new Box(210,90,35,45);
   block6 = new Box(230,90,35,45);
   block7 = new Box(150,90,35,45);
//  layer3
// niche wale me 
   block8 = new Box(330,235,30,40)
   block9 = new Box(360,235,30,40);
   //  layer4
  // niche wale me 
   block10 = new Box(390,235,30,40);

  // stack2 blocks
  //  layer1
  // niche wale me 
   block11 = new Box(420,235,30,40);     
   block12 = new Box(450,235,30,40);
   block13 = new Box(360,195,30,40);
   block14 = new Box(390,195,30,40);
    //  layer2
    // niche wale me
   block15 = new Box(420,195,30,40);
   block16 = new Box(390,155,30,40);
  //  uper wale me
   block17 = new Box(30,157,35,45);
  //  layer3
  // upper wale me
   block18 = new Box(40,54,35,45);
   block19 = new Box(60,54,35,45);
  // layer4
  // upper wale me
   block20 = new Box(200,21,35,45);
 
   poly = new Hexa(100,100,15);

   constrain = new Const(poly.body,{x:100,y:150});

  Engine.run(engine);

}

function draw() {
 background(0);  
 ground1.display();
 ground2.display();
 ground3.display();

fill("blue");
 
 block2.display();
 block3.display();
 block4.display();

 fill("pink");
 block1.display();
 block5.display();
 block6.display();
 block7.display();

fill("red")
 block8.display();
 block9.display();

 fill("yellow");
 block10.display();

fill("blue");
 block11.display();
 block12.display();
 block13.display();
 block14.display();

 fill("pink");
 block15.display();
 block16.display();
 block17.display();

 fill("red");
 block18.display();
 block19.display();

 fill("yellow");
 block20.display();

 poly.display();
 
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
  function mouseReleased(){
    constrain.fly()
}