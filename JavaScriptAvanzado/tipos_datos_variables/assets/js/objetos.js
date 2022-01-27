//un objeto es una colección de datos agrupados
let persona = {
    nombre: {
        apellidoPaterno: 'Alfaro',
        apellidoMaterno: 'Delgado',
        nombre: 'Sarahi'
    },
    edad : 29,
    direccion: {
        ciudad: 'Chimalhuacán',
        estado: 'México'
    },
    numero: [
        1234567890,
        10987654321,
    ]
};

console.log(persona.nombre);
console.log(persona.numero[1]);

let prenda = {
    descripcion: 'blusa manga larga',
    color: 'rojo',
    talla: 'unitalla',
    precio: 249,
}

let triplay = {
    material: ['nogal', 'encino', 'maple', 'pino'],
    medidas: {
        grosormm: [
            4.5, 
            6, 
            9, 
            12
        ],
        anchomm: 1220,
        altomm: 2440
    }

};

console.log(triplay.medidas.grosormm[0])