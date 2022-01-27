/* flujo orden en que se ejecutan las declaraciones */
let miVariable = 10;
console.log(miVariable);

/* ESTRUCTURAS DE CONTROL DE FLUJO */
let edad = 17;
let tienesINE = true;
if(edad>=18 || tienesINE==true){
    console.log('Puedes entrar')
} else {
    console.log('No puedes entrar');
}

/* OPERADOR TERNARIO */
/*
(condición a evaluar)
? se ejecuta si es verdadero 
: se ejecuta si es falso 
*/
let edad1 =20;
/*(edad1 >= 18) 
    ? console.log('Mayor de edad') 
    : console.log('Menor de edad'); */

/*let pregunta = (edad1 >= 18) 
    ? 'Mayor de edad' 
    : 'Menor de edad';

console.log(pregunta); */

let preguntaEdad = `Tengo ${edad1} años y soy ${edad1 >= 18 ? 'Mayor' : 'Menor'} de edad`;
console.log(preguntaEdad);

/*

*/
let dia = 5;
/*
if(dia ===0) {
    console.log('Domingo');
} else if (dia === 1);
    console.log('Lunes');
} else if (dia === 2);
    console.log('Martes');
} else if (dia === 3);
    console.log('Miercoles');
} else if (dia === 4);
    console.log('Jueves');
} else if (dia === 5);
    console.log('Viernes');
} else if (dia === 6);
    console.log('Sabado');
} else {
    console.log('Ese no es un día');
}*/

//switch - case
/*
switch(variable a evaluar){
    case valor:
        -código a ejecutar-
    break;
    case valor: 
        -código a evaluar-
    break;
    default:
        -código a ejecuatar si sale de las opciones-
}
*/

switch(dia) {
    case 0: 
        console.log('Domingo');
        break;
    case 1: 
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    case 3: 
        console.log('Miércoles');
        break;
    case 4: 
        console.log('Jueves');
    break;
    case 5: 
        console.log('Viernes');
        break;
    case 6: 
        console.log('Sábado');
        break;
    default:
        console.log('Ese día no existe');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch (cuponDescuento) {
    case 'Bronze':
        descuento = 5;
        break;
    case 'Plata':
        descuento = 10;
        break;
    case 'Oro':
        descuento = 15;
        break;
    default:
        console.log('Cupón erróneo');
        break;
}

console.log(descuento);