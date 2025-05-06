const { IMC } = require("./calcularIMC");



if (imc <= 18.5) {
  return "abaixo do peso";
}

else if (IMC >= 18.5) {
  return "peso normal";
}

else if (IMC<= 24.4)
  return "peso normal"

else if (IMC > 25){
  return "Sobrepeso";
}

else if (IMC <=29.9){
  return "sobrepeso"
}

else if (IMC >= 30) {
  return "Obesidade";
}

else {
  return "Error";
}
