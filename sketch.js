var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameOver
var carAnimation, logAnimation, playerAnimation;
var school,carImage,logImage,playerImage;
var city
var text

function preload()
{
  car1Image = loadImage("images/car1.png");
  car2Image = loadImage("images/car2.png");

  log1Image = loadImage("images/log1.png");
  log2Image = loadImage("images/log2.png");

  playerImage = loadImage("images/Player-03.png")

  gameOverImage = loadImage("images/gameover.png")
  cityImage = loadImage("images/city1.png")
  youWinImage = loadImage("images/you win.png")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  carGroup1 = new Group();
  logGroup1 = new Group();
  city = createSprite(width/2,-1500)
  city.addImage(cityImage)
  text=createSprite(width/2,-1500)
  text.visible=false
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight)

    if(i%2===0){

      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black"
    }
    bottomGrass1.shapeColor="green"
  }

 
  for(var i = 0; i < 40;i++){
    cars = new Car(2)
    carGroup1.add(cars.spt)
  }
 
  for(var i = 0; i<40;i++){
    log = new Log(-3)
    logGroup1.add(log.spt)
    
  }
  player = new Player(width/2,height-25)
  player.spt.setCollider("circle",0,0,700)
  logGroup1.setColliderEach("rectangle",0,0,3500,1500)



}


function draw() {
  background("skyblue");
  translate (0,-player.spt.y +height-150)


 if(player.spt.isTouching(city)){
   text.visible=true
  text.addImage(youWinImage)
   carGroup1.setVelocityEach(0,0)
   logGroup1.setVelocityEach(0,0)
   }


 for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x>width){
    carGroup1[i].x=0
  }
  if(carGroup1[i].x<0){
    carGroup1[i].x=width
  }
  
  }

  
  
   for(i=1;i<logGroup1.length;i++){
     if(logGroup1[i].x<0)
     logGroup1[i].x=width
   }

   if(player.spt.isTouching(city)){
     gameState=2
   }
  


    
     
    


    if(player.spt.isTouching(carGroup1) ){
      carGroup1.setVelocityXEach(0,0)
      logGroup1.setVelocityXEach(0,0)
      gameOver = createSprite(width/2,height-350)
      gameOver.addImage(gameOverImage)
     
      player.spt.x=width/2
      player.spt.y=height-25
       }

    if(logGroup1.isTouching(player.spt)){
         player.spt.x=player.spt.x-3
       }

       
    else if((player.spt.y>height-1550 && player.spt.y<height-1300) ||
            (player.spt.y<height-500 && player.spt.y>height-850) ||
            (player.spt.y>height) ||
            (player.spt.x<0) ||
            (player.spt.x>width)){
              player.spt.x=width/2
              player.spt.y=height-25
    }

 
  
 

  drawSprites();

}

function keyPressed(){
  if(keyCode==UP_ARROW){
    player.move(0,-2)
  }

  else if(keyCode==DOWN_ARROW){
    player.move(0,2)
  }

  else if(keyCode==LEFT_ARROW){
    player.move(-2,0)
  }

  else if(keyCode==RIGHT_ARROW){
    player.move(2,0)
  }
}

