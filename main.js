function CalcularFrete(distancia, peso) {

  let valor = distancia * 0.2;

  if (peso < 30) {
    valor += 5;
  }

  console.log("Peso:", peso);
  console.log("Distancia: ", distancia)
  return valor;
}

console.log(CalcularFrete(2, 20));