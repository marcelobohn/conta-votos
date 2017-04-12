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

// primeira versão da implementação que apenas coloca os nomes no resultado
lab.experiment('testes temporários', () => {
  lab.test('retorna os votos formatados', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[
        {nome: 'João', votos: 1}, {nome: 'Carlos', votos: 1}, {nome: 'João', votos: 1},
        {nome: 'Pedro', votos: 1}, {nome: 'Pedro', votos: 1}, {nome: 'Pedro', votos: 1},
      ] };
      expect(contaVotos(lista)).to.equal(retorno);
      done();
  });

  lab.test.skip('retorna os votos formatados sem duplicidade', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[
        {nome: 'João', votos: 2}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 3},
      ] };
      expect(contaVotos(lista)).to.equal(retorno);
      done();
  });
});

lab.experiment('quando informa votos', () => {
  lab.test.skip('deve retornar com os cálculos', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[{nome: 'João', votos: 2}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 3}] };
      expect(contaVotos(lista)).to.equal(retorno);
      done();
  });
});
