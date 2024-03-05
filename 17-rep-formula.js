// laço de repetição FOR
// escrever para o usuario 1000x "prestar mais atenção nas aulas"
// mostrando numeros pares
for (let i = 0; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando numeros impares
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando numeros impares com IF
for (let i = 0; i < 1000; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("-----------------------------------");

//escrever todos os numeros de 1 a 20
for (let n = 0; n <= 20; n++) {
  console.log(n);
}

//todos os numeros pares entre 1 e 20 com for
for (let n = 2; n <= 20; n += 2) {
  console.log(n);
}

for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) console.log(n);
}

console.log("-----------------------------------");

//dado um vetor com numeros 5, 6, 7, 8, 14, 0, 9, 7, 2.
//calcule e exiba a somatoria de seus elementos utilizando o for

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros);

var somar = 0;
for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}

console.log(`A soma dos elementos é: ${somar}`);

console.log("-----------------------------------");

//dado um vetor com numeros 5, 6, 7, 8, 14, 0, 9, 7, 2.
//multiplique todos os seus elementos por 3 utilizando o loop for
//em seguida mostrev o novo vetor

let num = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < num.length; i++) {
  num[i] *= 3;
}
console.table(num);

console.log("-----------------------------------");
//dada a matriz 2x3, escrever para o usuario todos os seus elementos com as respectivas posições da matriz
//[8, 4, 1]
//[3, 7, 8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(
      `Matriz[ ${linha}, ${linha}, ${coluna} ] = ${matriz[linha][coluna]}`
    );
  }
}

console.log("-----------------------------------");