function setup(){
  createCanvas(300, 450);
  somDaTrilha.loop();
}

function draw(){
background(imagemDoCeu); 

//Pou
mostraPou();
movimentaPou();

//Nuvem
mostraNuvems();
movimentaNuvem();
voltaPosicaoInicialDaNuvem();

// colisão e ponto 
verificaColisao();
incluiPontos();
marcaPonto();
}