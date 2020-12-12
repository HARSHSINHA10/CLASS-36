//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref('FOOD');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)


if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogHappy)

}

  drawSprites();
  //add styles here
fill(0)
  Text("PRESS UP_ARROW TO FEED THE DOG",100,50)
}

function readStock(data){
  foodS=data.val;
}

function writeStock(x){

if(x<=0){
x=0
}
else{
  x=x-1;
}

  database.ref('/').update({

  FOOD:x
}

)






}