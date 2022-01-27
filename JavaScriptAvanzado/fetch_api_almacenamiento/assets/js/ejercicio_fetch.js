fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then( resp => resp.json()).then(data => {
        data.forEach(element => {
            let imagen = element.url;
            let titulo = element.title;
            let tarjeta = 
        });
        
});
