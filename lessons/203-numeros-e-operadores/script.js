/* Existem várias formas de declararmos números no JavaScript. */

var idade = 28;
var gols = 1000;
var pi = 3.14;
var exp = 2e10; //Equivale ao valor "20000000000".

/* Operadores Aritméticos no JavaScript */

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

/* Operadores Aritméticos com Strings */

/* Sempre que estivermos utilizando um operador que não existe em strings, como o "-", o "*" e o "/", o JS tentará converter a string para um número. Se ele conseguir, ele efetuará a conta com os números, se ele não conseguir, como é o caso da divisão abaixo, ele retornará um "NaN". */

var soma2 = "100" + 50; //10050
var subtracao2 = "100" - 50; //50 - Na subtração, o JS consegue converter, pois não existe subtração de string, logo, o JS tenta converter para números.

var multiplicacao2 = "100" * 2; //200
var divisao2 = "Comprei 10" / 2; //NaN (Not a Number)

/* Com a função "isNan()", podemos verificar se uma variável é um NaN ou não. */

console.log(isNaN(divisao2));

/* Operadores Aritméticos Unários */
var incremento = 5;
console.log(incremento++); //5, pois o incremento será feito após a execução dessa linha.
console.log(++incremento); //6, pois o incremento será feito automaticamente.

/* Se efetuarmos uma soma de um valor "number" com um número que esteja entre aspas duplas, o JS fará a concatenação entre esses números, pois o operador "+" pode ser utilizado para realizar a concatenação entre strings. Caso queiramos que o JS não faça a concatenação, e, ao invés disso, transforme a string em um número e efetue a soma, basta colocarmos o operador "+" ao lado da string com o número, por exemplo: */

var idade = "28"; //string
var somaIdade = 5; //number
var idade2 = +"28"; //number

console.log(idade + somaIdade); //Retornará "285".
console.log(+idade + somaIdade); //Retornará "33", pois a string será convertida.
