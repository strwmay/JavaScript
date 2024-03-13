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
