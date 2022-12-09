/* Retorne o URL da página atual utilizando o objeto "window". */
const linkPagina = window.location.href;
console.log(linkPagina);

/* Selecione o primeiro elemento da página que possui a classe "ativo". */
const elementoAtivo = document.querySelector(".ativo");

/* Retorne a linguagem do navegador. */
const navLanguage = window.navigator.language;
console.log(navLanguage);

/* Retorne a largura da janela. */
const windowWidth = window.innerWidth;
console.log(windowWidth);
