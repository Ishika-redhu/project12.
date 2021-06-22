var path,pathImg,boy,boyImg,a1,a2;
function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  //pre-load images
}

function setup(){
  createCanvas(402,400);
  path = createSprite(200,200)
 boy = createSprite(200,300,20,20)
 path.addImage(pathImg);
 path.scale=1.34
 boy.addAnimation("running",boyImg);
  boy.scale=0.1
 path.velocity.y=12
 a1 = createSprite(1,200,70,400);
 a2 = createSprite(399,200,70,400);
 a1.visible=false;
 a2.visible=false;

}

function draw() {
  background(0);

 if(path.y > 400 ){
 path.y = height/2
}
 boy.x=World.mouseX
  boy.bounceOff(a1);
  boy.bounceOff(a2);
 

 drawSprites();
}
