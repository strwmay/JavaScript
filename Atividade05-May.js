// função retorno de idade:
function idade(ano) {
  return 2024 - ano;
}

var ano = 2008;
console.log(`Vou fazer ${idade(2008)} anos esse ano.`);

// função que receba quantidade de combustivel de um carro e retorne quantos kms ele pode viajar | obs: o veículo faz em média 12 kms/l
function km(combustivel) {
    const desempenho = 12
  return desempenho * combustivel;
}

console.log(`Com 55 litros um carro pode percorrer ${km(55)}Km`);