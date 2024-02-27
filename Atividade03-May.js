var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

frutas.push("Tangerina");
frutas.unshift("Goiaba");

console.table(frutas);

console.log("A fruta contida no índice 5 é", frutas[5]);

frutas.splice(4, 1);
console.table(frutas);

var frutasCopia = frutas.slice(2, 5)

console.table(frutasCopia);