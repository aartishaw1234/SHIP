var sea,ship;
var seaImage,shipImage;

function preload(){
  seaImage= loadImage("sea.png");
  shipImage= loadAnimation("ship-1.png","ship-2.png");
 

}

function setup(){
  createCanvas(400,400);
  background(0);

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImage);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  if(sea.x > 400 ){
    sea.x= width/2;
  }
  sea.velocityX= -3;  
  drawSprites();
}
