/* Existem três tipos de objetos, os nativos, os do "host" e os do "user". */

/* Os objetos nativos são aqueles que foram definidos na especificação da linguagem e são implementados independentemente do host. */

/* Construtores de Objetos Nativos: */
Object;
String;
Array;
Function;

/* Os objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo, no browser, possuímos objetos do DOM, como "DomList", "HTMLCollection" e outros. Em Node.js, os objetos do Host são diferentes, já que não estamos em um ambiente do browser. */

/* Se tentarmos acessar esses objetos em um console Node, por exemplo, eles não existirão. */

/* Objetos do Browser */
NodeList;
HTMLCollection;
Element;

/* Os objetos do usuário são os objetos definidos pelo próprio aplicativo, ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa. */

const Pessoa = {
  nome: "Teste",
};

/* Browsers diferentes podem possuir objetos com propriedades e métodos diferentes, apesar de eles sempre tentarem manter um padrão. */

/* Sempre que o browser é atualizado, novos métodos e propriedades podem ser implementados. */

/* Por exemplo, os browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método "find" em Array". */

/* Existem algumas ferramentas que servem para pegar um código que foi escrito com o JS moderno e transformar esse código em um JS antigo, que pode ser entendido e suportado pelos browsers que estão com versões não muito recentes. O Babel é uma dessas ferramentas. */

/* O ECMA é uma organização responsável por definir padrões para tecnologias. O ECMAScript é o padrão de JavaScript. */

/* O ECMAScript 2015 ou ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso, o ECMAScript 2015 é igual ao ES6. A partir da ES6, existe uma tendência anual de atualizações. O ECMAScript 2015, 2017, 2017, 2018 e Next. */

/* Existem diversas engines que implementam o ECMAScript, como o V8, o SpiderMonkey, o Chakra, o JavaScriptCore e outras. */

/* As bibliotecas, como a jQuery, foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas tornam essas bibliotecas obsoletas. */

/* Para verificarmos se um objeto ou um método existe no JavaScript, podemos utilizar o "typeof", por exemplo: */

/* Estamos verificando se o método "Array.from()" existe. */
if (typeof Array.from !== "undefined") {
  console.log("O 'Array.from' existe!");
}

/* Estamos verificando se o objeto "NodeList" existe. */
if (typeof NodeList !== "undefined") {
  console.log("O 'NodeList' existe!");
}

/* Uma API é uma interface de software criada para a interação com outros softwares. Basicamente, toda interação que fazemos com o browser, utilizando objetos, métodos e propriedades, está sendo feita através da interação com a API do browser. */
