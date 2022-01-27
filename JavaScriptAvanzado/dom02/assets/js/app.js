/*let titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde JS';*/  //Se accede al elemnto del DOM con getElementById

let $titulo = document.querySelector('#titulo'); // Es una forma moderna de acceder al elemento del DOM, querySelector aplica para #id, .clase o etiqueta. Nos devuelve el primer elemento que encuentra en el DOM
$titulo.textContent = 'Título escrito desde JS';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');//devuelve una arreglo
console.log($parrafos[1].textContent);

/* Crear elementos en el DOM */
let subtitulo = document.createElement('h3');
subtitulo.textContent  = 'Este es un subtítulo desde JS';
//document.body.append(subtitulo); //agrega el subtitulo en el body del html, append inserta un nodo al final
console.log(subtitulo.innerHTML);

$titulo.insertAdjacentElement("afterend",subtitulo);// coloca el subtitulo al final de donde se encuentra el id titulo, trabaja al nivel de hermanos

let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent); //textContent devuelve solo el texto que hay dentro 
//console.log($contenido.innerHTML);//innerHTML devuelve todo lo que haty dentro, además permite agregar etiquetas html, inner modifica lo que está dentro
//console.log($contenido.outerHTML = 'Hola'); // modifica el contenido lo que viene desde el nodo, en este caso elimina desde el div ya que en este está definido el id
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo párrafo';
$contenido.appendChild(contenidoParrafo);// se inserta como hijo del padre contenido

/* Eliminar elementos desde JS */
$titulo.remove();//elimina el titulo
