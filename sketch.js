const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,groundOption;
var ball,ballOption;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

 groundOption = {
   isStatic : true
 }

 ballOption = {

  restitution : 1
 }


  ground = Bodies.rectangle(200,390,400,20,groundOption);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20,ballOption);
  World.add(world,ball);

  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
 
  rectMode(CENTER); 
 rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

}