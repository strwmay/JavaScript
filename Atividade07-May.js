// supondo que a população de um país A seja de 100.003 habitantes com uma taxa anual de crescimentos de 3%
//e que a população de uma país B seja de 300.004 habitantes, com uma taxa anual de crescimento de 1,5%
// fazer um algoritmo que calcule e escreva o número de anos necessários para que a população do
//país A ultrapasse ou iguale a população do país B, mantendo as taxas de crescimento.

var popA = 100003;
var popB = 300004;

var ano = 0;

while (popA < popB) {
  popA *= 1.03;
  popB *= 1.015;
  ano++;
};

console.log("--------------------------------------------------------");

console.log(
  `em ${ano} anos o país A terá uma população de ${Math.round(popA)} 
  habitantes e o país B terá ${Math.round(popB)} habitantes`
);

console.log("-------------------------------------------------------");

console.log("");

// criar um jogo da velha que mostre as informações dentro da imagem abaixo.
// inserir as informações de forma randomica.
// informar ao final quem ganhou:

console.log("------------------");

console.log(`   ___|___|___`);
console.log(`   ___|___|___`);
console.log(`      |   |   `);

console.log("------------------");

let quadro = Array(9).fill(' '); // inicializa o tabuleiro preenchendo os 9 elementos desse array com o espaço em branco
let jogadorAtual = 'X'; // define que o jogador atual é x

while (!acabar()) { // enquanto o jogo não acabar isso acontece
  let celula;
  do {
    celula = Math.floor(Math.random() * 9); // escolhe uma célula aleatória para os nove elementos
  } while (quadro[celula] !== ' '); // continua escolhendo enquanto a célula estiver ocupada

  quadro[celula] = jogadorAtual; // preenche a célula com o simbolo do jogador atual
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // troca o jogador para que os dois (X e O) joguem
  // se o jogador for X e já tiver jogado ele vai alterar para O e assim em diante
}

console.log(`   ${quadro[0]} | ${quadro[1]} | ${quadro[2]}`);
console.log(`  ___|___|___`);
console.log(`   ${quadro[3]} | ${quadro[4]} | ${quadro[5]}`);
console.log(`  ___|___|___`);
console.log(`   ${quadro[6]} | ${quadro[7]} | ${quadro[8]}`);
console.log(`     |   |   `);                                 // determina o numero para posição de cada celula no quadro 

let vencedor = verificar(); // verifica quem ganhou
console.log(vencedor ? `O ${vencedor} ganhou!` : 'Deu Velha!'); // imprime o resultado

function acabar() {
  // verifica se alguém ganhou ou se não existem mais espaços vazios no quadro
  return verificar() || !quadro.includes(' ');
};

function verificar() {
  // todas as possíveis filas vencedoras
  const filas = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let linha of filas) { // para cada linha
    if (quadro[linha[0]] !== ' ' && quadro[linha[0]] === quadro[linha[1]] && quadro[linha[0]] === quadro[linha[2]]) { // se todas as células são iguais e não vazias
      return quadro[linha[0]]; // retorna o vencedor
    }
  }
  return null; // se ninguém ganhou ainda, retorna null
};

console.log("------------------");