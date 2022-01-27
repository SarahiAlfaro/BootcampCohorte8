/* 
Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
let resultado = [];

numeros.forEach(function(el){
    let multiplicacion = el * 2;
    return resultado.push(multiplicacion);
})

for(let i=0; i<resultado.length; i++){
    console.log(resultado[i]);
}
