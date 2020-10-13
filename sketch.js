var fixedRect,movingRect;
function setup() {
  createCanvas(800,700);
  fixedRect = createSprite(650, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityX = -1;

  movingRect = createSprite(200, 200, 80,30)
  movingRect.shapeColor="green";
  movingRect.velocityX = 4;
  
}

function draw() {
  background(150);
  

  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX *(-1);
    fixedRect.velocityX = fixedRect.velocityX *(-1);
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y< movingRect.height/2 + fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY *(-1);
    fixedRect.velocityY = fixedRect.velocityY *(-1);
  }

  drawSprites();
}