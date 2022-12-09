/* Constantemente pegaremos vários elementos do DOM, e não apenas um item, dessa forma, a melhor forma de interagirmos com os mesmos é utilizando o método "forEach()". */

/* O primeiro parâmetro do "forEach" é o "callback", ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros, o "valorAtual", o "index" e o "array". */

const imagens = document.querySelectorAll("img");

imagens.forEach((imagem) => {
  console.log(imagem);
});

/* O "forEach()" é um método de array. Alguns objetos "array-like" possuem este método. Caso não possua, o ideal é transformá-los em uma array. */

/* Estamos obtendo um "HTMLCollection", que é um "array-like" que não possui o método "forEach()" e transformando-o em um array, que possuirá o método "forEach()". */
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
  console.log(item);
});

/* As "arrow functions" são uma nova sintaxe para a escrita de funções, introduzidas no ES6. Ela, simplesmente, encurta a "function expression". Basta removermos a palvra-chave "function" e adicionarmos a "fat arrow", que é o "=>", após os argumentos. */

/* Existe uma pequena diferença, ao utilizarmos o "arrow function" no "this" e nos "arguments", que não possuem o mesmo funcionamento, mas isso será explicado posteriormente no curso. */

const titulos2 = document.getElementsByClassName("titulo");
const titulosArray2 = Array.from(titulos);

titulosArray2.forEach((item) => {
  console.log(item);
});

/* Particularidades da Sintaxe: */

const imagens2 = document.querySelectorAll("img");

/* Quando temos um único argumento, a arrow function não precisa de parênteses. */
// imagens2.forEach(item => {
//   console.log(item);
// });

/* Múltiplos argumentos precisam de parênteses. */
imagens2.forEach((item, index) => {
  console.log(item, index);
});

/* Quando não temos argumentos, precisaremos dos parênteses, mesmo vazio. */
let i = 0;
imagens2.forEach(() => {
  console.log(i);
  ++i;
});

/* É possível omitirmos as chaves "{}" para uma função que retorna uma linha, por exemplo: */

const imagens3 = document.querySelectorAll("img");

imagens3.forEach((item) => console.log(item));
