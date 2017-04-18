function contaVotos(lista = [], opcoes = {}) {
  let r = { resultado: [] };
  lista.forEach(function(nome){
    // colocar no array de resultado
    r.resultado.push({nome: nome, votos: 1});
  });

  return r;
}

module.exports = { contaVotos };
