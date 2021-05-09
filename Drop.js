class Ball{
    constructor(x, y, ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20,options);
       
        
        World.add(world, this.body);
      }

      Update(){

        if(this.rain.position.y>height){
            Matter.Body.setposition(this.rain,{x:random(0,400),y:random(0,400)})
        }
      }

      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        fill("black");
        ellipse( 0, 0,20,20);
        pop();
      }
}