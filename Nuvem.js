//nuvem.js

//código da Nuvem

let xNuvems = [600,600,600,600,600,600];
let yNuvems = [40,96,150,208,268,350];
let velocidadeNuvems = [30,40,26,12,28,18];
let alturaNuvem = 40;
let comprimentoNuvem = 50;


function mostraNuvems(){
  for (let i = 0; i < imagemNuvems.length; i++){
    image(imagemNuvems[i], xNuvems[i], yNuvems[i], comprimentoNuvem, alturaNuvem);
  }
}

function movimentaNuvem(){
  for (let i = 0; i < imagemNuvems.length; i++){
    xNuvems[i] -= velocidadeNuvems[i];
  }
}

function voltaPosicaoInicialDaNuvem(){
  for (let i = 0; i < imagemNuvems.length; i++){
    if (passouTodaATela(xNuvems[i])){
      xNuvems[i] = 600;
    }
  }
}

function passouTodaATela(xNuvem){
  return xNuvem < - 50;
}

//colisão da Nuvem

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for (let i = 0; i < imagemNuvems.length; i++){
colisao = collideRectCircle(xNuvems[i], yNuvems[i], comprimentoNuvem, alturaNuvem, xPou, yPou, 15)
if (colisao){
voltaPouParaPosicaoInicial();
  }
 }
}


