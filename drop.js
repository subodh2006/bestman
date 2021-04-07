class drop{
constructor(x,y){
var options = {
 'restitution':0.8,
  'friction':1.0,
  'density':1.0
 }
 this.drop = Bodies.rectangle(x, y, 5, options);
 World.add(world, this.drop);
          }
 display(){
 var angle = this.body.angle;
 push();
 translate(this.body.position.x, this.body.position.y);
 rotate(angle); 
 imageMode(CENTER);
 strokeWeight(4);
 stroke("green");
 fill(255);
 pop();
          
        




    }
}
