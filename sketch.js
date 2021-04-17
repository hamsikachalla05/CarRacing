var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1image, car2image, car3image,car4image, trackImage, ground
function preload(){

car1image=loadImage("images/car1.png");
car2image=loadImage("images/car2.png");
car3image=loadImage("images/car3.png");
car4image=loadImage("images/car4.png");
trackImage=loadImage("images/track.jpg");
ground=loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1 && playerCount==4){
    clear();
    game.play();
  }
  if(gameState==1 &&playerCount>4){
    text("waiting for the players",200,200);
  }
  if(gameState==2){
    game.end();
  }
}
