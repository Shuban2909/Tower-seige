class SlingShot{
    constructor(bodyA, pointB){
    

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("blue");
            strokeWeight(4);
            
            //writing if else condition to make the rubber band and piece to come to the bird's face
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+25,pointB.y);
            //image(this.image3,pointA.x-30,pointA.y-10,15,25);
            }
            else{ line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+25,pointB.y);
               // image(this.image3,pointA.x+25,pointA.y-10,15,25);}
        }
        
    }
}
}