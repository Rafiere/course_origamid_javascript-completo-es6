/* Por qual motivo o código abaixo retorna erros? */

/* Pois o escopo do "const" e do "let" é de bloco, assim, o "console.log()" não consegue acessar o valor dessas variáveis. */

{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}

console.log(cor, marca, portas);
