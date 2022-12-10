/* A maioria das propriedades relacionadas a dimensões e distâncias são read-only, por exemplo: */
const section = document.querySelector(".animais-lista");

/* Height + Padding. */
console.log(section.clientHeight);

/* Height + Padding + Border. */
console.log(section.offsetHeight);

/* Height total, mesmo dentro do scroll. Ou seja, mesmo que um elemento tenha um "max-width" e um scroll quando ele atingir esse "max-width", será contada aaltura total do elemento. */
console.log(section.scrollHeight);

/* Para o "width", os métodos são os mesmos, apenas trocando o "height" pelo "width". */

console.log(section.clientWidth);

/* Podemos obter a distância entre o topo do elemento e o topo da página com o "offsetTop" */

console.log(section.offsetTop);

/* Podemos obter a distância entre o canto esquerdo do elemento e o canto esquerdo da página através da propriedade "offsetLeft". */

console.log(section.offsetLeft);

/* Esse método cria um retângulo em volta do elemento e retorna esse retângulo, e, a partir desse retângulo, podemos obter várias medidas, como o tamanho desse retângulo e a distância desse retângulo em relação aos outros elementos da página. */

const retangulo = section.getBoundingClientRect();

/* Estamos obtendo a altura do elemento. */
console.log(retangulo.height);

/* O objeto "window" permite a obtenção dos tamanhos da tela do usuário, por exemplo: */

/* Retorna a largura da janela do usuário. */
console.log(window.innerWidth);

/* Retorna a largura da janela somada com a largura do "devTools" */
console.log(window.outerWidth);

/* Retorna a altura da janela. */
console.log(window.innerHeight);

/* Retorna a altura da janela somada com a altura da barra de endereço. */
console.log(window.outerHeight);

/* Retorna a distância total do scroll vertical. Basicamente, é a quantidade, em pixels, de scroll que já demos na tela. */
console.log(window.pageYOffset);

/* Retorna a distância total do scroll horizontal. Basicamente, é a quantidade, em pixels, de scroll horizontal que já demos na tela.*/
console.log(window.pageXOffset);

if (window.innerWidth < 600) {
  console.log("O tamanho da tela é menor que 600px.");
}

/* O "matchMedia" serve para utilizarmos um media-query, igual fazemos no CSS, para verificar a largura do browser. */
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("O tamanho da tela é menor que 600px.");
} else {
  console.log("O tamanho da tela é maior que 600px.");
}
