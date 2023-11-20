// let das imagens e sons
let imagemDoCeu;
let imagemDoPou;
let imagemNuvem;
let imagemNuvem2;
let imagemNuvem3;
let imagemNuvem4;
let imagemNuvem5;

let somDaTrilha;
let somDeColisao;
let somDoPonto;

// imagens do jogo

function preload(){
imagemDoCeu = loadImage("imagens/ceu.jpg");
imagemDoPou = loadImage("imagens/pou.png");
imagemNuvem = loadImage("imagens/nuvem.png");
imagemNuvem2 = loadImage("imagens/nuvem2.png");
imagemNuvem3 = loadImage("imagens/nuvem3.png");
imagemNuvem4 = loadImage("imagens/nuvem4.png");
imagemNuvem5 = loadImage("imagens/nuvem5.png");
imagemNuvem6 = loadImage("imagens/nuvem6.png");
  
imagemNuvems = [imagemNuvem, imagemNuvem2, imagemNuvem3, imagemNuvem4, imagemNuvem5 , imagemNuvem6];
 
//sons o jogo
  
somDaTrilha = loadSound("sons/som1.mp3");
somDeColisao = loadSound("sons/som2.mp3");
somDoPonto = loadSound("sons/som3.mp3");

}



