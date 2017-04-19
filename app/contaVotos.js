const { montaAtributos } = require('../app/montaAtributos');

const inicializaVotacao = function() {
  return { resultado: [] };
}

function contaVotos(lista = [], opcoes = {}) {
  let r = inicializaVotacao();
  lista.forEach(function(nome){
    // colocar no array de resultado
    if (!r.resultado.some(a => a.nome === nome))
      r.resultado.push(montaAtributos(nome, opcoes));
    else
      r.resultado.find(a => a.nome === nome).votos++;
  });

  return r;
}

module.exports = { contaVotos };
