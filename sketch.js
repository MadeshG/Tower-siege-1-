const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState="onSling"

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,400);


    ground = new Ground(300, 400, 1200, 100);
    stand=new Ground(600,250,60,10)
    box1 = new Box(585,230,30,30)
    box2 =new Box (585,210,30,30)
    box3 = new Box (615,230,30,30)
    box4 = new Box (200,350,30,30)
}

function draw(){
    background("white")
    Engine.update(engine);
   // polygon1.display()
   ground.display()
   stand.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
    drawSprites()
}

function mouseDragged(){
    if(gameState==="onSling"){
    Matter.Body.setPosition(box4.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launch"
}
