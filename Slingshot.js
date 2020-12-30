class Slingshot{
    constructor(body1,pointB){
    var Option={
        bodyA:body1,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    
    this.sling=Constraint.create(Option);
    World.add(world,this.sling);

}
fly(){
    this.sling.bodyA=null;
}
display(){
    if(this.sling.bodyA!==null){
        
    
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}