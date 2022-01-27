let numeros = new Array();
numeros = [150, 27, 45, 1, 10, 500, 3, 38, 12, 123, 4, 17, 39, 620, 8, 70, 23, 2, 9, 5];
let suma = 0;
numeros.forEach (numero => {
    suma = suma + numero;
});
document.write('La suma de los valores del arreglo es: ' + suma );

let promedio = suma/numeros.length;
document.write('<br> El promedio es : ' +promedio);