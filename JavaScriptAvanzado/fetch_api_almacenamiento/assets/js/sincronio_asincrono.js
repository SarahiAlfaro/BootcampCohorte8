/* Código Sincrono */
let variableSincrona;
variableSincrona = 10*3;
console.log(variableSincrona);

/* Código Asíncrono */
let variableAsincrona;
setTimeout(() => {
    variableAsincrona = 10*3;
    console.log(variableAsincrona);
}, 2000);
console.log(variableAsincrona);