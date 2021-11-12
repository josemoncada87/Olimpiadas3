let carritos = [];
let carritoMain;

let puntajes;

function setup(){
    createCanvas(600,400);

    //Carritos para hacer el juego más fácil de ganar
    carritos[0] = new Carritos(200,180,80,50);
    carritos[1] = new Carritos(50,278,80,50);
    carritos[2] = new Carritos(500,278,80,50);
    carritos[3] = new Carritos(0,80,80,50);
    carritos[4] = new Carritos(250,80,80,50);

    //Carrito que muevo
    carritoMain = new mainCar(0,180,80,50);

    //puntajes
    puntajes = 0;
    
}

function draw(){
    background(38 , 142 , 0);

    //fondos Carril 
    fill(120,120,120);
    rect(0,50,600,300);

    //todas las lineas del carril

    //lineas amarillas
    noStroke();
    fill(254,220,86);
    rect(0,50,600,8);

    fill(254,220,86);
    rect(0,350,600,8);
    
    //lineas blancas 
    fill(255);
    rect(0,150,600,5);

    fill(255);
    rect(0,250,600,5);
    
  
   
    


    //Carrito 
    for (let index = 0; index < carritos.length; index++) {
        carritos[index].dibujar();
        carritos[index].move();
        //distancia de choque
        let distCar = dist(carritos[index].getPosX +80,carritos[index].getPosY, carritoMain.getPosX+80, carritoMain.getPosY);
        if(distCar < 60){
            carritoMain.setPosX = 0;
        }
    }
    carritoMain.dibujar();
    if(carritoMain.getPosX == 600){
        puntajes = puntajes + 50;
        carritoMain.setPosX = 0;
        carritoMain.setPosY= 180;
    }

    textSize(20);
    fill(255);
    text("Puntaje: "+ puntajes, 35,30);
    
}

function keyPressed(){
    carritoMain.movements(keyCode);
}