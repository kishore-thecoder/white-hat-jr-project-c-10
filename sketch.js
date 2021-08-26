var ship,ship_running, edges;
var seaImg;


function preload(){
ship_running = loadAnimation("ship-1","ship-2","ship-3","ship-4");
seaImg = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running",ship_running);
  edges = createEdgeSprites();

  ship.scale = 1.0
  ship.x = 50
  
  sea = createSprite(200,180,400,20);
  sea.addImage('sea',seaImg)
  sea.X=sea.width/2  
 } 



function draw() {
  background("blue");

  sea.velocityX=-2
  console.log(sea.x)

  if(sea.x<0){
    sea.x=sea.width/2
  }

  console.log(ship.y)

  if(keyDown("space")){
    ship.velocityY = -10
  }

  ship.velocityY = ship.velocityY +5;
  
  ship.collide(sea)
  drawSprites();


}