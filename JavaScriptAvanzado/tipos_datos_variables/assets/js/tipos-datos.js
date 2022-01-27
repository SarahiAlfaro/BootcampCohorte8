let nombre = 'Sarahi Alfaro';
let edad = '29';
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); //string
console.log(typeof(edad)); //number
console.log(typeof(tienesTrabajo)); //Boolean
console.log(typeof(variableNull));
console.log(typeof(variableUndefined));
/* para comparar tipos de datos se usa ===(operador estricto), esto compara tipo de datos y no solo valores */

console.log(variableNull === variableUndefined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10 + 10)); //number
console.log(typeof('10' + true)); //string
console.log(parseInt('12')); //convierte string a numero

let numero = 10;
console.log(numero.toString()); /* convierte un número a string */