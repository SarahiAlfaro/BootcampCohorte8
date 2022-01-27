/*
Las funciones nos sirven para escribir bloques de código 
que se pueden reutilizar
Estructura:palabra reservada, seguida del nombre de la función,
seguido de paréntesis y luego llaves

    function sumar(){}
*/
/* function sumar() {
    let numero1 = 10;
    let numero2 = 20;
    let suma = numero1 + numero2;
    document.write(suma);
} */
function sumar (numero1, numero2) {
    let suma = numero1 + numero2;
    document.write("<h1>" + suma + "</h1>");
}

sumar(12, 12); //aquí llamo a la función sumar
sumar(55, 72);
sumar(192, 40);