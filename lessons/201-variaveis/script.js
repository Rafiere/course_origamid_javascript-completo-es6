/* Uma variável é responsável por armazenar dados na memória. Ela pode iniciar com as palavras "var", "let" ou "const". */

var nome = "Rafa";
let idade = 28;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

/* As variáveis servem para evitar repetições. Isso faz parte do conceito "DRY, ele diz que, se estamos escrevendo o mesmo código muitas vezes, provavelmente estamos fazendo algo errado. */

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

/* Podemos criar várias variáveis utilizando a palavra chave "var" apenas uma vez, por exemplo: */

var sobrenome = "Testando",
  cidade = "Rio de Janeiro";

/* Podemos declarar uma variável e não inserir nenhum valor dentro dela. Com isso, o valor "undefined" será atribuído para essa variável até que algum valor seja inserido. */

var precoAplicativo; //O valor dessa variável é "undefined".
console.log(precoAplicativo);

/* Hoisting: */

/* Quando declaramos uma variável, ela é movida para cima do código, porém, o valor atribuído não é movido, assim, o valor apenas será atribuído quando o JS executar a linha em que a atribuição está sendo feita, por exemplo: */

/* Ao executarmos esse código, por causa do Hoisting, não levaremos erro, pois a declaração da variável "nome", ou seja, o "var nome" será enviado para a parte de cima do código, e será executado no começo do arquivo, porém, o "console.log()" retornará "undefined", pois, por mais que a variável, por causa do Hoisting, seja declarada no início do arquivo, a atribuição do valor "Rafa" nessa variável será feita apenas na linha em que ela realmente foi escrita. */

console.log(nome3);
var nome3 = "Rafa"; //Exibirá "undefined" por causa do Hoisting.

var profissao = "Designer";
console.log(profissao); //Exibirá "Designer".

/* Mudar a Atribuição de Valores */

/* As variáveis declaradas com "var" e "let" podem ter o seu valor alterado, porém, as variáveis declaradas com "const" não podem ter o seu valor alterado. */

var time = "Flamengo";
var time = "Vasco"; //Podemos ou não inserir o "var" novamente.
console.log(time); //Será exibido "Vasco".

let time2 = "São Paulo";
time2 = "Palmeiras"; //Não podemos inserir o "let" novamente.
console.log(time2); //Será exibido "Palmeiras".

const senha = "1234"; //Esse valor não poderá ser redefinido.
console.log(senha); //Será exibido "1234".
