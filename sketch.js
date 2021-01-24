var fr,mr;
function setup() {
  createCanvas(800,400);
  fr=createSprite(200,200,50,50);
  mr=createSprite(400,200,50,50);
  fr.shapeColor="green";
  mr.shapeColor="green";
  mr.velocityX=-5;

}

function draw() {
  background(255,255,255);  
  if(mr.x-fr.x<mr.width/2+fr.width/2&&
    fr.x-mr.x<mr.width/2+fr.width/2&&
    mr.y-fr.y<mr.height/2+fr.height/2&&
    fr.y-mr.y<mr.height/2+fr.height/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
    mr.velocityX=mr.velocityX*(-1);
  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  
  }
  drawSprites();
}