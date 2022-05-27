function Converter() {
    var moeda = document.getElementById("moeda").value; //Select
    var valor = document.getElementById("valor").value; //valor digitado
    if (moeda == "usd") {
      var resultado = parseFloat(valor) * 5;
    } else if (moeda == "eur") {
      var resultado = parseFloat(valor) * 5.5;
    } else if (moeda == "lib") {
      var resultado = parseFloat(valor) * 6.6;
    } else if (moeda == "btc") {
      var resultado = parseFloat(valor) * 210000;
    }
  
    document.getElementById("resultado").innerHTML =
      "O valor em real é R$" + resultado.toFixed(2);
  }