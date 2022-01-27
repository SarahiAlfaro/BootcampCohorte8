class Animalito {
    constructor (nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie =especie;
        this.revisado = revisado;
        this.enfermo = false;
        

    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario {
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente (paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente) {
        if(paciente.revisado === false) {
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            document.write(`El paciente ${paciente.nombre} ha sido revisado`)
        } else {
            document.write('Este paciente ya fue revisado');
        }
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(`${this.listaPacientes[i].nombre} <br>`);
        }
        document.write(`Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados}`);
    }
}

//objetos creados de la clase Animalito
const Animalito1 = new Animalito ('Manchas', 5, 'Perro', false); // objeto1
const Animalito2 = new Animalito ('Galleta', 2, 'Gato', true); //objeto2
console.log(Animalito);
Animalito1.saludar();

const VeterinarioPanchito = new Veterinario();

VeterinarioPanchito.agregarPaciente(Animalito1);
VeterinarioPanchito.agregarPaciente(Animalito2);

console.log(VeterinarioPanchito.listaPacientes);

VeterinarioPanchito.mostrarLista();
VeterinarioPanchito.revisarPaciente(Animalito1);
VeterinarioPanchito.mostrarLista();



//operador de cortocircuito