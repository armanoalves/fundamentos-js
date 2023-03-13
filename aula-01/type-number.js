// Tipo Numbert

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

// Ponto Futuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number (não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);
// Resutado mostrado no terminal é "NaN" pois trata-se de uma operação matemática entre letras e números, logo o resultado não será um número.

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN