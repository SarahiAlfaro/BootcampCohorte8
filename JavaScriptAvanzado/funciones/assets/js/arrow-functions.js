/*  
    Arrow function
    Función de flecha
*/
/* function sumar(numero1, numero2) {
    //Operaciones o código a ejecutar
    return numero1 + numero2;
} */

const sumar = (numero1, numero2) => {
    return numero1+ numero2;
} //esta funcion es la misma que la de arriba

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
