// Operadores de incremento e decremento
var idade = 16;
console.log(idade);

idade++; //idade++ = idade + 1
console.log(idade);

idade--; //idade-- = idade - 1
console.log(idade);

console.log("---------------------------");

var novaidade = idade++ // não funciona pois está depois da idade
console.log("Idade:", idade, "| Nova idade:", novaidade);

console.log("")

var novaidade = ++idade 
console.log("Idade:", idade, "| Nova idade:", novaidade);

console.log("---------------------------");

novaidade +=10;
console.log(novaidade);

novaidade -=20;
console.log(novaidade);