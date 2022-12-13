/* Uma função é um bloco de código que pode ser executado e reutilizado. Valores podem ser passados para uma função, e essa função retorna outro valor. */

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //Será retornado "16".
console.log(areaQuadrado(5)); //Será retornado "25".
console.log(areaQuadrado(2)); //Será retornado "4".

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

/* Diferença entre parâmetro e argumento */

/* Ao criarmos uma função, podemos definir parâmetros. Ao executarmos uma função, podemos passar argumentos, por exemplo: */

/* "peso" e "altura" são parâmetros. */
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); //"80" e "1.8" são argumentos.
imc(60, 1.7); //"60" e "1.7" são argumentos.

/* Argumentos podem ser funções. Elas são chamadas de "callback". São, normalmente, funções que ocorrem após algum evento. */

/* Na função abaixo, estamos passando dois argumentos, o "evento", que é uma string, e uma função anônima, que será executada quando esse evento ocorrer. Uma função "callback" é uma função que ocorre após algo que acontece. Nesse exemplo, a função anônima que está sendo passada como segundo argumento dessa função é chamado de "callback". */

addEventListener("click", function () {
  console.log("Clicou!");
});

/* As funções anônimas são aquelas em que o nome da função não é definido. Elas são escritas como "function() {}" ou "() => {}". */

/* Uma função pode ou não retornar um valor. Quando não definimos o "return" de uma função, ela retornará "undefined". */

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); //Será retornado o IMC.
console.log(imc2(80, 1.8)); //Será retornado o IMC e o "undefined".

/* Uma função pode retornar qualquer tipo de dado e até outras funções, porém, apesar de ser possível, temos que tomar cuidado ao retornarmos diferentes tipos de dados na mesma função. */

/* A função abaixo está retornando diferentes tipos de dados. */

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

/* Escopo */

/* As variáveis e funções definidas dentro de um bloco não são visíveis fora dele. */

/* As funções sempre conseguem acessar variáveis que foram criadas no contexto-pai. */

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${
    totalPaises - paisesVisitados
  } países para visitarmos!`;
}

//Será retornado um erro, pois o "totalPaises" não está definido nesse escopo.
console.log(totalPaises);

/* Hoisting */

/* Antes de executar uma função, o JS move todas as funções que são declaradas para a memória, assim, mesmo que chamarmos uma função antes da declaração dela, como ela será carregada na memória assim que o arquivo JS for executado, essa função será chamada. */

/* Esse código funcionará, pois a função "imc3()", apesar de estar sendo declarada após a chamada dela, por causa do Hoisting, foi carregada na memória assim que o arquivo JS foi carregado, assim, essa função será reconhecida. */
console.log(imc3(80, 1.8));

function imc3(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
