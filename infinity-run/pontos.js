var pontos = 0;

function somaPontos(){

	if(inicia == true){

		pontos += 1;
	}
}

function mostraPontos(){

	if(inicia == true){

		context.fillStyle = "yellow";
		context.font = "30pt Helvetica";
		context.fillText(pontos, 30, 40);
	}
}