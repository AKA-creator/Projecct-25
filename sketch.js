
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin1, dustbin2, dustbin3, ground, dustOb;



function setup() {
	createCanvas(1000, 700);

    
	engine = Engine.create();
  world = engine.world;
  
  paperBall = new Paper(200, 500, 70);
  dustbin1 = new Dustbin(1000, 560, 20, 50);
  dustbin2 = new Dustbin(865, 610, 190, 20);
  dustbin3 = new Dustbin(820, 555, 20, 50);
  dustOb = new Dustbin(600, 650)
  ground = new Ground(500, 625, 1000, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  paperBall.display();
  dustOb.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW ){
     Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:110, y:-125})
}

}