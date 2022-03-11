//Variáveis Bola
let xBola = 300;
let yBola = 200;
let diametro = 22;
let raio = diametro /2;

//Variáveis Velocidade
let velocidadeXBola = 9;
let velocidadeYBola = 9;

//Variáveis Raquete
let xRaquete = 5;
let yRaquete = 150;
let Compraquete = 10;
let Altraquete = 90;
//Variáveis Oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;
let CompraqueteOp = 10;
let AltraqueteOp = 90;
let velYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//Placar
let mypoints= 0;
let oppoints= 0;

//Sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("sino.mp3");
  raquetada = loadSound ("raquetada.mp3");
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBola();
  movBola();
  verifycolide();
  showraqt(xRaquete, yRaquete);
  movraquet();
  verifycolideraqt(xRaquete, yRaquete);
  verifycolideraqt(xRaqueteOp, yRaqueteOp);
  showraqt(xRaqueteOp, yRaqueteOp);
  movimentoponente();
  incluirplacar();
  marcador();
  calculaChanceDeErrar();
  
  

  
}

function mostraBola(){
  circle(xBola,yBola,diametro); 
}

function movBola (){
 xBola += velocidadeXBola;
 yBola += velocidadeYBola;
}
function verifycolide(){
    if (xBola + raio > width || 
      xBola - raio < 0) {
  velocidadeXBola *= -1;
    }

  if (yBola + raio > height || yBola - raio< 0){
    velocidadeYBola *= -1;    
  }
}

  function showraqt(x,y) {
    rect(x, y,Compraquete, Altraquete);
}
  function movraquet(){
    
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
     }

function verifycolideraqt(x,y) {
    colidiu = collideRectCircle(x, y, Compraquete, Altraquete, xBola, yBola, raio);
    if (colidiu){
        velocidadeXBola *= -1;
      raquetada.play();
    }
}
function movimentoponente(){
  velYOponente = yBola - yRaqueteOp - Compraquete / 2 - 30;
  yRaqueteOp += velYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function incluirplacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
    fill(color (255,140,0));
  rect(130,10,40,20);
    fill(255);
  text(mypoints, 150 ,26);
  fill(color (255,140,0));
  rect(430,10,40,20);
   fill(255);
  text(oppoints, 450,26);
}

function marcador(){
  if(xBola > 590){
    mypoints +=1;
    ponto.play();
  }
  if(xBola < 10){
    oppoints +=1;
    ponto.play();
  }
}
function calculaChanceDeErrar(){
  if (oppoints >= mypoints) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
  
}