const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground2,ground3,ground4;
var ball,ball2,ball3,ball4;

function setup(){
    var canvas = createCanvas(500,400);
    engine = Engine.create();
    world = engine.world;

   //GROUND
    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,500,20,ground_options);
    World.add(world,ground);

//GROUND2
var ground_options ={
    isStatic: true
}
ground = Bodies.rectangle(200,390,500,20,ground_options);
World.add(world,ground);


//GROUND3
var ground_options ={
    isStatic: true
}
ground = Bodies.rectangle(200,390,500,20,ground_options);
World.add(world,ground);


//GROUND4
var ground_options ={
    isStatic: true
}
ground = Bodies.rectangle(200,390,500,20,ground_options);
World.add(world,ground);


    //BALL
    var ball_options ={
        restitution: 1
    }
    ball = Bodies.circle(100,100,20, ball_options);
    World.add(world,ball);
  
//BALL2
 var ball2_options ={
        restitution: 1
    }
    ball2 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball2);
  
 //BALL3
  var ball3_options ={
        restitution: 1
    }
    ball3 = Bodies.circle(300,100,20, ball_options);
    World.add(world,ball3);
  
  
 //BALL4 
  var ball4_options ={
        restitution: 1
    }
    ball4 = Bodies.circle(400,100,20, ball_options);
    World.add(world,ball4);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    //GROUND
    push();
    strokeWeight(6);
    stroke("blue");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
    pop();
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);

    //GROUND2
    push();
    strokeWeight(6);
    stroke("red");
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,600,20);
    pop();
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,600,20);

    //GROUND3
    push();
    strokeWeight(6);
    stroke("red");
    rectMode(CENTER);
    rect(ground3.position.x,ground3.position.y,600,20);
    pop();
    rectMode(CENTER);
    rect(ground3.position.x,ground3.position.y,600,20);

    //GROUND4
    push();
    strokeWeight(6);
    stroke("red");
    rectMode(CENTER);
    rect(ground4.position.x,ground4.position.y,600,20);
    pop();
    rectMode(CENTER);
    rect(ground4.position.x,ground4.position.y,600,20);

    //BALL
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
  
    //BALL2
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);
  
    //BALL3
    ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
  
    //BALL4
    ellipseMode(RADIUS);
    ellipse(ball4.position.x, ball4.position.y, 20, 20);
}