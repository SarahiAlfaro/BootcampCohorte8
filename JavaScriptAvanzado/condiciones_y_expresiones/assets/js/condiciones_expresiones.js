/* Operadores aritméticos +-/*%() */
let operacion = 3* 5 + (10-5);
console.log(operacion);

let operacion2 = 3-5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales <, >, <=, >=, ==, ===, !=, !==, boolean */
console.log(7<7); //no estamos incluyendo el número a comparar 
console.log(7<=7);// se incluye el número a comparar
console.log(7=='7'); //compara el valor
console.log(7==='7'); //compara el valor y tipo de dato

console.log(7!='7'); 
console.log(7!=='7');

/* Incremento y decremento +=, -=, *=, /= */
let incremento = 5;
incremento += 5; //wincremento = incremento +5
console.log(incremento);//10

incremento -= 5;
console.log(incremento);//5

incremento *= 5;
console.log(incremento);//25

incremento /= 5;
console.log(incremento); //5

/* Operador unario ++, -- */
let sumar = 0;
sumar++;
console.log(sumar);//1

let restar = 5;
restar--;
console.log(restar);//4
//++variable zpreincremento
//variable++ postdecremento