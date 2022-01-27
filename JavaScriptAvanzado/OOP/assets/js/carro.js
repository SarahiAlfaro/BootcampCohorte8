class Carro {
    constructor(marca, color, modelo, velocidad, noPuertas) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.noPuertas = noPuertas;
        this.velocidad = velocidad;
    }

    //métodos
    acelerar(){
        this.velocidad += 1;
    }
    frenar(){
        this.velocidad = 0;
    }
    reversa(){
        this.velocidad -= 1;
    }

    toString(){
        document.write(`El carro es ${this.marca} de color ${this.color}, el modelo es ${this.modelo} con ${this.noPuertas} puertas y con velocidad ${this.velocidad} km <br>`)
        
    }
}

const miCarro = new Carro ('Nissan', 'Rojo', 'Sentra', 20, 4);
miCarro.toString();
miCarro.acelerar();
miCarro.acelerar();
miCarro.acelerar();
miCarro.toString();
miCarro.frenar();
miCarro.toString();
miCarro.acelerar();
miCarro.toString();
