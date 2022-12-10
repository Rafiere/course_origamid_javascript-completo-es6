/* O método "addEventListener()" adiciona uma função ao elemento, que é chamada de "callback". Essa função será ativada quando um determinado evento ocorrer nesse elemento. */

const img = document.querySelector("img");

/* Quando o evento de clique for ativado no "img", a função que foi passada como "callback" será ativada, ou seja, será exibida a mensagem "Clicou" no console. */
img.addEventListener("click", () => {
  console.log("Clicou!");
});

/* É uma boa prática separarmos a função de callback do "addEventListener()", ou seja, declarar uma função ao invés de passar diretamente uma função anônima. Ao debugarmos a aplicação, se estivermos utilizando uma função anônima, não será exibido o nome da função que está com erro. */

const aoClicar = function callback() {
  console.log("Clicou de novo!");
};

img.addEventListener("click", aoClicar);

/* O primeiro parâmetro do callback é referente ao evento que ocorreu, por exemplo: */

function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);

/* O "event" possui algumas propriedades, por exemplo: */

const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  /* O "currentTarget" será sempre o primeiro elemento, ou seja, em uma lista, será o elemento "ul". Nesse exemplo, ele será exatamente o elemento que foi obtido pelo "querySelector", que é um "ul". */
  const currentTarget = event.currentTarget;

  /* O "target" será sempre o local em que o clique foi executado. Nesse exemplo, se clicarmos em um "li", o "target" retornará o "li", e não o "ul", como o "currentTarget" faz. Algumas vezes, essas duas propriedades podem retornar o mesmo elemento. */
  const target = event.target;

  /* Será retornado o tipo do evento. */
  const type = event.type;

  /* Será retornado o caminho do elemento na página. */
  const path = event.path;

  console.log(currentTarget);
  console.log(target);
  console.log(type);
  console.log(path);
}

animaisLista.addEventListener("click", executarCallback);

/* O "event.preventDefault()" previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, ele impedirá do link ser ativado. */

const linkExterno = document.querySelector('a[href^=http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

/* A palavra-chave "this" é uma palavra especial do JavaScript. ela pode fazer referência a diferentes objetos, de acordo com o contexto. No caso de eventos, ela fará referência ao elemento em que o "addEventListener()" foi adicionado. */

const img2 = document.querySelector("img");

function callback(event) {
  /* Será retornada a imagem, ou seja, o elemento em que o evento foi adicionado. Ele faz a mesma coisa que o "currentTarget". */
  console.log(this);
  console.log(this.getAttribute("src"));
}

img2.addEventListener("click", callback);

/* Existem vários outros eventos, como o "click", o "scroll", o "resize", o "keydown", o "keyup", o "mouseenter" e etc. Podemos adicionar eventos a diferentes elementos, como o "window" e o "document", também. */

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
h1.addEventListener("mousemove", handleEvent);

window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent);

/* Podemos adicionar atalhos para facilitar a navegação do site, por exemplo, através de eventos do "keyboard". */

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}

h1.addEventListener("keydown", handleKeyboard);

/* O método "addEventListener()" é adicionado apenas em um único elemento, dessa forma, é necessário um loop entre elementos de uma lista para adicionarmos a cada um deles. */

const imagens = document.querySelectorAll("img");

function obterSrcImagem(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imagens.forEach((img) => {
  img.addEventListener("click", obterSrcImagem);
});
