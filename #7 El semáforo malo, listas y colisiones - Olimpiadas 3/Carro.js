class Carro {

  constructor(x, y, via) {
    this.dir = int(random(0, 2));
    this.y = y + (this.dir * 9);
    this.x = x;
    this.ancho = 40;
    this.largo = 80;


  

    this.via = via;
   
  }

  mostrar() {


    noStroke();

    fill(40);
    square(this.x - 10, this.y + this.ancho / 5, this.ancho / 3);
    square(this.x + 37, this.y + this.ancho / 5, this.ancho / 3);

    square(this.x - 10, this.y + (this.largo - (this.ancho / 2)), this.ancho / 3);
    square(this.x + 37, this.y + (this.largo - (this.ancho / 2)), this.ancho / 3);

    noStroke();
    fill(255, 219, 88);
    rect(this.x, this.y, this.ancho, this.largo);

    this.mover();






  }

  mover() {

    switch (this.via) {
      case 1:


        this.y -= 2;
        if (this.y < -85) {
          this.y = int(random(605, 685));
        }



        break;

      case 2:
        this.y += 2;

        if (this.y > 605) {
          this.y = int(random(-180, -85));

        }
        break;

    }

  }

  getCarY() {
    return this.y;
  }
}