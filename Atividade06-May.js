// imprima elementos da diagonal principal

console.log("-----------------------------------");

var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
  ];
  console.table(matriz);

  for(let n = 0; n < matriz.length; n++) {
    console.log(matriz[n][n]);
  } 
  // a matriz principal usa numeros de colunas e linhas repitidas
  // [n][n]=[1][1] que é o conjunto do meio da diagonal
  
  console.log("-----------------------------------");