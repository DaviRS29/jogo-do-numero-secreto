let listaNumeroGerado = [];
let numeroLimitie = 20;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;
mensagemInicial();

function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazolian Portuguese Female',{rate: 1.2});
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    let  palavraTentativas = tentativa> 1 ? 'tentativas' : 'tentativa'
    if(numeroSecreto == chute){
        exibirNaTela('h1','Acertou!');
        exibirNaTela('p','Parabens voce acertou com ' + tentativa + ' ' + palavraTentativas+ ' !');

        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        exibirNaTela('h1','Você errou tente novamente');
        if (chute > numeroSecreto){
            exibirNaTela('p','O numero é menor, já foram '+tentativa + ' ' + palavraTentativas);
        }else {
            exibirNaTela('p','O numero é maior, já foram '+tentativa + ' ' + palavraTentativas);
        }

    }
    tentativa++;
    limparCampo();
}

function numeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimitie + 1);
  let quantidadeLista = listaNumeroGerado.length;
  if (quantidadeLista == numeroLimitie )[
    listaNumeroGerado = []
  ]
  if (listaNumeroGerado.includes(numeroEscolhido)){
    return numeroAleatorio();
  } else {
    listaNumeroGerado.push(numeroEscolhido)
    console.log(listaNumeroGerado);
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarjogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

function mensagemInicial(){
    exibirNaTela('h1','Jogo  of secret');
    exibirNaTela('p','Escolha o numero de 1 a 10');
    
}

