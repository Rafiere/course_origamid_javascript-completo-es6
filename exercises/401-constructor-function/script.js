/* Transforme o objeto abaixo em uma função construtora */

const pessoa = {
  nome: "Nome da Pessoa",
  idade: 0,

  andar() {
    console.log(this.nome + " andou.");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    console.log(this.nome + " andou.");
  };
}

/* Crie três pessoas: João - 20 anos, Maria - 25 anos, Bruno - 15 anos. */

const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

/* Crie uma construtor function para a manipulação de listas de elementos do Dom. Ela deve conter as seguintes propriedades e métodos: */

/* elements - propriedade: Ela retorna uma NodeList com os elementos selecionados.

addClass(classe) - método: Adiciona a classe a todos os elementos. 

removeClass(classe) - método: Remove a classe de todos os elementos. */

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);

  this.elements = elementList;

  this.addClass = function (classe) {
    this.elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    this.elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");
