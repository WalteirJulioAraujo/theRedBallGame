
//Criar uma classe que represente o enemy
class Enemy extends Ball{
    speedX = 10;
    speedY = 10;

    constructor(initialX,initialY){
        super(initialX,initialY,"blue",30);
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    bounceOnEdge(){
        if (this.x < 0 || this.x > screenWidth) {
            this.speedX *= -1;
        }
    
        if (this.y < 0 || this.y > screenHeight) {
            this.speedY *= -1;
        }
    }
    
    increaseSpeed(){
        this.speedX *= 1.001;
        this.speedY *= 1.001;
    }
}