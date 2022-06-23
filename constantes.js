//Não pode mudar o valor de uma constante
// Declarar e iniciar a constante primeiro
// posso mudar const para let
// '' dentro de aspas String(Texto), fora das '' number(numero)
const nomeNamorado = 'Alex';
console.log(nomeNamorado,'é chato pra caramba');

const primeiroNumero = 1;
const segundoNumero = 2;
const resultado = primeiroNumero + segundoNumero;
const resultadoTriplicado = resultado * 3; //forma de melhorar a aplicação sem mexer nos outros valores
let resultadoQuadriplicado = resultado *4;
console.log(resultado);
console.log(resultadoTriplicado);
console.log(resultadoQuadriplicado);

console.log( typeof nomeNamorado );
// Exercicio Calculando IMC

const nome1 = 'Adrya';
const sobrenome = 'Rhamara';
const idade = 20;
const peso = 53;
const alturaEmM = 1.57;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

console.log(nome1, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('Tem',alturaEmM,'e seu IMC é de',imc);
console.log(nome1, sobrenome, 'nasceu em',anoNascimento);
// Diferença de var para let é que com var podemos criar uma variavel,adicionar um valor e redeclarar o valor 
// e com o let isso geraria um erro.
var name = 'andre';
var name = 'ana';
console.log(name)
//concatenação é a mesma coisa de juntar um valor com outro