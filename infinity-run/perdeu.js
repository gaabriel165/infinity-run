function perdeu(){

	if(colidiu == true){

		mostraPersonagem();
		inicia = false;
		context.fillStyle = "yellow";
		context.font = "30pt Helvetica";
		context.fillText("Score: " + pontos, 333, 180);
		trilhaSonora.pause();
		trilhaSonora.currentTime = 0;
	}
}

function voltaTudo(){

	pontos = 0;
	xInimigo[0] = xInicial;
	velocidadeInimigo = -3;
	velocidadeArvore = -3;
	xChao = [-121, -34, 53, 140, 227, 314, 401, 488, 575, 662, 749];
	xNuvem = [20, 520, 600];
	xMontanha = [-50, 200];
	xArvore = [-120];
	xTree = [1500];
	inicia = true;
	colidiu = false;
}