let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

// while testa a condição antes de entrar no laço de repetição
// se a condição for inicialmente falsa, o laço não é executado nenhuma vez
var x = 20;

while (x > 10) {
  console.log("entrei no laço while...");
  x = 0;
}

console.log("terminei!");

// contagem regressiva

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

console.log("lançamento");

// estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)}------- Fatura: R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`Estourou o limite do cartão`);
}

console.log(`---------------------------------------------------`);
// estourando o limite do cartão - versão do-while

var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)}------- Fatura: R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`Estourou o limite do cartão`);
} while (fatura <= limite);