/* No JavaScript, tudo é um objeto. Strings, números, booleanos, Object, e mais, possuem propriedades e métodos, por isso, são considerador como objetos. */

/* Uma string herda propriedades e métodos do construtor "String()", por exemplo: */

var nome = "André";
nome.length; //Retornará "5".
nome.charAt(1); //Retornará "n".
nome.replace("ré", "rei"); //Retornará "Andrei"
console.log(nome); //Exibirá "André".

/* Os números também são transformados em objetos, dessa forma, temos acesso às propriedades e métodos dos números, por exemplo: */

/* O "typeof" do "altura" ainda será "number", porém, quando utilizamos um método, como o "toString()" nesse número, o JavaScript envolverá esse number no construtor "Number()", gerando um objeto por um breve momento, retornando o valor desse método esperado, que é o número como um string, após isso, esse objeto que foi gerado é apagado da memória, e o typeof do número volta a ser um "number". */

var altura = 1.8;
console.log(altura.toString()); //'1.8'
console.log(altura.toFixed()); //'2'

/* Funções */

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString()); //Será retornado o corpo da função.
console.log(areaQuadrado.length); //Será retornado o número de argumentos dessa função.

/* DOM */

/* Praticamente todos os efeitos com o JavaScript são feitos utilizando propriedades e métodos de objetos do DOM. */

/* A função "querySelector" permite a seleção de um objeto HTML por um seletor CSS. */
var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("Foi clicado!");
});
