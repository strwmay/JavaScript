// Definindo uma classe pessoa
console.log("------------------------------------------------------------");

class Pessoa {
  constructor(pNome, pIdade) {
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
  envelhecer() {
    this.idade++;
  }
}

// Criando objeto do "tipo" pessoa
var p1 = new Pessoa("Maysa", 15);

p1.apresentarSe();

p1.envelhecer();
p1.apresentarSe();

console.log("------------------------------------------------------------");

// ABSTRAÇÃO - toma oq é importante e descarta o que é irrelevante.

class Pet {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  alimentar() {
    console.log(`Você alimentou ${this.nome}!`);
  }
}

const meuPet = new Pet("Pitika", 5, "cachorrinha");
console.log(
  `Minha pet é uma ${meuPet.tipo} chamada ${meuPet.nome}, ela tem ${meuPet.idade} anos!`
);

meuPet.alimentar();

console.log("------------------------------------------------------------");

// HERANÇA - caracteristicas herdadas de outra classe.

class Animal {
  constructor(nome, idade, tipoAlimentcao) {
    this.nome = nome;
    this.idade = idade;
    this.tipoAlimentcao = tipoAlimentcao;
  }

  alimentar() {
    console.log(`O animal ${this.nome} foi alimentado`);
  }

  emitirSom() {
    console.log(`Barulho padrão de animal!`);
  }
}

class Cachorrinha extends Animal {
  alimentar() {
    console.log(`A cachorrinha ${this.nome} foi alimentada!`);
  }

  emitirSom() {
    console.log(`Au au!`);
  }
}

const minhaPet = new Cachorrinha("Pitika", 6, "Ração");

minhaPet.alimentar();
minhaPet.emitirSom();

console.log("------------------------------------------------------------");

// ENCAPSULAMENTO - protege as propriedades da classe, para que não possam ser acessadas ou modificadas.

class Petzinho {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  getNome() {
    return this.nome;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }
}

const novoPetzinho = new Petzinho("Frapê", 0, "gatinho");

console.log(novoPetzinho.getNome()); //Frapê
novoPetzinho.setNome("Frappé");
console.log(novoPetzinho.getNome()); //Frappé

console.log("------------------------------------------------------------");

// POLIMORFISMO - um objeto pode ser tratado de maneiras diferentes, dependendo do contexto

class Animalzinho {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log("E o animal faz um barulho genérico.");
  }
}

class Doguinha extends Animalzinho {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("A cachorrinha late!");
  }
}

class Gatinho extends Animalzinho {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O gatinho mia!");
  }
}

// Exemplo de uso
const animais = [
  new Doguinha("Pitika"),
  new Gatinho("Frappé"),
  new Animalzinho("Bob"), // Animal genérico
];

for (const animal of animais) {
  animal.fazerBarulho();
}

console.log("------------------------------------------------------------");
