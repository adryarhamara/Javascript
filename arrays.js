//Exercicios com arrays
const nome = ['Luiz', 'Maria Flor','Adrya'];
const boleano = [true , false];
console.log(nome[1]);
console.log(boleano[1]);

//formas de editar uma array
nome[0] = 'Ana';
console.log(nome[0]);
//adicionado mais um dado ao array
nome[3] = 'Allicia';
nome[4] = 'Sabino';
console.log(nome);
console.log(nome.length); //descobrindo o tamanho do array
//colocar um dado ao final da fiunção
nome.push('false');
nome.push('Agatha');
console.log(nome);
// adicionando o dado no começo da array
nome.unshift('Janaina');
nome.unshift('Aurora');
console.log(nome);
// removendo dados da array
nome.pop();
console.log(nome);
// pegando apenas o dado de um ou varios indices especificos
console.log(nome.slice(0, 4));
console.log(nome instanceof Array);