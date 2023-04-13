import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('retornaArreglo() should return an string and number', () => {
    const [letters, numbers] = retornaArreglo();

    // First way
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    // Second way
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
