/* Retorne no console todas as imagens do site. */

const imagensElementos = document.querySelectorAll("img");
imagensElementos.forEach((item, index, array) => {
  console.log(item);
});

/* Retorne no console apenas as imagens que começaram com a palavra "imagem" */
const imagensAnimais = document.querySelectorAll('img[src^="./assets/imagem"]');
console.log(imagensAnimais);

/* Selecione todos os links internos (onde o "href" começa com "#"). */
const linksInternos = document.querySelectorAll('[href^="#"]');

/* Selecione o primeiro "h2" dentro de ".animais-descricao". */
const primeiroH2 = document.querySelector(".animais-descricao h2");

console.log(primeiroH2);

/* Selecione o último "p" do site. */
const todosOsParagrafos = document.querySelectorAll("p");

const ultimoParagrafo = todosOsParagrafos[todosOsParagrafos.length - 1];

console.log(ultimoParagrafo.innerHTML);
