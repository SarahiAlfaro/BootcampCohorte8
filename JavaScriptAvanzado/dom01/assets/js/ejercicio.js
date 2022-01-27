let title = document.getElementById('title');
function changeName() {
    let name = (prompt('Ingresa tu nombre'));
    title.textContent = 'Hola ' + name + '.'
}

