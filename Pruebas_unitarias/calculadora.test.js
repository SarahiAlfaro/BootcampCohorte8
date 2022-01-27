const {sumar} = requiere('./calculadora');

describe('Pruebas en el componente calculadora' () => {
    test('Pruebas en la función sumar', () => {
        expect(sumar(3,5)).toBe(8);
    });
});