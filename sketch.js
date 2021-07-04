const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<=05){
        bg = "sunrise1.png";
    }
    if(hour>=05 && hour<=06){
        bg = "sunrise2.png";
    }
    if(hour>=06 && hour<=08){
        bg = "sunrise3.png";
    }
    if(hour>=09&& hour<=12){
        bg = "sunrise4.png";
    }
    if(hour>=13 && hour<=15){
        bg = "sunrise5.png";
    }
    if(hour>=16 && hour<=17){
        bg = "sunrise6.png";
    }
    if(hour>=17 && hour<=18){
        bg = "sunrise7.png";
    }
    if(hour>=18 && hour<=19){
        bg = "sunrise8.png";
    }
    if(hour>=19 && hour<=20){
        bg = "sunrise10.png";
    }
    if(hour>=20 && hour<=22){
        bg = "sunrise11.png";
    }
    if(hour>=22 && hour<=24){
        bg = "sunrise12.png";
    }
    backgroundImg = loadImage(bg);
   


}
