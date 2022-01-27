
function calcularEdad() {
    let aactual = parseInt(prompt('Ingresa el año actual'));
    let anacimiento = parseInt(prompt('Ingresa tu año de nacimiento'));
    let edad = (aactual-anacimiento);
    alert('Tu edad es: ' + edad + ' años');
    
}
