//let titulo = document.querySelector('h1')
/////titulo.innerHTML = 'Jogo do numero Secreto';

//let paragrafo =document.querySelector('p')
///paragrafo.innerHTML ='Escolha um numero entre 1 e 10';

let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela (tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}
function exibirMensagemInicial() {
 exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
  
} 
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
  if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
    let mensagemTentativas = `Voçe descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    if(chute > numeroSecreto){
      exibirTextoNaTela('p','O número Secreto é menor!');
      
    } else {
      exibirTextoNaTela('p','O número Secreto é maior!');
    }
  } tentativas++;

}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
  }

  if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}
 function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  exibirMensagemInicial();
  tentativas = 1;
  document.getElementById('reiniciaar').setAttribute('disable',true);

 }


