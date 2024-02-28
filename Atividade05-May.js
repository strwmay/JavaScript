// função retorno de idade:
function idade(ano) {
  return 2024 - ano;
}
var ano = 2008;
console.log(`Vou fazer ${idade(2008)} anos esse ano.`);

console.log(""); //-------------------------------------------------\\

// função que receba quantidade de combustivel de um carro e retorne quantos kms ele pode viajar | obs: o veículo faz em média 12 kms/l
function km(combustivel) {
  const desempenho = 12;
  return desempenho * combustivel;
}

console.log(`Com 55 litros um carro pode percorrer ${km(55)}Km.`);

console.log(""); //-------------------------------------------------\\

// função retorno de idade autorizada a votar:
function votar(idade1) {
  if (idade1 < 16)
    console.log(`Você tem ${idade1} anos, ou seja, não pode votar!`);
  else if ((idade1 >= 16 && idade1 < 18) || idade1 > 85)
    console.log(`Você tem ${idade1} anos, ou seja, pode votar se quiser!`);
  else console.log(`Você tem ${idade1} anos, ou seja, pode votar!`);
}
votar(15);

console.log(""); //-------------------------------------------------\\

function votarsc(idade2) {
  switch (true) {
    case idade2 < 16:
      console.log(`Você tem ${idade2} anos, ou seja, não pode votar!`);
      break;
    case (idade2 >= 16 && idade2 <= 18) || idade2 > 85:
      console.log(`Você tem ${idade2} anos, ou seja, pode votar se quiser!`);
      break;
    default:
      console.log(`Você tem ${idade1} anos, ou seja, pode votar!`);
      break;
  }
}
votar(90);