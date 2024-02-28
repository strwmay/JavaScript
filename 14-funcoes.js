function saudacao(nome) {
  console.log(`Olá ${nome}, boas vindas!`);
}

saudacao(`Maysa`);

// criando uma função que soma de dois valores, retornando um resultado
function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;

console.log(`v1 + v2 = ${somar(v1, v2)}`);

// criando uma função que calcula e retorna o desconto em uma venda
function desconto(Vvenda, Vdesc) {
  return (Vvenda * Vdesc) / 100;
}

var Tpedido = 300;
var Tdesc = desconto(Tpedido, 5);

console.log(`-------------------------------`);
console.log(`Total do pedido: R$ ${Tpedido}`);
console.log(`Total do desconto: R$ ${Tdesc}`);
console.log(`Valor final da compra: R$ ${Tpedido-Tdesc}`);
console.log(`-------------------------------`);

// criando uma função que apresneta uma pessoa
function userPrensentation(nome, idade, cidade) {
    console.log(`${nome}, tem ${idade} e mora em ${cidade}`)
}

userPrensentation(`Maysa`, 15, `Jáu`)