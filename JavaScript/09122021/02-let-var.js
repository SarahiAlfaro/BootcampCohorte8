/*
var se utilizaba anteriormente, son variable globales.
let es una variable de contexto (local), está delimitada en un bloque de código.
*/

var numero = 40;
console.log(numero);
if (true) {
    var numero = 50;
    console.log(numero);
}
console.log(numero);

var texto = "Bootcamp Java";
console.log(texto);
if (true) {
    let texto = "Cohorte 8";
    console.log(texto);
}
console.log(texto);