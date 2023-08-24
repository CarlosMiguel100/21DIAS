let  OqueVcQuerFazerComOCarro = prompt("Digite o que vc quer  gasolina=1, alcool=2, ou caalibrar=3");


switch(OqueVcQuerFazerComOCarro){
    case "1":
         let valorDeAbastecergasolina =Number(prompt("Digite a quantidade de combustivel"))
         console.log("Valor em litro "+ valorDeAbastecergasolina*5);
    break;
    case "2":
        let valorDeAbasteceralcool =Number(prompt("Digite a quantidade de combustivel"))
        console.log("Valor em litro "+ valorDeAbasteceralcool*3);
    break;
    case "3": 
        
        console.log("Calibrado Com sucesso  ");
    break;
    default:
        console.log("Não fazemos esse serviço aqui siga as intrução a cima ");
    break;


}