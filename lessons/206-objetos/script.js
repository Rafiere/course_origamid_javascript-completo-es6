/* Um objeto é um conjunto de variáveis e funções, que são chamadas de "propriedades" e de "métodos". */

var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,

  falarAIdade: function () {
    return "Eu tenho 28 anos!";
  },

  /* Quando usamos o "this" dentro de um objeto, estamos fazendo referência ao objeto em si, ou seja, ao valor do atributo do objeto atual. */

  verificarFaculdade: function () {
    if (this.possuiFaculdade) {
      return "Eu possuo faculdade!";
    } else {
      return "Eu não possuo faculdade!";
    }
  },

  /* A partir do ES6, podemos criar um método sem o "function", usando a sintaxe: "nomeDaFuncao(parametros) {corpoDaFuncao}" */

  falarOi() {
    return "Oi!";
  },
};

console.log(pessoa.nome); //Será retornado "André".
console.log(pessoa.idade); //Será retornado "28".
console.log(typeof pessoa); //Será retornado "object".

console.log(pessoa.falarAIdade);
console.log(pessoa.verificarFaculdade);
console.log(pessoa.falarOi);

/* Os objetos servem para organizar o código em pequenas partes reutilizáveis. */

/* Para criar um objeto, sempre devemos utilizar as chaves: "{}". */

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

/* Estamos alterando o valor da propriedade "backgroundColor". */
menu.backgroundColor = "#000";

console.log(menu.backgroundColor);

/* Estamos adicionando a propriedade "color" no objeto "menu". */
menu.color = "blue";

/* Estamos adicionando o método "andar()" no objeto "menu". */
menu.esconder = function () {
  console.log("Escondi!");
};

/* A palavra-chave "this" faz referência ao próprio objeto. */

/* O objeto sempre herda propriedades e métodos do objeto que foi utilizado para criar o mesmo. */

/* Todo objeto que criamos utiliza o "Object", que é uma função. Essa função possui propriedades e métodos, como o método "hasOwnProperty". Esse método verifica se temos uma propriedade em nosso objeto. Esse método verifica se a propriedade foi criada diretamente nesse objeto. Se uma propriedade foi atribuída por herança, esse método não reconhecerá essa propriedade e retornará "false". */

var menu2 = {
  width: 800,
};

menu.hasOwnProperty("width"); //true
menu.hasOwnProperty("height"); //false
