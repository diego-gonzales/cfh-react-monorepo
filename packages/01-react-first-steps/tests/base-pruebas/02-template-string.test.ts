import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en archivo "02-template-string"', () => {
  test('getSaludo() debe de retornar un string', () => {
    const mensaje = getSaludo('Luis');
    expect(typeof mensaje).toBe('string');
  });

  test('getSaludo() debe retornar "Hola Diego"', () => {
    const name = 'Diego';
    const mensaje = getSaludo(name);
    expect(mensaje).toBe(`Hola ${name}`);
  });
});
