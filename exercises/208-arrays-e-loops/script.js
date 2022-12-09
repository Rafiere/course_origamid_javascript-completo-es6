/* Crie um array com os anos em que o Brasil ganhou a copa (1959, 1962, 1970, 1994, 2002). */

var anosEmQueOBrasilGanhouACopa = [1959, 1962, 1970, 1994, 2002];

/* Interaja com o array utilizando o loop, para mostrar no console a seguinte mensagem: "O Brasil ganhou a copa de `${ano}`. " */
anosEmQueOBrasilGanhouACopa.forEach((ano) => {
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

/* Interaja com o array abaixo através de um loop e pare ao chegar em "Pera". */
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (var i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Pera") {
    break;
  }
  console.log(frutas[i]);
}

/* Coloque a última fruta do array acima em uma variável, sem removê-la do array. */
var ultimaFruta;
frutas.forEach((fruta, index) => {
  if (index === frutas.length - 1) {
    ultimaFruta = fruta;
  }
});

console.log(ultimaFruta);
