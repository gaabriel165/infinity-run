var velocidadeInimigo = -3;
var xInicial = 1100;
var xInimigo = [1100];
var yInimigo = [340, 295];

var random = 1;

function mostraInimigo(){

	if(random == 1){
		context.drawImage(caixa, xInimigo[0], yInimigo[0]);
	}else if(random == 2){

		context.drawImage(pedra, xInimigo[0], yInimigo[0], 150, 120);
	}else if(random == 3){

		context.drawImage(madeira, xInimigo[0], yInimigo[1], 150, 120);
	}
	
}

function movimentaInimigo(){

	xInimigo[0] += velocidadeInimigo;

}

function voltaPosicaoInimigo(){

		xInimigo[0] = xInicial;
}

function randomizaInimigo(){

	if(xInimigo[0] <= -200){

		random = Math.round(Math.random() * (3 - 1) + 1);
		voltaPosicaoInimigo();
	}
}