velocidadesNuvens = [-0.4, -0.7];

velocidadeChao = -3;

velocidadeMontanhas = [-0.1, -0.07];

xNuvem = [20, 520, 600];

xChao = [-121, -34, 53, 140, 227, 314, 401, 488, 575, 662, 749];

xMontanha = [-50, 200];

xArvore = [-120];

xTree = [1500];

velocidadeArvore = -3;

function mostraNuvens(){

	context.drawImage(nuvem1, xNuvem[0], -40, 320, 230);
	context.drawImage(nuvem2, xNuvem[1], -50, 250, 200);
	context.drawImage(nuvem3, xNuvem[2], -30, 380, 380);

}

function moveNuvens(){


	xNuvem[0] += velocidadesNuvens[0];
	xNuvem[1] += velocidadesNuvens[0];
	xNuvem[2] += velocidadesNuvens[1];

}

function verificaXNuvem1(){

	if(xNuvem[0] <= -250){

		xNuvem[0] = 800;
	}else if(xNuvem[1] <= -250){

		xNuvem[1] = 800;
	}else if(xNuvem[2] <= -250){

		xNuvem[2] = 800;
	}
}

function mostraChao(){

	context.drawImage(chao, xChao[0], 293);
	context.drawImage(chao, xChao[1], 293);
	context.drawImage(chao, xChao[2], 293);
	context.drawImage(chao, xChao[3], 293);
	context.drawImage(chao, xChao[4], 293);
	context.drawImage(chao, xChao[5], 293);
	context.drawImage(chao, xChao[6], 293);
	context.drawImage(chao, xChao[7], 293);
	context.drawImage(chao, xChao[8], 293);
	context.drawImage(chao, xChao[9], 293);
	context.drawImage(chao, xChao[10], 293);

}

function moveChao(){

	for(var i = 0; i < xChao.length; i++){

		xChao[i] += velocidadeChao;
	}
}

function verificaXChao(){

	for(var i = 0; i < xChao.length; i++){
		if(xChao[i] <= -208){

			xChao[i] = 749;
		}
	}
}

function mostraMontanhas(){


	context.drawImage(montanha1, xMontanha[0], 60, 700, 600);
	context.drawImage(montanha2, xMontanha[1], -100, 800, 800);
}

function moveMontanhas(){

	xMontanha[0] += velocidadeMontanhas[0];
	xMontanha[1] += velocidadeMontanhas[1];
	
}

function verificaXMontanhas(){


	if(xMontanha[0] <= -550){

		xMontanha[0] = 700;
	}else if(xMontanha[1] <= -700){

		xMontanha[1] = 750;
	}
}

function mostraArvore(){


	arvore1.src = "imagens/cenario/arvore.png";
	context.drawImage(arvore1, xArvore[0], 139,);
}

function moveArvore(){

	xArvore[0] += -2;
}

function mostraArvore2(){


	arvore2.src = "imagens/cenario/tree.png";
	context.drawImage(arvore2, xTree[0], 95, 400, 390);
}

function moveArvore2(){


	xTree[0] += velocidadeArvore;
}

function verificaXArvore2(){


	if(xTree[0] <= -400){

		xTree[0] = 3000;
	}
}