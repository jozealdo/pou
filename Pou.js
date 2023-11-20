//Pou.js

// lets

let xPou = 122;
let yPou = 420;
let meusPontos = 0;
let colisao = false;


// movimentação do pou

function mostraPou(){
image(imagemDoPou, xPou, yPou, 45, 35);
}

function movimentaPou(){
if (keyIsDown(UP_ARROW)){
yPou -= 5;
}
if (keyIsDown(DOWN_ARROW)){
yPou += 5;
    }
if (keyIsDown(RIGHT_ARROW)){
xPou += 5;
}
if (keyIsDown(LEFT_ARROW)){
  if(podeSeMover()){
xPou -= 5;
    }
  }
}


function podeSeMover(){
  return yPou < 415;
}

function pontosMaiorQueZero(){
  return meusPontos >0;
}

// colisão

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemNuvems.length; i++){
    colisao = collideRectCircle(xNuvems[i], yNuvems[i], comprimentoNuvem, alturaNuvem, xPou, yPou, 15)
    if (colisao){
      voltaPouParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}


function voltaPouParaPosicaoInicial(){
yPou = 415;
somDeColisao.play();
}

// marca pontos

function incluiPontos(){
textAlign(CENTER);
textSize(25);
fill(color(255, 240, 60))
text(meusPontos, width / 5, 27);
}

function marcaPonto(){
if (yPou < 15){
meusPontos += 1;
somDoPonto.play();
voltaPouParaPosicaoInicial();
 }
}

























