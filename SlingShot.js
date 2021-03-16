class SlingShot {
 
    constructor (bodyA,pointB) {


      var kg = {

        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        length: 50

       }
        
       this.pointB = pointB;
       this.sling = Constraint.create(kg)
       World.add (world,this.sling)


    

    
    }

    fly(){

      this.sling.bodyA = null;



    }
      


       display() {

        if (this.sling.bodyA) {
          
          //giving a shorter name.
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
       
        //to increase thickness of line.
        strokeWeight(5);

        //to make the line visible between both bodies.
        line(pointA.x,pointA.y,pointB.x,pointB.y);


        }
         
        


       }


      }