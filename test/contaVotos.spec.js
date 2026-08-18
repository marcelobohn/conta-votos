const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { contaVotos } = require('../app/contaVotos');

describe('quando não informa parâmetros', () => {
  it('deve resultado vazio', () => {
    const cv = contaVotos();
    assert.deepStrictEqual(cv.resultado(), { resultado: [] });
  });
});

describe('quando informa lista vazia', () => {
  it('deve resultado vazio', () => {
    const cv = contaVotos();
    cv.registraVotos([]);
    assert.deepStrictEqual(cv.resultado(), { resultado: [] });
  });
});

describe('quando informa votos', () => {
  it('deve retornar com os cálculos', () => {
    const cv = contaVotos();
    const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
    cv.registraVotos(lista);
    cv.registraVotos(lista);
    const retorno = { resultado: [{nome: 'João', votos: 4}, {nome: 'Carlos', votos: 2}, {nome: 'Pedro', votos: 6}] };
    assert.deepStrictEqual(cv.resultado(), retorno);
  });
});

describe('quando informa opção para exibir atributo de vencedor', () => {
  it('deve retornar com os cálculos e atributo de vencedor', () => {
    const opcoes = { mostrarVencedor: true };
    const cv = contaVotos(opcoes);
    const lista = ['João', 'Carlos', 'João'];
    cv.registraVotos(lista);
    const retorno = { resultado: [
      {nome: 'João', votos: 2, vencedor: true},
      {nome: 'Carlos', votos: 1, vencedor: false} ]};
    assert.deepStrictEqual(cv.resultado(), retorno);
  });
});

describe('quando existem duas contagens simultâneas', () => {
  it('deve manter os votos de cada contagem isolados', () => {
    const eleicaoA = contaVotos();
    const eleicaoB = contaVotos();

    eleicaoA.registraVotos(['João']);
    eleicaoB.registraVotos(['Carlos']);

    assert.deepStrictEqual(eleicaoA.resultado(), { resultado: [{nome: 'João', votos: 1}] });
    assert.deepStrictEqual(eleicaoB.resultado(), { resultado: [{nome: 'Carlos', votos: 1}] });
  });
});
