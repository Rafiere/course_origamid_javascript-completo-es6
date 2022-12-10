/* Duplique o menu e adicione ele em "copy". */
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

/* Selecione o primeiro "dt" da "dl" de faq. */
const faq = document.querySelector(".faq");

const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

/* Selecione o "dd" referente ao primeiro "dt". */
const ddDoPrimeiroDt = primeiroDt.nextElementSibling;
console.log(ddDoPrimeiroDt);

/* Substitua o conteúdo HTML de ".faq" pelo de ".animais". */
const animais = document.querySelector(".animais");

/* Estamos fazendo a substituição de conteúdo. */
faq.innerHTML = animais.innerHTML;
