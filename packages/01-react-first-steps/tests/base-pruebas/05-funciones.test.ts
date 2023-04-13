import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';
describe('Pruebas en "05-functions"', () => {

  test('getUser() should return an object', () => {
    // Arrange
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    // Act
    const user = getUser();

    // Assert
    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo() should return an object', () => {
    // Arrange
    const name = 'Luis';
    const userTest = {
      uid: 'ABC567',
      username: name,
    };

    // Act
    const user = getUsuarioActivo(name);

    // Assert
    expect(user).toStrictEqual(userTest);
  })
});
