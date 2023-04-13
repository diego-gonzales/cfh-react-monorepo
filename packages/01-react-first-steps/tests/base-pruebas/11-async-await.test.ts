import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba a 11-async-await', () => {
  test('getImage() should return an image url', async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });

  test('getImage() should return an string', async () => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });

  // test('getImage() should throw an error if the api_key is invalid', async () => {
  //   try {
  //     await getImagen();
  //   } catch (error) {
  //     expect(error).toBe('No existe la imagen');
  //   }
  // });
});
