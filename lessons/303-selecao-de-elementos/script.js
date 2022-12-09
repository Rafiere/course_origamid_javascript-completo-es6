/* O "getElementById" seleciona e retorna elementos do DOM pela propriedade "ID". */

const animaisSection = document.getElementById("animais");

/* Estamos obtendo apenas o texto do elemento que foi selecionado acima. */
console.log(animaisSection.innerText);

/* Se selecionarmos algo que não existe, será retornado "null": */

const animaisSection2 = document.getElementById("animaisNaoExistente"); //null

/* O "getElementsByClassName()" retornará uma lista de elementos do DOM pelo nome da classe, ou seja, retornará todos os elementos do DOM que possuem uma determinada classe. 

A lista será retornada ao vivo, isso significa que, se os elementos forem adicionados, ela será automaticamente atualizada.

A lista retornada será uma "HTMLCollection".
*/

const gridSection = document.getElementsByClassName("grid-section");

/* No exemplo abaixo, estamos selecionando apenas os elementos que possuem ambas as classes (grid-section e contato). */
const contato = document.getElementsByClassName("grid-section contato");

/* O "getElementsByTagName()" retornará uma lista de elementos do DOM pelo nome da tag, ou seja, retornará todos os elementos do DOM que possuem uma determinada tag HTML. */

/* A lista também será retornada ao vivo, ou seja, se os elementos forem adicionados, ela será automaticamente atualizada. 

A lista retornada será uma "HTMLCollection". 
*/

const ul = document.getElementsByTagName("ul");

/* O "querySelector" é um seletor geral único. Ele retornará o PRIMEIRO elemento que combinar com o elemento CSS. */

const animais2 = document.querySelector(".animais");
const contato2 = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const primeiroUl = document.querySelector("ul");

/* Podemos buscar um elemento apenas na primeira "ul", caso tenhamos a referência dessa primeira "ul", por exemplo: */
const navItem = primeiroUl.querySelector("li");

const primeiroLinkInterno = document.querySelector('[href^="#"]');
console.log(primeiroLinkInterno);

/* O "querySelectorAll()" retorna todos os elementos compatíveis com o seletor CSS em uma NodeList. */

/* Diferentemente do "getElementsByClassname", a lista que o "querySelectorAll()" retorna é estática. */

/* Será retornada uma "NodeList". Ele é diferente do "HTMLCollection", pois ele possui valores algumas propriedades e métodos. Se adicionarmos mais um elemento, essa lista não será atualizada em tempo real. */
const animaisImg = document.querySelectorAll(".animais img");

/* Diferença entre HTMLCollection e NodeList */

/* A diferença está nos métodos e propriedades de ambas. Além disso, a NodeList retornada com o "querySelectorAll" é estática. */

const titulo = document.querySelector(".titulo");

const gridSectionHTMLCollection =
  document.getElementsByClassName("grid-section");
const gridSectionNodeList = document.querySelectorAll(".grid-section");

/* Estamos adicionando uma classe no primeiro título do site. */
titulo.classList.add("grid-section");

console.log(gridSectionHTMLCollection); //4 elementos.
console.log(gridSectionNodeList); //3 elementos.

/* O HTMLCollection e o NodeList são array-like. Eles se parecem com um array, mas não são. O método de array "forEach()", por exemplo, existe apenas no "NodeList". */

const gridSection2 = document.querySelectorAll(".grid-section");

gridSection2.forEach((gridItem, index, array) => {
  gridItem.classList.add("azul");
  console.log(index); //O index do item no array.
  console.log(array); //O array completo.
});

/* É possível transformar um "array-like" em um array real através do método "Array.from(gridSection)".  */

const gridSectionHTMLCollection2 =
  document.getElementsByClassName("grid-section");

/* Estamos transformando o "gridSectionHTMLCollection2", que é um array-like, em um array, para que possamos utilizar o método "forEach()", através do método "Array.from()". */

const gridSectionHTMLCollection2Array = Array.from(gridSectionHTMLCollection2);

gridSectionHTMLCollection2Array.forEach((item, index, array) => {
  console.log(item);
});
