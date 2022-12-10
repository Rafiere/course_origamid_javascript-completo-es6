const menu = document.querySelector(".menu");

/* O "outerHTML" contém todo o HTML do elemento, incluindo ele mesmo. */
console.log(menu.outerHTML);

/* O "innerHTML" contém todo o HTML interno do elemento, sem incluir o próprio elemento. */
console.log(menu.innerHTML);

/* O "innerText" contém apenas o texto do HTML, sem tags. Se o elemento tiver filhos, ele vai trazer as tags, mas elas serão renderizadas como texto. */
console.log(menu.innerText);

/* O conceito de "transversing" consiste em navegar pelo DOM utilizando as suas propriedades e métodos. */

const lista = document.querySelector(".animais-lista");

lista.parentElement; //Elemento "pai".
lista.parentElement.parentElement; //Elemento "pai do pai".
lista.previousElementSibling; //Elemento acima, mas no mesmo nível.
lista.nextElementSibling; //Elemento abaixo, mas no mesmo nível.

lista.children; //Retorna uma "HTMLCollection" com os filhos.
lista.children[0]; //Retorna o primeiro filho.
lista.children[--lista.children.length]; //Retorna o último filho.

lista.querySelectorAll("li"); //Retorna todas as "li".
lista.querySelector("li:last-child"); //Retorna o último filho.

/* Element vs Node */

/* Os "elements" representam um elemento HTML, ou seja, uma tag. Toda tag HTML é um elemento. O "Node" representa um nó, e ele pode ser um elemento (Element), um texto, um comentário, uma quebra de linha e mais. */

const lista2 = document.querySelector(".animais-lista");

lista.previousElementSibling; //Elemento acima, mas no mesmo nível.
lista.previousSibling; //Retorna o "node" acima, mas no mesmo nível.

lista.firstChild; //Retorna o primeiro node que é filho.
lista.childNodes; //Retorna todos os nodes.

/* Geralmente, estamos atrás de um elemento, e não de qualquer node. */

/* É possível movermos elementos no DOM através de métodos de node, por exemplo: */

const lista3 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

/* Estamos movendo a lista para o final de "contato", ou seja, colocando o elemento "contato" como o último item da lista de animais. */
contato.appendChild(lista3);

/* O primeiro argumento é o elemento que queremos mover, o segundo elemento é o elemento que queremos que seja colocado antes */

/* O "contato" é o elemento "pai", dessa forma, dentro do elemento "pai", que é o contato, queremos inserir a lista "lista3" antes do título. O HTML da página será alterado. */

/* O "contato" tem que ser o elemento-pai, e tanto a "lista3" quanto o "titulo" devem ser filhos do elemento "contato". */
contato.insertBefore(lista3, titulo);

/* Nesse exemplo, estamos removendo um filho de "contato", que é o elemento "titulo", ou seja, esse HTML será removido completamente. */
contato.removeChild(titulo);

/* Estamos, dentro do elemento-pai "contato", substituindo o elemento "lista" pelo elemento "titulo". */
contato.replaceChild(lista, titulo);

/* Podemos criar novos elementos com o método "createElement", por exemplo: */

const animais = document.querySelector(".animais");

/* Estamos criando o elemento "H1" pelo JavaScript. Ele ficará salvo na memória, e não será inserido no DOM até, através do método "appendChild()", por exemplo, realizar essa inserção. */
const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

/* Estamos adicionando esse elemento como um filho do elemento "animais". */
animais.appendChild(novoH1);

/* Cada elemento é único. Para criarmos um novo elemento, com base no anterior, precisamos utilizar o método "cloneNode()". O "true" sinaliza que os elementos que são filhos também devem ser incluídos. Se passarmos "false", será clonado apenas o próprio elemento em si, e não os filhos desse elemento.  */

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

/* Estamos clonando o H1 e os filhos do H1 e movendo o clone do H1 como o último filho do elemento "faq". */
faq.appendChild(cloneH1);
