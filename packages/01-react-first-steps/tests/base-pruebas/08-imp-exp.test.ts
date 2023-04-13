import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById() should return a hero object', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test('getHeroeById() should return undefined if a hero does not exist', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy(); // null, undefined, '', 0, false
  });

  test('getHeroesByOwner() should return an array with the DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
  });

  test('getHeroesByOwner() should return an array with the Marvel heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    const heroesFilter = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroesFilter);
  });
});
