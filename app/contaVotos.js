function contaVotos(lista = [], opcoes = {}) {
  let r = { resultado: [] };
  lista.forEach(function(nome){
    // colocar no array de resultado
    if (!r.resultado.some(a => a.nome === nome))
      r.resultado.push({nome: nome, votos: 1});
    else
      r.resultado.find(a => a.nome === nome).votos++;
  });

  return r;
}

module.exports = { contaVotos };
