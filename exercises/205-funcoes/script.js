/* Crie uma função para verificar se um valor é truthy */

function verificaTruthy(valor) {
  if (!!valor === true) {
    return "O valor passado como argumento é 'Truthy'!";
  } else {
    return "O valor passado como argumento é 'Falsy'!";
  }
}

console.log(verificaTruthy("teste"));
console.log(verificaTruthy(5));
console.log(verificaTruthy(0));

/* Crie uma função matemática que retorne o perímetro de um quadrado. Lembrando: O perímetro é a soma dos quatro lados do quadrado. */

function calcularPerimetro(lado) {
  return lado * 4;
}

console.log(calcularPerimetro(5)); //Retornará "20".

/* Crie uma função que retorne o seu nome completo. Ela deve possuir os parâmetros "nome" e "sobrenome". */

function retornaNomeCompleto(nome, sobrenome) {
  console.log(nome + " " + sobrenome);
}

console.log(retornaNomeCompleto("Teste", "Testando"));

/* Crie uma função que verifica se um número é par. */

function isPar(numero) {
  if (typeof numero !== "number") {
    return false;
  }
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPar(4));
console.log(isPar(3));

/* Crie uma função que retorne o tipo de dado do argumento passado nela. */

function verificarTipo(valor) {
  return typeof valor;
}

/* O "addEventListener()" é uma função nativa do JavaScript. O primeiro parâmetro é o evento que ocorre, e o segundo parâmetro é o callback. Utilize essa função para mostrar no console o seu nome completo quando o evento "scroll" ocorrer. */

addEventListener("scroll", function () {
  console.log("Teste Testador");
});
