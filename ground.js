class Ground
{
    constructor(x,y,width,height)
    {
        var option={
            'isStatic' : true
        }
        this.body1=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body1);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body1.position;
        fill("green")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);    
    }
}

