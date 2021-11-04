var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;
var score

score = 0

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
 
  
  if (frameCount % 60 == 0) {
    
      createApples();
    
      if(rabbit.isTouching(apple)) {
        apple.visible = false;
        apple.lifetime = 0;
      }

      console.log(score);
    }
  
  if (frameCount % 90==0) {

    createLeaf();
    if(rabbit.isTouching(leaf)){

    leaf.visible = false ;
    leaf.lifetime = 0 ;


  }
}




}


function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 70;
  
}
function createLeaf(){
  leaf = createSprite(random(30, 250),30, 15, 20);
  leaf.addImage(leafImg);
  leaf.scale=0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 70;



}
