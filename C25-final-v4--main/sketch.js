
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

var fan,fan1,fan2,fan3;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  
 fan = new Ground(50,370,50,30);
 fan1 = new Ground(150,370,50,30);
  fan2 = new Ground(250,370,50,30);
  fan3 = new Ground(350,370,50,30);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
  con = Matter.Constraint.create ({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:300,
    stiffness:0.1
    });
  
  World.add(world,con);

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
// rect(ground.position.x,ground.position.y,750,20);
  //  fan.show();
  //fan1.show();
  //fan2.show();
  //fan3.show();
  strokeWeight (5);
  stroke("blue");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


