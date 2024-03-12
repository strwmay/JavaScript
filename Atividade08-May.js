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
