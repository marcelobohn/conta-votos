const { montaAtributos } = require('./montaAtributos');

const inicializaVotacao = function() {
  return { resultado: [] };
}

class ContaVotos {
  constructor(opcoes = {}) {
    this.candidatos = [];
    this.opcoes = opcoes;
  }
  
  resultado() {
    return { resultado: this.candidatos } ;
  }
  
  registraVotos(lista = []) {
    lista.forEach((nome) => {
      // verifica se o candidato não possui voto
      if (!this.candidatos.some(a => a.nome === nome)) {
        // inclui o candidato com um voto
        this.candidatos.push(montaAtributos(nome, this.opcoes));
      } else {
        // incrementa o número de votos
        this.candidatos.find(a => a.nome === nome).votos++;
      }
    });
    if (this.opcoes.mostrarVencedor) {
      let candidatoVencedor = {votos: 0};
      this.candidatos.forEach(candidato => {
        if (candidatoVencedor.votos < candidato.votos) {
          candidatoVencedor = candidato;
        }
      });
      this.candidatos.find(a => a.nome === candidatoVencedor.nome).vencedor = true;
    }    
  }
}

module.exports = { ContaVotos };
