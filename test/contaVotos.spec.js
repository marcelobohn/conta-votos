const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaVotos } = require('../app/contaVotos');

lab.experiment('quando não informa parâmetros', () => {
  lab.test('deve resultado vazio', (done) => {
    let cv = contaVotos();
    expect(cv.resultado()).to.equal({resultado: []});
    done();
  });
});

lab.experiment('quando informa lista vazia', () => {
  lab.test('deve resultado vazio', (done) => {
    let cv = contaVotos();
    cv.registraVotos([]);
    expect(cv.resultado()).to.equal({resultado: []});
    done();
  });
});


lab.experiment('quando informa votos', () => {
  lab.test('deve retornar com os cálculos', (done) => {
    let cv = contaVotos();  
    const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
    cv.registraVotos(lista);
    const retorno = { resultado:[{nome: 'João', votos: 2}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 3}] };
    expect(cv.resultado()).to.equal(retorno);
    done();
  });
});

lab.experiment('quando informa opção para exibir atributo de vencedor', () => {
  lab.test('deve retornar com os cálculos e atributo de vencedor', (done) => {
    const opcoes = {mostrarVencedor: true};
    let cv = contaVotos(opcoes);    
    const lista = ['João', 'Carlos', 'João'];
    cv.registraVotos(lista);    
    const retorno = { resultado:[
      {nome: 'João', votos: 2, vencedor: true}, 
      {nome: 'Carlos', votos: 1, vencedor: false} ]};
    expect(cv.resultado()).to.equal(retorno);
    done();
  });
});