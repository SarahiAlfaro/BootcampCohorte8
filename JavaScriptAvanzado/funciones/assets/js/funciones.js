/* Funcion
    Es un bloque de código reutilizable.
    Puede tener o no árámetros de entrada.
    Puede devolver o no un valor.
*/

function sumar(numero1, numero2) {
    //Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la función'); //esta línea nunca se ejecuta pporque la función termina en el return
}

function restar(numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`);
}

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);//las comillas invertidas ` permite mezclar string, js y html
restar(numero1, numero2);