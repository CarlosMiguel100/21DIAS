let Fome = prompt("you are hungry ?");
let dinheiro = prompt("Do you have money?");
let restaurante_Aberto = prompt("Is the restaurant open?");

if (Fome == "No" || dinheiro == "No") {
  console.log("Hoje a janta vai ser em casa");
}

if (Fome == "Yes" && dinheiro == "Yes" && restaurante_Aberto == "No") {
  console.log("Peça um delivery");
}

if (Fome == "Yes" && dinheiro == "Yes" && restaurante_Aberto == "Yes") {
  console.log("Hoje a janta vai ser no restaurante preferido");
}