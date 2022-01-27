let $btnPerro = document.querySelector('#btnPerro');
/* $btnPerro.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search').then( resp => resp.json()).then(data => {
        console.log(data);
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;
        document.body.appendChild(imagenGatito);
    });
}); */ //En el vcaso de la api d elos gatos, regresa una arreglo

$btnPerro.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random').then( resp => resp.json()).then(data => {
        console.log(data);
        let imagenPerrito = document.createElement('img');
        imagenPerrito.src = data.message;
        document.body.appendChild(imagenPerrito);
    });
}); //en la api de los perros regresa un objeto