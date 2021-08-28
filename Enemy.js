
//Criar uma classe que represente o enemy
class Enemy extends AutomaticBall{
    speedX = 10;
    speedY = 10;

    constructor(initialX,initialY){
        super(initialX,initialY,"blue",30);
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