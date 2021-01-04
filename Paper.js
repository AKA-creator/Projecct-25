class Paper
{
    constructor(x, y, r)
    {
        var options = {
            isStatic : false, 
            restitution : 0.3, 
            friction:0.5, 
            density:1.2
             }
        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(x,y, (this.r-20)/2, options);
        World.add(world,this.body);
    }

    display()
    {
     var paperpos=this.body.position;   
     push()
     translate(paperpos.x, paperpos.y);
     rectMode(CENTER);
     fill("255, 0, 255");
     imageMode(CENTER);
     image(this.image, 0, 0, this.r, this.r);
     //ellipse(pos.x, pos.y,this.radius, this.radius);
     pop()
    }
}