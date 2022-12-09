/* Adicione a classe "ativo" em todos os itens do menu. */
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

/* Remova a classe "ativo" de todos os itens do menu e mantenha apenas no primeiro. */

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

/* Verifique se as imagens possuem o atributo "alt". */

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  console.log(img.hasAttribute("alt"));
});

/* Modifique o "href" do link externo no menu. */
const linkExterno = document.querySelector('a[href^="http"]');

/* Estamos modificando o valor do atributo "href" para "www.google.com". */
linkExterno.setAttribute("href", "https://www.google.com");
