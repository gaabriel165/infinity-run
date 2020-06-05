var colidiu = false;

function verificaColisao(){

	if(random == 1){
		if(xPersonagem + xTamanhoPersonagem >= xInimigo[0] && xPersonagem + 80 <= xInimigo[0] + 70 && yPersonagem + yTamanhoPersonagem >= yInimigo[0] && yPersonagem <= yInimigo[0] + 75){

			if(colidiu == false){
				morreu.play();
			}
			colidiu = true;
		}
	}
	
	if(random == 2){

		if(xPersonagem + xTamanhoPersonagem >= xInimigo[0] + 90 && xPersonagem + 80 <= xInimigo[0] + 70 && yPersonagem + yTamanhoPersonagem - 30 >= yInimigo[1] && yPersonagem <= yInimigo[1] + 75){

			if(colidiu == false){
				morreu.play();
			}
			colidiu = true;
		}
	}

	if(random == 3){

		if(xPersonagem + xTamanhoPersonagem >= xInimigo[0] + 70 && xPersonagem + 80 <= xInimigo[0] + 70 && yPersonagem + yTamanhoPersonagem >= yInimigo[1] && yPersonagem <= yInimigo[1] + 75){

			if(colidiu == false){
				morreu.play();
			}
			colidiu = true;
		}
	}
	
}