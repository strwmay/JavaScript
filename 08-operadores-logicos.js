// Operadores Lógicos
var manha = true;
var sono = true;

console.log("------------------------------------")
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);
console.log("------------------------------------")

var sono = false;
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

console.log("------------------------------------")

var manha = false;
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);
console.log("------------------------------------")
