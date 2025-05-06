const { IMC } = require("./calcularIMC");

if (imc <= 18.5) {
  return "abaixo do peso";
}

else if (IMC >= 18.5 &&  <= 24.9) {
  return "peso normal";
}


else if (IMC > 25 &&  <= 29.9) {
  return "Sobrepeso";
}

else if (IMC >= 30) {
  return "Obesidade";
}

else {
  return "Error";
}
