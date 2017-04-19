const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaVotos } = require('../app/conta-votos');

lab.experiment('quando não informa parâmetros', () => {
  lab.test('deve resultado vazio', (done) => {
      expect(contaVotos()).to.equal({resultado: []});
      expect(contaVotos([])).to.equal({resultado: []});
      done();
  });
});

lab.experiment('quando informa votos', () => {
  lab.test('deve retornar com os cálculos', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[{nome: 'João', votos: 2}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 3}] };
      expect(contaVotos(lista)).to.equal(retorno);
      done();
  });
});
