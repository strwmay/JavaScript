// condição simples única
var ano = 2008;

if (ano > 2000) console.log(`A pessoa nasceu depois de 2000!`);

if (ano < 2000) console.log(`A pessoa nasceu antes de 2000!`);

if (ano == 2000) console.log(`A pessoa nasceu em 2000!`);

console.log("");

// condição simples de if-else
var maioridade = 15;

if (ano > 18) console.log(`A pessoa é maior de idade!`);
else console.log(`A não é maior de idade!`);

// condicional composto com if
const login = "admin"; // digitado pelo usuario < v
var senha = "123456"; // string

//----------------------------------------//
const loginUser = "admin"; // banco de dados
var senhaUser = "admin"; // banco de dados
//----------------------------------------//

if (login == loginUser && senha == senhaUser) console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

console.log("");

// função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`pare`);
  else if (cor == "amarelo") console.log(`atenção`);
  else if (cor == "verde") console.log(`siga`);
  else console.log(`a cor não corresponde ao que foi programado`);
}

sinaleiro("azul");

console.log("");

// desvio condicional if com bloco de comandos

var idade = 18;

if (idade <= 18) {
  console.log("entrei no if...");
  idade++, console.log("incrementei a idade...");
  console.log(`a nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de códigos if`);
}

console.log("terminei!");

console.log("");

// desvio condicional if inline (terminario)
// validação (algo==algo) ou (algo > alguma coisa)
// ? = if
// se for verdadeiro
// : = else
// se for falso
// teste de validação == teste ? "bla bla" : ("ble ble")

var preco = 100;
var resultado = preco <= 100 ? "barato" : "caro";

console.log(resultado);