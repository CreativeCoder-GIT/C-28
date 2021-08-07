class SlingShot{
    constructor(A,B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.body= Constraint.create(options);
        World.add(world, this.body);
    }

    display(){

        if(this.body.bodyA)
        {
        var posA = this.body.bodyA.position;
        var posB = this.body.pointB;
        strokeWeight(4);
        line(posA.x , posA.y, posB.x, posB.y);
        }
    }

    fly()
    {
      this.body.bodyA=null
    }
    
}  