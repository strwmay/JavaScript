var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 1- criar matriz 3x3

console.table(matriz);
console.log(
  "Os valores da diagonal 1 são",
  matriz[0][0],
  matriz[1][1],
  matriz[2][2]
); // 2- imprimir valores das diagonais
console.log(
  "Os valores da diagonal 2 são",
  matriz[2][2],
  matriz[1][1],
  matriz[0][0]
);
console.log(
  "Os valores da diagonal 3 são",
  matriz[2][0],
  matriz[1][1],
  matriz[0][2]
);
console.log(
  "Os valores da diagonal 4 são",
  matriz[0][2],
  matriz[1][1],
  matriz[2][0]
);

console.log("")

var user = ["Maysa", 15, "Azul Acinzentado", "Lichia", "Jáu-SP", "Pitika"];

console.table(user);
console.log("---------------------------------------------------------------------");

console.log(`Olá ${user[0]}! Seja bem-vinda ao nosso Sistema.`);
console.log(`Você mora na cidade de ${user[4]}, e tem uma cachorrinha chamada ${user[5]}.`);
console.log(`Tem ${user[1]} anos, e sua fruta favorita é ${user[3]}.`);
console.log(`Sua cor favorita é ${user[2]}.`);

console.log("---------------------------------------------------------------------");