/* Quando o usuário clicar nos links internos do site, adicione a classe "ativo" ao item clicado e remova dos demais itens caso eles possuam a mesma. Impeça o comportamento padrão desses links. */

const linksInternos = document.querySelectorAll("a[href^='#']");

const handleClickLinkInterno = (event) => {
  event.preventDefault();

  linksInternos.forEach((linkInterno) => {
    linkInterno.classList.remove("ativo");
  });

  event.currentTarget.classList.toggle("ativo");
};

/* Estamos adicionando um evento para cada link. */
linksInternos.forEach((linkInterno) => {
  linkInterno.addEventListener("click", handleClickLinkInterno);
});

/* Selecione todos os elementos do site, começando a partir do body. Ao clicar, mostre exatamente quais elementos estão sendo clicados. */

/* Estamos obtendo todos os itens que estão dentro da tag "body". */
const todosOsElementos = document.querySelectorAll("body *");

function handleClickElemento(event) {
  console.log(event.currentTarget);
}

todosOsElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClickElemento);
});

/* Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado. O método "remove()" remove um determinado elemento. */

function handleClickElemento2(event) {
  event.currentTarget.remove();
}

todosOsElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClickElemento2);
});

/* Se o usuário clicar na tecla (t), aumente todo o texto do site. */

function handleClickT(event) {
  console.log("teste");
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-maior");
  }
}

window.addEventListener("keydown", handleClickT);
