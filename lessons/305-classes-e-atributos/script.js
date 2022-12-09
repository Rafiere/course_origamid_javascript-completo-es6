/* O "classList" retorna uma lista com as classes do elemento. Ele permite adicionar, remover e verificar se contém uma determinada classe ou não. */

const menu = document.querySelector(".menu");

/* Estamos adicionando a classe "ativo" no elemento que foi selecionado pelo "querySelector" */
menu.classList.add("ativo");

/* A classe "ativo" existe nesse elemento? Esse método retornará um "boolean". */
menu.classList.contains("ativo");

/* Estamos removendo a classe "azul". */
menu.classList.remove("azul");

/* Se a classe "azul" existir, estamos removendo-a. Se ela não existir, estamos adicionando-a. */
menu.classList.toggle("azul");

/* Estamos substituindo a classe "ativo" pela classe "inativo". */

/* Esse método retorna uma string com os nomes de todas as classes desse elemento. */
console.log(menu.className);

/* Estamos adicionando a classe "22" e retirando todas as outras classes que já existem. */
menu.className = 22;

/* Antigamente, ao invés de utilizar o "classList.add()", era essa a forma que uma classe era adicionada em um elemento. */
menu.className = menu.className + " vermelho";

/* Esse método obtem um array com todos os atributos e valores de um determinado elemento, por exemplo: */

/* Abaixo, será exibido o nome e o valor do primeiro atributo do elemento HTML. */
console.log(menu.attributes[1]);

/* Podemos retornar uma propriedade e o seu valor através do nome da propriedade, por exemplo: */
console.log(menu.attributes["class"]); //Retornaremos o atributo e todos os valores do atributo "class" do elemento "menu".

/* Os métodos "getAttribute()" e "setAttribute()" retornam ou definem de acordo com o atributo selecionado. Eles são as formas mais utilizadas para obtermos ou definirmos um atributo através do JavaScript. */

const img = document.querySelector("img");

/* Estamos obtendo o valor do atributo "src". */
img.getAttribute("src");

/* Estamos definindo o valor do atributo "alt" desse elemento para "Texto Alternativo". */
img.setAttribute("alt", "Texto Alternativo");

/* Será retornado "true" ou "false", se o elemento possuir ou não um determinado atributo. */
console.log(img.hasAttribute("id"));

/* Estamos removendo o atributo "alt" desse elemento. */
img.removeAttribute("alt");

/* Estamos retornando "true" ou "false", se essa imagem tiver atributos ou não. */
console.log(img.hasAttributes());

/* Read Only vs Writable */

/* Existem propriedades que não permitem a mudança de seus valores. Elas são consideradas como propriedades "read-only", ou seja, permitem apenas a leitura, por exemplo: */

const animais = document.querySelector(".animais");

/* Será retornada uma string com o nome de classes. */
animais.className;

/* Estamos substituindo completamente a string com o nome de classes e adicionando apenas a classe "azul". */
animais.className = "azul";

/* Estamos adicionando a classe "vermelho" sem substituir a string. */
animais.className += " vermelho";

/* O código abaixo não funcionará pois a propriedade "attributes" é "read-only". */

/* As propriedades "readonly" são criadas através do modificador "readonly". */
animais.attributes = 'class="ativo"';
