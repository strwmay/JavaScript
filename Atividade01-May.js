var nome = "Maysa Silva Rondon";
var banco = "NuBank";
var agencia = 0001;
var conta = 75532706 - 5;
var saldo = 60;

console.log("---------------------------------------------------------------------------------------------------------------------------");
console.log("Olá",nome,"! Como solicitado, o banco",banco,"informa que, o saldo da sua conta, de número",conta,"é de R$",saldo);
console.log("---------------------------------------------------------------------------------------------------------------------------");

console.log("Compra no débito de R$ 5,00 em Cantina Senai foi aprovada. | Terça - 15:44");
saldo -= 5;

console.log("Compra no débito de R$ 3,00 em Cantina Senai foi aprovada. | Quarta - 15:36");
saldo -= 3;

console.log("Você recebeu uma tranferência de R$ 50,00 de Heloisa Tatiane Sant'anna da Silva Rondon. | Sábado - 18:27");
saldo += 50;

console.log("Compra no débito de R$ 12,00 em McDonad's foi aprovada | Hoje - 12:02");
saldo -= 12;

console.log("Compra no débito de R$ 5,00 em Cantina Senai foi aprovada | Hoje - 12:56");
saldo = saldo - 5;

console.log("---------------------------------------------------------------------------------------------------------------------------");
console.log("Olá",nome,"! Como solicitado, o banco",banco,"informa que, o saldo da sua conta, de número",conta,"é de R$",saldo);
console.log("---------------------------------------------------------------------------------------------------------------------------");
