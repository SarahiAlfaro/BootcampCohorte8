/*
Ciclos - Bucles - Loops
while
di while
for
*/

/*
While
let condicion = 1; - valor inicial
while(condicion){
    código
    modificación a nuestro valor inicial
}
*/

//imprimir todos los números del 1 - 10
let condicion = 1;
while(condicion <= 10){
    console.log(condicion);
    condicion = condicion + 1;
}

/* let numero = 1; //1
numero ++; //2 numero = numero + 1
numero ++; //3
numero ++; //4
numero --; //3
numero --; //2
numero --; //1
console.log(numero); */


/*
Do while
*/

let numero = 1;
do {
    console.log(numero);
    numero ++;
} while (numero <=10);

/*
For    utiliza un contador
*/

for (let control = 1; control <= 10; control++) {
    console.log(control);
}

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];
for (let i=0; i<comidas.length; i++) {
        console.log(comidas[i]);
}