
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,groupd
var FoodGroup, obstacleGroup
var score=0;
var ST=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  ST = 0;
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
  
  ground = createSprite(200,400,410,10)
  
  banana=createSprite(430,50,50,50);
  banana.addImage("jk",bananaImage);
  banana.scale = 0.1;
  
  obstacle=createSprite(450,385,30,30);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.5;

  monkey=createSprite(50,340)
  monkey.addAnimation("monKEY",monkey_running)
  monkey.scale = 0.2
  
}


function draw() {
  
  monkey.velocityY = monkey.velocityY + 0.8217398721845
  
  if(monkey.isTouching(ground)){
    monkey.velocityY = 0
  }
  
  if(keyDown("space")  &&  monkey.y > 320){
    monkey.velocityY=-15
  }
  
  background("white");
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:  "+score,200,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  ST=Math.ceil(frameCount/frameRate)
  text("Time:  "+ST,200,100)
  
  die();
  
  ba();
  
  if (monkey.isTouching(banana)){
    banana.visible = 0
    score = score+1
  }
  
  if (monkey.isTouching(obstacle)){
    monkey.visible = 0
    score = ("You Have Died")
  }
  
drawSprites();
  
}

function die(){
  if (frameCount %Math.round(random(60,70)) == 0)
  { obstacle = createSprite(400,385,10,10)
   obstacle.addImage(obstaceImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = 11
  }
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -11  
  obstacle.lifetime = 70;
  
  obstacleGroup.add(obstacle)
}

function ba(){
if (frameCount %Math.round(random(50,70)) == 0)
  { banana = createSprite(400,175,10,10)
   banana.addImage(bananaImage);
  banana.scale = 0.3 ;
  }
  
  banana.velocityX = -11
  banana.lifetime = 70;
  banana.scale = 0.3
  
  FoodGroup.add(banana)
}

