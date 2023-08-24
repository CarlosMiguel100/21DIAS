
let EscolhaDeOperação = prompt("Digite um numero de 1 a 4 ")
let NumberCont = Number(prompt("Digite Um Number para a conta"));
let NumberCont2 = Number(prompt("Digite Um Number para a conta"));
switch(EscolhaDeOperação){
    case "1":
        console.log(NumberCont + NumberCont2);
    break;
    case "2":
        console.log(NumberCont - NumberCont2);
    break;
    case "3":
        console.log(NumberCont*NumberCont2);
    break;
    case "4":
        console.log(NumberCont/NumberCont2);
        break;
    default:
        console.log("informação irrelevante e sem operação");
        break;


}