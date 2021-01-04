class Dustbin
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 213;
        this.wallThickness = 20;
        var options = {
            isStatic : true
             }
        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options);
        this.leftbody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
        this.rightbody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.bottombody);
        World.add(world,this.leftbody);
        World.add(world,this.rightbody);

    }

    display()
    {
        var bottom=this.bottombody.position;   
        push()
        translate(bottom.x+230, bottom.y-30);
        rectMode(CENTER);
        fill("255, 0, 255");
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop()

        var left=this.leftbody.position;   
        push()
        translate(left.x, left.y);
        rectMode(CENTER);
        fill("255, 0, 255");
        pop()
        
        var right=this.rightbody.position;   
        push()
        translate(right.x, right.y);
        rectMode(CENTER);
        fill("255, 0, 255");
        pop()
    }
}