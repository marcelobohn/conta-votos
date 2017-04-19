const { montaAtributos } = require('../app/montaAtributos');

function contaVotos(lista = [], opcoes = {}) {
  let r = { resultado: [] };
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
