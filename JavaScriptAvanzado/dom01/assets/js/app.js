let title = document.getElementById('title');
console.log(title);
title.textContent = 'Este texto está escrito desde JavaScript'
let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
parrafos[3].textContent = 'Párrafos escritos desde JavaScipt'; /* Cambia el párrafo 0, para cambiar todos los párrafos, se tiene que hacer con un for */
/*for(let i=0; i<parrafos.length; i++) {
    parrafos[i].textContent = 'Parrafo ' + i + 'escrito desde JavaScript';
}*/

let email =document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}