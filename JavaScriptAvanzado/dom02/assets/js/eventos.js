let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError =document.querySelector('span');

/* addEventListener agrega un evento  */
$btnMensaje.addEventListener('click', () => {
    console.log('No me presiones');
});

$mensaje.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    if (e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    };
    //console.log(e);//nos proporciona información del evento, convencionalmente se ocupa la e
    //console.log('Escribiste algo');
}); // llama a una función anónima

/*$mensaje.addEventListener('keydown', mostrarConsole); // llama a una función no anónima, si se colocan los paréntesis se invoca  a la función y se ejecuta incluso sin presionar una tecla
function mostrarConsole() {
    console.log('Escribiste algo');
};*/
