// implementação de condicional

var menuSelecionado = "home"

switch (menuSelecionado) {
    case "home":
        console.log(`Você clicou no link Home !`)
        break;
    case "quem somos":
        console.log(`Você clicou no link Quem Somos !`)
        break;
    case "contato":
        console.log(`Você clicou no link Contato !`)
        break;
    default:
        console.log(`Opção Invalida`)
        break;
}

//----------------------------------------------------------------------\\

var mes = 5

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`Primeiro Trimestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`Segundo Trimestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`Terceiro Trimestre`);
    break;
  case 10:
  case 11:
  case 12:
    console.log(`Quarto Trimestre`);
    break;

  default:
    console.log(`Mes Invalido`)
    break;
}