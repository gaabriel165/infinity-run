
var numSprites = 6;
var spriteAtual = 1;
var velocidade = 0;

var xPersonagem = 100;																						
var yPersonagem = 285;

var xTamanhoPersonagem = 110;
var yTamanhoPersonagem = 130;

var podePular = false;																								
var podeCair = false;
																
var velocidadePulo = 3;
var velocidadeQueda = 2;

function mostraPersonagem(){

		trocaAnimacao();
}

function rodaSprites(){

	resetaSprite();

	if(velocidade == 0){

		spriteAtual += 1;
	}

	if(velocidade == 12){

		spriteAtual += 1;
	}

	if(velocidade == 24){

		spriteAtual += 1;
	}

	if(velocidade == 36){

		spriteAtual += 1;
	}

	if(velocidade == 48){

		spriteAtual += 1;
	}

	if(velocidade == 60){

		spriteAtual += 1;
	}

	velocidade += 1;
	
}

function resetaSprite(){

	if(spriteAtual == numSprites){

			spriteAtual = 1;
			velocidade = 0;
		}
}

function verificaYAnimacao(){

		if(inicia == true){

			rodaSprites();
		}
}

function trocaAnimacao(){

	if(yPersonagem == 285 && inicia == true && colidiu == false){

		runningSprite.src = "imagens/running/" 	+ spriteAtual + ".png";
		context.drawImage(runningSprite, xPersonagem, yPersonagem, xTamanhoPersonagem, yTamanhoPersonagem);

	}else if(podePular == true && colidiu == false){

		jumpingSprite.src = "imagens/jump/pulando.png";
		context.drawImage(jumpingSprite, xPersonagem, yPersonagem, xTamanhoPersonagem, yTamanhoPersonagem);
	}else if(podeCair == true && colidiu == false){

		jumpingSprite.src = "imagens/jump/caindo.png";
		context.drawImage(jumpingSprite, xPersonagem, yPersonagem, xTamanhoPersonagem, yTamanhoPersonagem);
	}

	if(inicia == false && colidiu == false){

		paradoSprite.src = "imagens/parado/parado.png";
		context.drawImage(paradoSprite, xPersonagem, yPersonagem, xTamanhoPersonagem, yTamanhoPersonagem);
	}

	if(colidiu == true){

		mortoSprite.src = "imagens/morto/morto.png";
		context.drawImage(mortoSprite, xPersonagem, yPersonagem, xTamanhoPersonagem, yTamanhoPersonagem);
	}
}

function pulaPersonagem(){

	if(inicia == true){
		if(podePular == true){

		yPersonagem -= velocidadePulo;
		}
	}
}

function caiPersonagem(){

	if(podeCair == true){

		yPersonagem += velocidadeQueda;
	}
}

function verificaY(){

	if(yPersonagem <= 110){
		podePular = false;
		podeCair = true;
	}

	if(yPersonagem == 285){
		podePular = false;
		podeCair = false;
	}

	if(yPersonagem >= 285){

		yPersonagem = 285;
		podePular = false;
		podeCair = false;
	}
}

function verificaTeclaOn(evento){

	if(inicia == true){

		if(yPersonagem == 285){

			if(evento.keyCode == 38){

				podePular = true;
				jump.play();
			}
		}
	}
		
}