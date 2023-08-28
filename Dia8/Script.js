  let Conta_que_quer_Fazer = Number(prompt("Digite A conta  Que Deseja fazer  1 sendo Soma ,2 sendo Subtração ,3 sendo a Divisão  4 sendo Multiplicação e 5 sendo exponenciação"))
  let DigiteNumberone = Number(prompt("Digite o primeiro numero "))
  let DigiteNumberTwo = Number(prompt("Digite o number two"))

  function Soma (DigiteNumberone,DigiteNumberTwo){
    let resultadoSoma = DigiteNumberone + DigiteNumberTwo
    return resultadoSoma;
}

function Subtracao(DigiteNumberone,DigiteNumberTwo){
    let resultadoSatracao = DigiteNumberone - DigiteNumberTwo;
    return resultadoSatracao
}
function Divisao(DigiteNumberone,DigiteNumberTwo){
    let resultadoDivisao = DigiteNumberone/DigiteNumberTwo;
    return resultadoDivisao
}
function multplicacao(DigiteNumberone,DigiteNumberTwo){
    let resultadoMultplicacao = DigiteNumberone * DigiteNumberTwo;
    return resultadoMultplicacao;
}
function exponenciacao(DigiteNumberone,DigiteNumberTwo){
    let resultadoExponenciacao = DigiteNumberone ** DigiteNumberTwo
    return resultadoExponenciacao
}
let resultado
  switch (Conta_que_quer_Fazer) {
    case 1:
     resultado  = Soma(DigiteNumberone,DigiteNumberTwo);
     console.log(resultado)
        break;
    case 2 :
         resultado = Subtracao (DigiteNumberone,DigiteNumberTwo)
         console.log(resultado);
         break;

    case 3:
         resultado = Divisao(DigiteNumberone,DigiteNumberTwo);
         console.log(resultado);
         break;
    case 4 : 
         resultado = multplicacao(DigiteNumberone,DigiteNumberTwo);
        console.log(resultado);
    break;
    case 5 :
        resultado =  exponenciacao (DigiteNumberone,DigiteNumberTwo);
        console.log(resultado);
         break;
    default:
        console.log(" essa operação não existe tente outra")
        break;
        if(resultado == undefined){
            console.log("ERRO")
        }
  }