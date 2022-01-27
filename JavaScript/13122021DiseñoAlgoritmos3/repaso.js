comidas["Pozole", "Quesadillas", "Tacos"];




comidas.forEach(function(el) {
    console.log(el);
});

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach( function(el){
    let suma = el + 1;
    console.log(suma);
})

console.log(numeros);

/*ejercicio */
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);