let tablerito;
let PlayerX;
let PlayerO;
let turn;
let score_div;

function setup() {
  PlayerX = new Player("X");
  PlayerO = new Player("O");
  createCanvas(400, 400);
  score_div = createDiv('').size(20, 25);
  tablerito = new Tablero(3, PlayerX, PlayerO); //este objeto marca cambios
}

function draw() {
  background(56);
  tablerito.display();
}

function mousePressed(){
	if (!tablerito.winState){
    if (tablerito.turn === "X"){
      PlayerX.select(tablerito);
    } else {
      PlayerO.select(tablerito);
    }
    tablerito.TurnoO();
  } else {
  	tablerito.newGame();
  }
}

//esta clase define el tablero 
class Tablero {
	
  constructor(size, PlayerX, PlayerO){
    this.size = size;
    this.cells = [];
    this.casillaSize = (width-1)/this.size;
    this.PlayerX = PlayerX;
    this.PlayerO = PlayerO;
    this.turn = this.PlayerX.t;
    this.winState = false;
    this.resultText = "";
    this.newGame();
  }
  
  display(){
    let casillaSize = this.casillaSize;
    if (this.winState){
      fill(255);
      textSize(24);
      textAlign(CENTER);
    	text(this.resultText, width/2, height/2);
      text("Jugar Otra Vez", width/2, height/2+30);
      
    } else {
      this.cells.forEach(function(element){
        fill(56);
        stroke(255);
        rect(element.r*casillaSize, element.c*casillaSize, casillaSize, casillaSize);
        fill(255);
        textSize(64);
        textAlign(CENTER);
        text(element.t, element.r*casillaSize+casillaSize/2, element.c*casillaSize+casillaSize/1.5);
      });
    }
    
  }
  
  //Marca turnos
  update(r, c, t){
    let turn = this.turn;
    this.cells.forEach(function(element){
			if (element.r === r && element.c === c && element.v === 0){
      	element.t = t;
        if(turn==="X"){
        	element.v = 1;
        } else {
        	element.v = -1;
        }
      }
    });
    let result = this.checkResult()
    if (result){
      this.winState = true;
      this.resultText = "Gana: " + result;
    }
  }
  
  TurnoO(){
  	if (this.turn == PlayerX.t){
    	this.turn = PlayerO.t;
      score_div.html("Turno:" + PlayerO.t);
    } else {
    	this.turn = PlayerX.t;
      score_div.html("Turno:" + PlayerX.t);
    }
  }
  
  //verificar el resultado
  checkResult(){
		let winner;
    let PlayerX = this.PlayerX;
    let PlayerO = this.PlayerO;
    let rowSums = new Array(this.size);
    let colSums = new Array(this.size);
    let diagSums = new Array(this.size);
    let numOpen = 9;
    let size = this.size
    for (let i=0; i<this.size; i++){
      rowSums[i]= 0;
      colSums[i] = 0;
      diagSums[i] = 0;
    }
    this.cells.forEach(function(element) {
      rowSums[element.r] += element.v;
      colSums[element.c] += element.v;
      numOpen -= abs(element.v);
      if(abs(element.r-element.c) === 0){
      	diagSums[0] += element.v;
      }
      if(abs(element.r-element.c) === 2 || (element.r == 1  && element.c == 1)){
      	diagSums[1] += element.v;
      }
    });
    rowSums.forEach(function(element) {
    	if(element === size){
      	winner = PlayerX.t;
        PlayerX.win();
      }
      if (element === -1*size){
      	winner = PlayerO.t;
        PlayerO.win();
      }
    });
    colSums.forEach(function(element) {
    	if(element === size){
      	winner = PlayerX.t;
        PlayerX.win();
      }
      if (element === -1*size){
      	winner = PlayerO.t;
        PlayerO.win();
      }
    });
    diagSums.forEach(function(element) {
    	if(element === size){
      	winner = PlayerX.t;
        PlayerX.win();
      }
      if (element === -1*size){
      	winner = PlayerO.t;
        PlayerO.win();
      }
    });
    if (numOpen === 0 ){
      winner = "Ninguno, Empate";
    }
    return winner;
  }
  
  newGame(){
    this.winState = false;
    this.turn = this.PlayerX.t;
  	score_div.html("Turno:" + this.PlayerX.t);
    this.cells = [];
    for (let i=0; i<this.size; i++){
      for (let j=0; j<this.size; j++){
        this.cells.push({
          "r": i,
          "c": j,
          "t": "",
          "v": 0
      	});
    	}
    }
  }
}


//define el jugador  
class Player {
	
  constructor(p){
    this.t = p;
    this.score = 0;
  }
  
  select(tablerito){
    if(tablerito.turn === this.t){
      let cx = int(Math.floor(mouseX/tablerito.casillaSize));
      let cy = int(Math.floor(mouseY/tablerito.casillaSize));
      tablerito.update(cx, cy, this.t);
    }
  }
  
  win(){
  	this.score ++;
  }
}