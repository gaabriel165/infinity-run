inicia = false;

function mostraBotao(){

	buttonPlay.src = "imagens/button/button.png";
	context.drawImage(buttonPlay, 325, 200, 200, 100);
}

function iniciaJogo(evento){

	if(evento.pageX >= 588 && evento.pageX <= 787 && evento.pageY >= 275 && evento.pageY <= 373){
		if(colidiu == true){
			voltaTudo();
		}
		inicia = true;
	}
}

function mudaCursor(evento){

	if(inicia == false){

		if(evento.pageX >= 588 && evento.pageX <= 787 && evento.pageY >= 275 && evento.pageY <= 373){
			tela.style.cursor = "pointer";
		}else{
			tela.style.cursor = "default";
		}
	}else {
		tela.style.cursor = "default";
	}
}