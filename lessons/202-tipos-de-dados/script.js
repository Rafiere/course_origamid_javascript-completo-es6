/* O JavaScript possui sete tipos de dados, todos são primitivos, exceto os objetos. */

var nome = "André"; //string
var idade = 28; //number
var possuiFaculdade = true; //boolean
var time; //undefined, porque ainda nenhum valor foi atribuído.
var comida = null; //null
var simbolo = Symbol(); //symbol
var novoObjeto = {}; //object

/* Os tipos primitivos são imutáveis, assim, não podemos mudar uma string chamada "André", por exemplo. O que podemos fazer é atribuir um outro valor, mas não conseguimos modificar o valor já existente. */

/* No JavaScript, funções e arrays são objetos. */

/* typeof */

var nome2 = "André";
console.log(typeof nome); //Retorna "string".

var time2 = null;
console.log(typeof time2); //O "null" é considerado como um "object" no JavaScript. O tipo de uma variável que foi atribuída como "null" será "object".

/* Strings no JavaScript */

var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + "" + sobrenome;

/* Sempre que somamos um número com uma string, o resultado será uma string. */

var gols = 1000;
var frase = "Romário fez " + gols + " gols.";
console.log(frase);

/* Sempre que somamos um número com outro número, o resultado é um número. */
var num1 = 1000;
var num2 = 1000;
console.log(num1 + num2); //Retornará o número "2000".

/* O "\" serve para escaparmos um caractere, ou seja, fazer com que ele perca a sua função original, por exemplo: */
// console.log("Olá, tudo bem com você, senhor \"grandioso\"? ");

/* O "template string" permite que insiramos o valor de uma variável dentro de uma string, por exemplo: */
var gols2 = 1000;
console.log(`O Pelé fez mais de ${gols2} gols!`);
