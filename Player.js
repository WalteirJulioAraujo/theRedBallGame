
//Criar uma classe que represente o Player
class Player extends Ball{

    constructor(initialX,initialY){
        super(initialX,initialY,"red",100);
    }

    moveTo(x,y){
        this.x = x;
        this.y = y;
    }

}
