import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
import heroes from '../../src/data/heroes';

describe('Prueba en 09-promesas', () => {
  // With done() we can test async functions
  test('getHeroeByIdAsync() should return a hero', (done) => {
    const id = 1;
    const heroTest = heroes.find((h) => h.id === 1);

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroTest);
      done();
    });
  });

  test('getHeroeByIdAsync() should return an error if hero does not exist', (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });

  // With async/await we can test async functions
  test('getHeroeByIdAsync() should return a hero with async/await', async () => {
    const id = 1;
    const heroTest = heroes.find((h) => h.id === 1);

    const hero = await getHeroeByIdAsync(id);
    expect(hero).toBe(heroTest);
  });
});
