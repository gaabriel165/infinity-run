
function gameloop(){

	mostraCenario();
	verificaXNuvem1();
	mostraMontanhas();
	mostraPersonagem();
	mostraNuvens();
	mostraArvore();
	mostraArvore2();
	mostraPersonagem();
	mostraNuvens();
	verificaXMontanhas();
	verificaYAnimacao();
	pulaPersonagem();
	mostraNuvens();
	verificaY();
	caiPersonagem();
	mostraInimigo();
	randomizaInimigo();
	verificaColisao();
	mostraChao();
	verificaXChao();
	verificaXArvore2();
	mostraPontos();
	dificultaJogo();
	perdeu();
	

	if(inicia == true){

		moveChao();
		moveNuvens();
		movimentaInimigo();
		moveMontanhas();
		moveArvore();
		moveArvore2();
		trilhaSonora.play();
	}

	if(inicia == false){

		mostraBotao();
	}
	
	console.log("Colisao = " + colidiu);
}