class snow {
    constructor(x,y,r)   
     {
        var option = {
            'restitution':0.8,
            'isStatic':false
        }
            this.image = loadImage("snow5.webp");
            this.body = Bodies.circle(x,y,(r)/2,option);
            this.width = width;
            this.height = height;
            World.add(world, this.body);

        }

    display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    image(this.image,0,0,50,50);
    pop();

   }
}