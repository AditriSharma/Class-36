var gameState = 0
var playerCount,database
var form,player,game

function setup(){
  database = firebase.database();
  createCanvas(400,400);

 }

function draw(){
  background("white");
  
 drawSprites();
  
}

