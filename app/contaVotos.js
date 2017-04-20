const { montaAtributos } = require('./montaAtributos');

const inicializaVotacao = function() {
  return { resultado: [] };
}

function contaVotos(lista = [], opcoes = {}) {
  let r = inicializaVotacao();
  
  // faz interação entre a lista de votos
  lista.forEach(function(nome){
    // verifica se o candidato não possui voto
    if (!r.resultado.some(a => a.nome === nome)) {
      // inclui o candidato com um voto
      r.resultado.push(montaAtributos(nome, opcoes));
    } else {
      // incrementa o número de votos
      r.resultado.find(a => a.nome === nome).votos++;
    }
  });
  
  if (opcoes.mostrarVencedor) {
    let candidatoVencedor = {votos: 0};
    r.resultado.forEach(candidato => {
      if (candidatoVencedor.votos < candidato.votos) {
        candidatoVencedor = candidato;
      }
    });
    r.resultado.find(a => a.nome === candidatoVencedor.nome).vencedor = true;
  }
  
  return r;
}

module.exports = { contaVotos };
