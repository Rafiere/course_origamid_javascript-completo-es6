/* Mostre no console cada parágrafo do site. */
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo);
});

/* Mostre o texto dos parâgrafos no console. */

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.innerText);
});
