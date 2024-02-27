const numeros = [95, 50, 115, 70, 45];
console.log(numeros);

console.log(numeros[2]);

// criando variaveis do tipo array (vetores)

var gatos = ["Mainecoon", "Munchkin", "British Shorthair"];
console.log(gatos);
console.log(gatos[0]);

console.log("");

console.table(gatos);
console.log("O vetor tem", gatos.length, "elementos");

// adicionando elementos ao vetor existente

gatos.push("Tuxedo", "Ragdoll"); // adiciona item no final do vetor
console.table(gatos);

gatos.unshift("Korat"); // adiciona item no inicio do vetor
console.table(gatos);

// alterando com base no indice (posição)

gatos[0] = "Mainecoon"; // substitui o antigo item
console.table(gatos);

// obtendo um elemento com base em seu indice

console.log("Primeira Posição:", gatos[0]); // retorna elemento especifico
console.log("Segunda Posição:", gatos[1]);
console.log("Item da Posição 45:", gatos[45]); // retorna indefinido

// removendo elementos do vetor

gatos.pop(); // remove o ultimo elemneto do vetor
console.table(gatos);

gatos.shift(); // remove primeiro elemento do vetor
console.log(gatos);

gatos.splice(1, 1); //remove o elemento a partir do indice indicado, e o tanto indicado contando a partir dele
console.table(gatos);
console.log("");

console.log("------------------ Continuação da Aula ------------------");
console.log("");

var gatos = ["Mainecoon", "Munchkin", "British", "Ragdoll", "Tuxedo"];

console.table(gatos);
var elementoProcurado = "British";
var posicao = gatos.indexOf(elementoProcurado); // o indexOf retorna um valor no indice da tela
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Ragdoll";
var posicao = gatos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Tuxedo";
var posicao = gatos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);
