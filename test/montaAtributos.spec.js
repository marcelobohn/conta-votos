const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { montaAtributos } = require('../app/montaAtributos');

lab.experiment('montagem de atributos sem opções', () => {
  lab.test('deve retornar objetos básicos', (done) => {
      expect(montaAtributos('marcelo', {})).to.equal({nome: 'marcelo', votos: 1});
      done();
  });
});

lab.experiment('montagem de atributos com opção para mostrar vencedor', () => {
  lab.test('deve retornar objetos com atributos vencedor com valor padrão false', (done) => {
      expect(montaAtributos('marcelo', {mostraVencedor: true})).to.equal({nome: 'marcelo', votos: 1, vencedor: false});
      done();
  });
});
