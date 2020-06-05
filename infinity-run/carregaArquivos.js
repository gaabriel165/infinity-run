
var cenarioFundo = new Image();

var nuvem1 = new Image();
var nuvem2 = new Image();
var nuvem3 = new Image();

var chao = new Image();

var runningSprite = new Image();
var jumpingSprite = new Image();
var paradoSprite = new Image();
var mortoSprite = new Image();

var montanha1 = new Image();
var montanha2 = new Image();

var buttonPlay = new Image();

var arvore1 = new Image();

var caixa = new Image();
var pedra = new Image();
var madeira = new Image();

var arvore2 = new Image();

var trilhaSonora = new Audio();
var jump = new Audio();
var morreu = new Audio();

jump.src = "sons/jump.wav";
trilhaSonora.src = "sons/trilha.mp3";
morreu.src = "sons/morreu.wav";

cenarioFundo.src = "imagens/fundo.jpg";

nuvem1.src = "imagens/cenario/nuvem1.png";
nuvem2.src = "imagens/cenario/nuvem2.png";
nuvem3.src = "imagens/cenario/nuvem3.png";

chao.src = "imagens/cenario/chao.png";
montanha1.src = "imagens/cenario/montanha1.png";
montanha2.src = "imagens/cenario/montanha2.png";

caixa.src = "imagens/cenario/caixa.png";
pedra.src = "imagens/cenario/pedra.png";
madeira.src = "imagens/cenario/madeira.png";

function mostraCenario(){

	context.drawImage(cenarioFundo, 0, 0, 850, 500);
}