//Verifique se as seguintes variáveis são "Truthy" ou "Falsy":
var nome = "André";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome); //Truthy
console.log(!!idade); //Truthy
console.log(!!possuiDoutorado); //Falsy
console.log(!!empregoFuturo); //Falsy
console.log(!!dinheiroNaConta); //Falsy

//Compare o total de habitantes do Brasil com o total de habitantes da China (valor em milhões):

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil possui um número maior de habitantes do que a China.");
} else if (brasil < china) {
  console.log("A China possui um número maior de habitantes do que o Brasil.");
} else {
  console.log(
    "O Brasil e a China possuem a mesma quantidade de habitantes em milhões."
  );
}
