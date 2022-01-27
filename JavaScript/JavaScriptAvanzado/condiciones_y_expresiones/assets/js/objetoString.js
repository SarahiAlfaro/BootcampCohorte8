let cadena1 ='Hola';
console.log(cadena1);

let cadena2 = new String('Adiós');//Objeto String
console.log(cadena2);

console.log(cadena2.toLocaleLowerCase().includes("a"));//toLowerCaseconvierte e a minúsculas

//cohersión y conversión

//cohersión - JavasScript convierte en automático un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());

/* Función que recibe una palabra y la regrea invertida */
let palabra = 'Hola Mundo';
let arreglo = palabra.split(''); //split convierte una cadena en un arreglo
console.log(arreglo);
console.log(arreglo.reverse().join(''));
console.log(arreglo)


function invertirPalabra(cadena) {
    let arreglo = cadena.split('');//convirtiendo la cadena en un arreglo
    arreglo.reverse();//invirtiendo el arreglo
    let cadenaInvertida = arreglo.join('');//une los elementos d eun arreglo y regresa un string
    return console.log(cadenaInvertida);
}
invertirPalabra("Generation");