/* Para criarmos um objeto, basta definirmos uma variável e iniciar a definição do seu valor através de chaves "{}". */

const carro = {
  marca: "Teste",
  preco: 0,
};

/* As "constructor functions", ou "funções construtoras" são funções que são responsáveis por construir novos objetos sempre que chamamos a mesma. */

/* Essa é uma função construtora. Sempre devemos utilizar o "PascalCase" para nomear funções construtoras. */
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

/* A palavra-chave "new" é responsável por criar um novo objeto baseado na função que passamos a frente dela. 

const honda = new Carro();

Passo a passo, a palavra-chave "new" funciona da seguinte forma:

1. Cria um novo objeto:
honda = {};

2. Define o protótipo:
honda.prototype = Carro.prototype;

3. Aponta a variável "this" para o objeto.
this = honda;

4. Executa a função, substituindo o "this" pelo objeto.
honda.marca = 'Marca';
honda.preco = 0;

5. Retorna o novo objeto:

return honda = {
    marca: 'Marca',
    preco: 0
}

*/
const honda = new Carro();

/* Podemos passar parâmetros para a função construtora. */
function Carro2(marca, preco) {
  /* O "this" faz referência ao objeto que está sendo construído. */
  this.marca = marca;
  this.preco = preco;
}

const honda2 = new Carro2("Honda", 5000);
const kia2 = new Carro2("Kia", 1000);

/* Exemplo Real: */

/* Quando mudarmos a propriedade "seletor", o objeto Dom irá passar a selecionar o novo seletor em seus métodos. */

/* Exemplo sem o uso de funções construtoras (ruim): */
// const Dom = {
//   seletor: "li",

//   element: function element() {
//     return document.querySelector(this.seletor);
//   },

//   ativo: function ativo() {
//     this.element().classList.add("ativo");
//   },
// };

// Dom.ativo(); //Adicionando o "ativo" ao "li".
// Dom.seletor = "ul";
// Dom.ativo(); //Adicionando o "ativo" ao "ul".

/* Exemplo com o uso de funções construtoras (bom): */

/* Nesse exemplo, como criamos objetos diferentes com a função construtora. um objeto não influenciará em outro que foi criado com a mesma função construtora. */

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };

  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
li.ativar;

const ul = new Dom("ul");
ul.ativar;
