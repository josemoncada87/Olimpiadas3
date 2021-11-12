let carrito = [];
let posicionX;
let posicionY;



let win;

function preload() {


}

function setup() {
  createCanvas(700, 600);

  frameRate(60);

  win = false;

  posicionY = 280;
  posicionX = 10;

  arriba = false;
  abajo = false;
  izquierda = false;
  derecha = false;

  for (let i = 0; i < 4; i++) {


    carrito.push(new Array(3));


    for (let j = 0; j < 3; j++) {

      if (i === 0 || i === 2) {

        carrito[i][j] = new Carro(120 + (100 * i), 20 + (200 * j), 2);

      }
      if (i === 1 || i === 3) {

        carrito[i][j] = new Carro(120 + (100 * i), 500 - (200 * j), 1);


      }
    }
  }
}

function draw() {
  background(255);

  if (win === true) {

  }
  if (win === false) {


    pintarFondo();
    for (let i = 0; i < 4; i++) {

      for (let j = 0; j < 3; j++) {

        carrito[i][j].mostrar();
      }
    }

    personaje();


  }
  if (win === true) {
    if (mouseIsPressed) {
      win = false
    }

  }

}

function personaje() {

  noStroke();

    fill(40);
    square(posicionX + 15, posicionY - 10, 12);
    square(posicionX + 15, posicionY + 38, 12);

    square(posicionX + 55, posicionY - 10, 12);
    square(posicionX + 55, posicionY + 38, 12);

    noStroke();
    fill(93, 193, 185);
    rect(posicionX, posicionY, 80, 40);

  if (arriba) {
    posicionY -= 2;
  }
  if (abajo) {
    posicionY += 2;
  }

  if (izquierda) {
    posicionX -= 2;
  }
  if (derecha) {
    posicionX += 2;
  }

  choque();

  if (posicionX + 80 > 548) {

    posicionX = 10;
    posicionY = 280;
    win = true;
  }
}

function choque() {

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {

      if (posicionY + 40 > carrito[i][j].getCarY() && posicionY < carrito[i][j].getCarY() + 80) {
        if (posicionX + 80 > 120 + (100 * i) && posicionX < 160 + (100 * i)) {

          posicionX = 20;
          posicionY = 280;

        }
      }
    }
  }
}

function pintarFondo() {


  fill(128,125,125);
  rect(0, 250, 100);

  fill(128,125,125);
  rect(80, 0, 424, 600);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      fill(255);

      rect(185 + (100 * i), 30 + (85 * j), 10, 40);

      fill(128,125,125);
      rect(480, 250, 100);
    }

  }
  rect(195 - 100, 5, 5, 590);
  rect(185 + (100 * 3), 5, 5, 590);
}

function keyPressed() {

  switch (key) {
    case "w":
    case "W":
      arriba = true;
      break;
    case "s":
    case "S":
      abajo = true;
      break;

    case "a":
    case "A":
      izquierda = true;
      break;
    case "d":
    case "D":
      derecha = true;
      break;

  }

}

function keyReleased() {

  switch (key) {
    case "w":
    case "W":
      arriba = false;
      break;
    case "s":
    case "S":
      abajo = false;
      break;

    case "a":
    case "A":
      izquierda = false;
      break;
    case "d":
    case "D":
      derecha = false;
      break;

  }

}