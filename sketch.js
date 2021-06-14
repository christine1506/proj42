var iss, issImg;
var spaceC1, spaceC2, spaceC3, spaceC4;
var spaceBg;

function preload(){
  issImg = loadImage("Docking-undocking/iss.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(200, 200, 20, 20)
  iss.addImage(issImg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}