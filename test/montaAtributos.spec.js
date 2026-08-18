const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { montaAtributos } = require('../app/montaAtributos');

describe('montagem de atributos sem opções', () => {
  it('deve retornar objetos básicos', () => {
    assert.deepStrictEqual(montaAtributos('marcelo', {}), {nome: 'marcelo', votos: 1});
  });
});

describe('montagem de atributos com opção para mostrar vencedor', () => {
  it('deve retornar objetos com atributos vencedor com valor padrão false', () => {
    assert.deepStrictEqual(montaAtributos('marcelo', {mostrarVencedor: true}), {nome: 'marcelo', votos: 1, vencedor: false});
  });
});
