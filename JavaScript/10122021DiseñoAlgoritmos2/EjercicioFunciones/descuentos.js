/*const compra = parseInt(prompt('Ingresa el precio de tu compra'));
var descuento = 0;
var toTal=0;

 function total (compra,descuento){
    toTal = compra-descuento;
    return toTal;
}

if(compra < 100) {
    descuento = compra * 0.10;
    total(compra,descuento);
    document.write('El total de tu compra con descuento es ' + toTal);
} else if (compra >=100 && compra < 200) {
    descuento = compra * 0.20;
    total(compra,descuento);
    document.write('El total de tu compra con descuento es ' + toTal);
} else if (compra >= 200) {
    descuento = compra * 0.30;
    total(compra,descuento);
    document.write('El total de tu compra con descuento es ' + toTal);
}  
*/

//Solucién en equipo
const compra = parseFloat(prompt('Ingresa el precio de tu compra'));
var descuento = 0;
var total = 0;

function totalDeCompra(compra, descuento){
    total = compra - descuento;
    return total;
}

if(compra < 100) {
    descuento = compra * 0.10;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
} else if (compra > 100 && compra < 200) {
    descuento = compra * 0.20;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
} else {
    descuento = compra * 0.30;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
}
