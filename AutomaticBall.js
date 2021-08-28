class AutomaticBall extends Ball{

    speedX;
    speedY;

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}