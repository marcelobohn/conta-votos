const { montaAtributos } = require('./montaAtributos');

class ContaVotos {
  constructor(opcoes = {}) {
    this.candidatos = [];
    this.opcoes = opcoes;
  }
  
  resultado() {
    return { resultado: this.candidatos } ;
  }
  
  registraVotos(lista = []) {
    let filtroNome = (candidato, nome) => candidato.nome === nome;
    
    lista.forEach((nome) => {  
      // verifica se o candidato não possui voto
      if (!this.candidatos.some(a => filtroNome(a, nome))) {
        // inclui o candidato com um voto
        this.candidatos.push(montaAtributos(nome, this.opcoes));
      } else {
        // incrementa o número de votos
        this.candidatos.find(a => filtroNome(a, nome)).votos++;
      }
    });
    
    this.defineVencedor();
  }
  
  defineVencedor() {
    if (this.opcoes.mostrarVencedor) {
      let candidatoVencedor = {votos: 0};
      this.candidatos.forEach(candidato => {
        if (candidatoVencedor.votos < candidato.votos) {
          candidatoVencedor = candidato;
        }
      });
      this.candidatos.map(c => c.vencedor = c.nome === candidatoVencedor.nome);    
    }
  }
}

module.exports = { ContaVotos };
