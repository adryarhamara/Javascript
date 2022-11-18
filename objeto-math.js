// Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
let num1 = 9.5678;
//let num2 = Math.floor(num1); //arredonda para baixo
//let num3 = Math.ceil(num1); //arredonda para baixo
//console.log(num3);
console.log(Math.max(1,5,6,20000,50000,7)); //maior numero da sequencia
console.log(Math.min(0,40,1,5789));// menor numero da sequencia
console.log(Math.random()); // gera numeros aleatorio

const aleatorio = Math.random();
console.log(aleatorio);

const aleatorio2 = Math.round(Math.random() * (10 - 5) +5);  //estou pedindo um numero aleatorio que esteja entre 10 e 5 e com a função random seja arredondado
console.log(aleatorio2);