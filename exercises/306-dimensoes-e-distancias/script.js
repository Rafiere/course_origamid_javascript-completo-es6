/* Verifique a distância da primeira imagem em relação ao topo da página. */
const primeiraImagem = document.querySelector("img");

console.log(primeiraImagem.offsetTop);

/* Retorne a soma da largura de todas as imagens. */

/* Se não atribuirmos uma largura fixa para a imagem através da propriedade "width", no elemento, o JavaScript só conseguirá saber qual é a largura dessa imagem após ele carregá-la. Normalmente, o JavaScript é carregado antes do carregamento das imagens no servidor. Para garantir isso, podemos utilizar o "onload" e passarmos uma função de callback, para ativarmos essa função apenas quando o "onload" ocorrer, ou seja, quando a página for carregada. */

let somaDaLargura = 0;

window.onload = () => {
  const imagens = document.querySelectorAll("img");

  imagens.forEach((img) => {
    console.log(img.clientWidth);
    somaDaLargura += img.clientWidth;
  });

  console.log(somaDaLargura);
};

/* Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px, de acordo com o Google). */

const linksDaPagina = document.querySelectorAll("a");

linksDaPagina.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, " - Possui boa acessibilidade!");
  } else {
    console.log(link, " - Não possui boa acessibilidade!");
  }
});

/* Se o browser for menor que 720px, adicione a classe "menu-mobile" ao menu. */
const menorQue720px = window.matchMedia("(max-width: 720px)");
const menu = window.document.querySelector(".menu");

if (menorQue720px.matches) {
  console.log("A largura da tela é menor que 720px");
  menu.classList.add(".menu-mobile");
}
