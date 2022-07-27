var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
  ghost = createSprite(300,300)
  ghost.addImage(ghostImg)
  ghost.scale = 0.5

  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if (keyDown("left_arrow")) {
      ghost.x = ghost.x -3
    }
    if (keyDown("right_arrow")) {
      ghost.x = ghost.x +3
    }
    if (keyDown("space")) {
      ghost.velocityY = -5
    }
    ghost.velocityY = ghost.velocityY + 0.8
    spawndoors()
    drawSprites()
}
function spawndoors(){
 if (frameCount % 240 === 0) {
  door = createSprite (250,-50)
  door.addImage(doorImg)
  door.x = Math.round( random(120,520) )
  door.velocityY = 3
  door.lifetime = 800
  doorsGroup.add(door)
  climber = createSprite(250,10)
  climber.addImage(climberImg)
  climber.x = door.x
  climber.velocityY = 3
  climber.lifetime = 800
  climbersGroup.add(climber)

 }
}