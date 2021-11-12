class mainCar{
    constructor(posX,posY,ancho,largo){
       this.posX = posX;
       this.posY = posY;
       this.ancho = ancho;
       this.largo = largo;
    }

    dibujar() {
    fill(255);
    noStroke();
    fill(40);
    //rueditas delanteras
    square(this.posX + 10, this.posY - 7, 10);
    square(this.posX + 10, this.posY + 47, 10);
    
    //rueditas traseras
    fill(40);
    square(this.posX + 68, this.posY - 7, 10);
    square(this.posX + 68, this.posY + 47, 10);

    noStroke();
    fill(180, 21, 28);
    rect(this.posX,this.posY,this.ancho,this.largo);
    
    }

    movements(move){
        switch(move){
            case UP_ARROW:
                if(this.posY >= 100 && this.posY <= 350){
                    this.posY = this.posY - 100;
                }
                break;
            case DOWN_ARROW:
                if(this.posY >= 50 && this.posY <= 250){
                    this.posY = this.posY + 100;
                }
                break;
            case RIGHT_ARROW:
                this.posX = this.posX + 40;
                break;
            case LEFT_ARROW:
                if(this.posX >= 50 && this.posX <= 600){
                    this.posX = this.posX - 40;
                }
                break;
        }
    }

    get getPosX(){
        return this.posX;
    }

    /**
     * @param {any} posX
     */
    set setPosX(posX){
        this.posX = posX;
    }

    get getPosY(){
        return this.posY;
    }
    set setPosY(posY){
        this.posY = posY;
    }
}