// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino
// A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// A classe Aluno deve ter os seguintes atributos:
// nome: Nome completo do aluno (string)
// rm: Número de Registro do Aluno (string)
// anoNascimento: Ano de nascimento do aluno (número)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

console.log(
  "------------------------------------------------------------------"
);

class Aluno {
  constructor(nome, rm, anoNascimento, curso) {
    this.nome = nome;
    this.rm = rm;
    this.anoNascimento = anoNascimento;
    this.curso = curso;
  }

  calcularIdade() {
    return 2024 - this.anoNascimento;
  }

  apresentarSe() {
    console.log(
      `Meu nome é ${this.nome}, meu RM é ${
        this.rm
      } e vou fazer ${this.calcularIdade()} anos ! 
      Faço o curso de ${this.curso} no SENAI !!`
    );
  }
}

const May = new Aluno(
  "Maysa Silva Rondon",
  4455,
  2008,
  "TI - Desenvolvimento de Sistemas"
);
May.apresentarSe();

console.log(
  "------------------------------------------------------------------"
);
console.log("");
console.log("_______________| SORVETERIA |________________");
// Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melância médio
// Altere o preço do sorvete de morango grande para R$ 10,50

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(novoPreco) {
    this.preco = novoPreco;
  }

  pedido() {
    console.log(
      `- Sorvete de ${this.sabor} | Tamanho ${this.tamanho} : R$ ${this.preco}0`
    );
  }
}

var sorveteChocolate = new Sorvete("Chocolate", 5.5, "P");
sorveteChocolate.pedido();

var sorveteMelancia = new Sorvete("Melância ", 10.5, "M");
sorveteMelancia.pedido();

var sorveteMorango = new Sorvete("Morango  ", 15.5, "G");
sorveteMorango.pedido();

console.log("");

console.log(`PROMOÇÂO ====================================`);

console.log(
  `Sorvete de ${sorveteMorango.sabor} tamanho ${
    sorveteMorango.tamanho
  }, de R$ ${sorveteMorango.getPreco()}0,`
);
sorveteMorango.setPreco(10.5);
console.log(`         por somente R$ ${sorveteMorango.getPreco()}0 !`);

console.log(`================================== IMPERDÍVEL`);

console.log("----------------------------------------------");

// 1. Comparação de strings (sem case sensitive):
// Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais
// Ignorando o tamanho das letras (maiúsculas e minúsculas).

function comparaStrings(string1, string2) {
  // Convertendo ambas as strings para minúsculas para fazer a comparação
  var string1Minuscula = string1.toLowerCase();
  var string2Minuscula = string2.toLowerCase();

  // Comparando as strings
  if (string1Minuscula == string2Minuscula) {
    return "As strings são iguais !!";
  } else {
    return "As strings são diferentes !!";
  }
}

var string1 = "eu gosto de azul";
var string2 = "azul é minha cor favorita";

console.log(comparaStrings(string1, string2));

// 2. Extrair números de uma string:
// Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

console.log("--------------------------------------");

function extractNumbers(string) {
  var matches = string.match(/\d+/g); // expressão regular para encontrar números
  if (matches) {
    return matches.map(Number);
  }
} 

var string = `Meu nome é Maysa eu nasci dia 7 de junho de 2008, tenho 15 anos! 
   Tenho uma cachorrinha que nasceu no dia das crianças, 12 de outubro, 
   e ela vai fazer 6 aninhos esse ano! temos 10 anos de diferença, já que ela é de 2018`;

console.log(extractNumbers(string));

console.log("--------------------------------------");

// 3. Inverter a ordem das palavras em uma frase:
// Desenvolva uma função em JavaScript que recebe uma frase e retorna
// uma nova string com a ordem das palavras invertida.

function inverterFrase(frase) {
  return frase.split(" ").reverse().join(" ");
}

var string = "trás pra frente";
console.log(string);
console.log(inverterFrase(string));

console.log("----------------------------------------------");