/*
operadores aritméticos nos sirven para hacer operaciones
+ Sirve para sumar o concatenar 
- Sirve para restar numeros
* Sirve para multiplicar numeros
/ Sirve para dividir numeros
% sirve para obtener el residuo de una división
*/
const numero1 = parseInt(prompt("Ingresa el numero 1")); // parseInt convierte de cadena a numero
const numero2 = parseInt(prompt("Ingresa el número 2"));
//todo lo que se reciba en un prompt es una cadena, por lo que en el caso de la suma lo que hace es concatenar
//en el caso de los demas operadores, al no poder hacer una operacion de cadenas lo convierte en numero
const suma = numero1 + numero2;
const resta = numero1 -numero2;
const multiplicacion = numero1 * numero2;
const division = numero1/numero2; 
console.log("Número 1: " + numero1);
console.log("Número 2: " +numero2);
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log(numero1%numero2);

/*
operadores lógicos
&& AND y
|| OR o
! NOT 
*/