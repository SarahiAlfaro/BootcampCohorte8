let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto'; //agrga el id desde js
//$texto.style = 'color: red; font-size: 24px'; //cambia color y tamaño de fuente desde js
$texto.className = 'bg-purple h3';//se agregaron dos clases, bg-purple y h3. reemplaza todo y borra las clses anteriores
$texto.classList.add('text-center');// añade una nueva clase sin eliminar las anteriores
$texto.classList.remove('bg-purple')//elimina la clase bg-purple