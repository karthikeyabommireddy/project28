class Lancher{
    constructor(body,anchor){
var options={
    bodyA:body,
    pointB:anchor,
    stifness:0.004,
    length:10
}
this.bodyA=body;
this.pointB=anchor;
this.lancher=Constraint.create(options)
World.add(world,this.lancher);
    }
    fly(){
        this.lancher.bodyA=null;
    }
    attach(body){
        this.lancher.bodyA=body;
    }
    display(){
        if(this.lancher.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}