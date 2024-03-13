// Criando um objeto do tipo data Date()
var data1 = new Date();
console.log(data1);

// Criando um objeto do tipo data especifica Date()
var data2 = new Date("2005=05-12");
console.log(data2);

console.log("");

// Extraindo partes de uma data
var data3 = new Date("2008=06-07");
console.log(`Meu Aniversário: ${data3}`);
console.log(`Ano de Nascimento: ${data3.getFullYear()}`);
console.log(`Mês de Nascimento: ${data3.getMonth() + 1}`);
console.log(`Dia de Nascimento: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

console.log("");

console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

console.log("");

console.log(`Retornando o dia da semana por escrito!`);
console.log(`Dia da Semana: ${semana[data3.getDay()]}`);

console.log("");

var idade = data1.getFullYear() - data3.getFullYear();
var idadeMes = data1.getMonth() - data3.getMonth();

if (idadeMes < 0 || // verifica se o mês aniversário é menor que o atual
    (data1.getDate() < data3.getDate())) { // verifica a data/dia de aniversario é menor que o atual
  idade--;
} // se uma delas for verdadeira tira um ano da idade

console.log(`Eu tenho ${idade} anos !`);