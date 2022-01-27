class Pokemon {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //métodos
    atacar() {
        return console.log(`${this.nombre} está atacando`)
    }
}

class Pikachu extends Pokemon {
    constructor (nombre, tipo, edad){
        super(nombre, tipo)  // la palabra super hace referencia al constructor mas primitivo, en este caso al de Pokemon
        this.edad = edad;
        
    }

    //métodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`)
    }
}

class Electrico extends Pikachu {
    constructor(nombre, tipo, edad, color)
    {
        super(nombre, tipo, edad);
        this.color = color;
    }
}

const Pikachu1 = new Pikachu('Juan', 'Electrico', 3);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego');
Pokemon1.atacar();
//Pokemon1.evolucionar(); -----    esta line maraca errro porque no existe el métood evolucionar en la clase Pokemon

const Electrico1 = new Electrico('Pnachito', 'Electrico', 4, 'Gris');
console.log(Electrico1);