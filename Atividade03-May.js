var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"]; // 1- criar array com frutas

frutas.push("Tangerina"); // 2- adicionar tangerina no final
frutas.unshift("Goiaba"); // 3- adicionar goiaba no inicio

console.table(frutas);

console.log("A fruta contida no índice 5 é", frutas[5]); // 4- mostrar fruta no indice 5

frutas.splice(4, 1); // 5- remover uva
// v outra forma de retirar v 

//var position = frutas.indexOf("Uva")
//console.table(position, 1);

console.table(frutas);

var frutasCopia = frutas.slice(2, 5) // 6- criar cópia somente com frutas do indice 2, 3 e 4

console.table(frutasCopia); 