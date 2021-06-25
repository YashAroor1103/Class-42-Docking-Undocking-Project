var iss;
var issImage;
var spaceCraft;
var spaceCraftImage1;
var spaceCraftImage2;
var spaceCraftImage3;
var spaceCraftImage4;
var hasDocked = false;
var back_img;


function preload(){
  back_img = loadImage("Docking-undocking/spacebg.jpg");
  issImage = loadImage("Docking-undocking/iss.png");
  spaceCraftImage1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraftImage2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceCraftImage3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceCraftImage4 = loadImage("Docking-undocking/spacecraft4.png");
}





function setup() {
  createCanvas(800,400);

    iss = createSprite(400, 100, 50, 50);
    iss.addImage(issImage);
    iss.scale = 0.3;
    iss.setCollider("rectangle",0,0,200,200);

    spaceCraft = createSprite(100, 300, 50, 50);
    spaceCraft.addImage(spaceCraftImage1);
    spaceCraft.scale = 0.2;
    
}

function draw() {
  background(back_img);  

  if(keyIsDown(RIGHT_ARROW)){
    spaceCraft.velocityX = 6;
    spaceCraft.addImage(spaceCraftImage4);
  }

  if(keyIsDown(LEFT_ARROW)){
    spaceCraft.velocityX = -6;
    spaceCraft.addImage(spaceCraftImage3);
  }

  if(keyIsDown(UP_ARROW)){
    spaceCraft.velocityY = -6;
    spaceCraft.addImage(spaceCraftImage2);
  }

  if(keyIsDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraftImage2);  
  }

  if(spaceCraft.isTouching(iss)){
    spaceCraft.velocityX = 0;
    spaceCraft.velocityY = 0;
    textSize(20);
    fill("white");
    text("DOCKING SUCCESSFUL !",50,100);
  }

  drawSprites();
}