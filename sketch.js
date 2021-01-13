var fixedRect, movingRect;
var go1,go2;
var go3,go4;
var go5,go6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1=createSprite(200,200,100,100);
  go1.shapeColor="orange";
  go2=createSprite(400,400,100,100)
  go2.shapeColor="red";
  go3=createSprite(400,200,100,100);
  go3.shapeColor="pink";
  go3.velocityX=-2;
  go4=createSprite(100,100,100,100)
  go4.shapeColor="pink";
  go4.velocityX=2;
  go5=createSprite(500,200,100,100);
  go5.shapeColor="magenta";
  go5.velocityY=2
  go6=createSprite(500,400,100,100)
  go6.shapeColor="magenta";
  go6.velocityY=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/
  isTouching(movingRect,go2);
if(isTouching(movingRect,go2)){
movingRect.shapeColor="blue"
go2.shapeColor="blue";
}
else{
  movingRect.shapeColor="white";
  go2.shapeColor="white"
}
bounceOff(go3,go4)

  drawSprites();
}
