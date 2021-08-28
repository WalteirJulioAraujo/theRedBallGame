class Ball{
    x;
    y;
    radius;
    color;

    constructor(initialX,initialY,color,radius){
        this.x = initialX;
        this.y = initialY;
        this.color = color;
        this.radius = radius;
    }

    draw(){
        drawCircle(this.x, this.y, this.radius, this.color);
    }
}