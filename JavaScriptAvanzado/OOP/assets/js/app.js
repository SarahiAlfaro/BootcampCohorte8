//Clases, molde que nos permite crear objetos y que se pueden reutilizar para ir cambiando sus atributos
class Animal {
    //constructor es una función
    constructor(nombre, especie){
        // this hace referencia a una variable interna, al contexto en el que s e está utilizando
        this.nombre = nombre; 
        this.especie = especie;
    }

    //getters y setters, solo tienen el propósito de leer o modificar un atributo. Tiene que haber un get y un set por cada atributo
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie = especie;
    }

    //métodos == función
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`)
    }

    cambiarNombre (nuevoNombre) {
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy ${this.especie} <b>`
        return mensaje;
    }

    //Métodos estáticos, los métodos estáticos no se heredan, solo viven en la clase
    static saludar(){
        return console.log('Hola, soy un método estático');
    }
}

Animal.saludar();
//Cada unos de los tres objetos siguientes heredan los atributos y métodos de la clase que etsán utilizando
const Animal1 = new Animal('Scooby', 'Perro'); //creamos un objeto
console.log(Animal1);
const Animal2 = new Animal('Pecas', 'Gato'); //creamos un objeto
console.log(Animal2);
const Animal3 = new Animal(); //creamos un objeto
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

document.write(Animal1.cambiarNombre('Scrappy'));//aqui cambiamos el nombre de Animal1

//para mandar a llamar un getter o setter, se manda a llamar como si fueran atributos
console.log(Animal1.getNombre);
Animal1.setNombre('Oddie');
console.log(Animal1);

