const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var drops=[];
function preload(){
    
}

function setup(){

    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(500,500);

    var maxDrops=100;
    for(var i=0;i<maxDrops;i++){
drops.push(new Drop(random(0,400)),random(0,400),5);
console.log(drops);
    }


    man=new Man(200,200,10,10);
   //bolt= new Bolt(0,0,10,10)
   
    
}

function draw(){

    Engine.update(engine);

    background(0);
    
    

    man.display();
    //bolt.display();

   drop.display();

    


}  





