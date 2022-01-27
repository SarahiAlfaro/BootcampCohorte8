let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

//imprimir cada uno de los elementos con la funcion forEach
numeros.forEach(function (numero) {
    document.write(numero + ', ');
});

/*numeros.forEach( numero => {
    document.write(numero + ', ');
});*/ //esto es lo mismo que arriba

let numeros2 = numeros.map(function(numero){
    return numero;
}); //map, crea un nuevo arreglo. Si escribimos numeros2=numeros esta opción hace que apunten al mismo lugar y si algun se modifica, se ve el cambio en los dos ya que apuntan al mismo espacio.
document.write('<br>' + numeros2);

let numeros3 = numeros.map(function(numero){
    return numero * 2;
}); // este map crea un arreglo multiplicando los valores por 2
document.write('<br>' +numeros3);

/* Includes */
document.write('<br>' + numeros.includes(328) + '<br>');

/* Filter */
let numerosPares = numeros.filter((numero) => {
    /*if(numero % 2 == 0){
        return true;
    } else {
        return false;
    }*/
    return numero % 2 == 0  //esta línea es lo mismo que la condicion de arriba
});
document.write ('<br>' + numerosPares + '<br>');

let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Manzana', 'Aguacate', 'Sandia'];
let frutasFiltro = frutas.filter((fruta) => {
    /*if(fruta.includes('i')) {
        return true;
    };*/
    return fruta.toLocaleLowerCase().includes('m');
});
document.write('<br>' + frutasFiltro + '<br>');

/* Sort ordena los elementos */
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7];
document.write('<br>' + otrosNumeros.sort() + '<br>');

/* Reverse invierte el orden de los elementos de un arreglo (modofica el arreglo, mutación) */
document.write('<br>' + otrosNumeros.reverse() + '<br>')
 /* find es parecido al filter con la diferencia que éste solo devuelve un elemento, el primero que encuentra */
 let frutaEncontrada = frutas.find((elemento) => {
     return elemento.toLocaleLowerCase().includes ('ma');
 });
 document.write('<br>' +frutaEncontrada + '<br>');