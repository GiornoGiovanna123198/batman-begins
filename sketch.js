
var maxdrop=100;
var 
function preload(){
    thunder1.loadImage("thunderbolt/1.png");
    thunder1.loadImage("thunderbolt/2.png");
    thunder1.loadImage("thunderbolt/3.png");
    thunder1.loadImage("thunderbolt/4.png");
}

function setup(){
   
    for(i=0;i<maxdrops;i++)
    {
        drops.push(createDrop,(random(0,400)  ,random(0,400)));
    }
}

function draw(){
    
    rand= Math.round(random(1,4));
    
    if(frameCount%80===0){
        thunderCreatedframe= frameCount;
        thunder= createSprite ,(random(10,370) ,random(10,30),10,10);
        switch(rand){
            case 1: thunder.addimage(thunder1);
            break;
            case 2: thunder.addimage(thunder2);
            break;
            case 3: thunder.addimage(thunder3);
            break;
            case 4: thunder.addimage(thunder4);
            break;
            default: break;
        }
        thunder.scale= random(0.3,0.6);
    }
    

}   

