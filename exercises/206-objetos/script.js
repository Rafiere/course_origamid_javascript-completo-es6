/* Crie um objeto com os seus dados pessoais. Ele deve possuir pelo menos duas propriedades: Nome e sobrenome. */

var dadosPessoais = {
  nome: "Teste",
  sobrenome: "Testador",
};

/* Crie um método, no objeto anterior, que mostre o seu nome completo. */

dadosPessoais.exibirNomeCompleto = function () {
  console.log(this.nome + " " + this.sobrenome);
};

/* Modifique o valor da propriedade "preco" para "3000". */

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

/* Crie um objeto de um cachorro, que represente um labrador, preto, com 10 anos, que late ao ver um homem. */
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,

  latir(viuHomem) {
    if (typeof viuHomem !== "boolean") {
      console.log("Envie um dado booleano!");
      return;
    }
    if (viuHomem === true) {
      console.log("Au, au!");
    }
  },
};
