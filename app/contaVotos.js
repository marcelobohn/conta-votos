const { montaAtributos } = require('./montaAtributos');

const contaVotos = (opcoes = {}) => {
  candidatos = [];
  opcoes;
  
  return {
    resultado: () => {
      return { resultado: candidatos } ;
    },

    registraVotos: (lista = []) => {
      let filtroNome = (candidato, nome) => candidato.nome === nome;

      lista.forEach((nome) => {  
        // verifica se o candidato não possui voto
        if (!candidatos.some(a => filtroNome(a, nome))) {
          // inclui o candidato com um voto
          candidatos.push(montaAtributos(nome, opcoes));
        } else {
          // incrementa o número de votos
          candidatos.find(a => filtroNome(a, nome)).votos++;
        }
      });

      if (opcoes.mostrarVencedor) {
        let candidatoVencedor = {votos: 0};
        candidatos.forEach(candidato => {
          if (candidatoVencedor.votos < candidato.votos) {
            candidatoVencedor = candidato;
          }
        });
        candidatos.map(c => c.vencedor = c.nome === candidatoVencedor.nome);    
      }
    }
  }
}

module.exports = { contaVotos };
