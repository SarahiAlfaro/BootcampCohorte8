/*
Los arreglos son una colección de elementos que cuentan con métoods o funciones
que nos permiten ordenar o manipular los datos almacenados en él.
*/

//forma 2
const arreglo2 = Array.of(1, "Hola", true);
console.log(arreglo2);

//forma 1
const arreglo1 = [4,'hola',true,[1,2,6],arreglo2];
console.log(arreglo1);

//forma 3
const arreglo3 = new Array(3,true,'Adiós');
console.log(arreglo3);

const frutas = ['manzanas', 'naranjas', 'uvas', 'sandias', [1,2,3,4,5,['A', 'B', 'C']]];
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]); //acceder al número 5, a una posición de un arrglo dentro de otro arreglo
console.log(frutas[4][5][1]);
frutas[4][5].push('D');
console.log(frutas);

/*MÉTODOS
length = longitud
push = añade un elemento al final de nuestro arreglo
pop = elimina el último elemento de nuestro arreglo
unshift = agrega un elemnto al principio de nuestro arreglo
shift = elimina el primer elemento de nuestro arreglo
*/
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);
letras.push('E');
console.log(letras);
letras.pop();
console.log(letras);
letras.unshift(1);
console.log(letras);
letras.shift();
console.log(letras);

