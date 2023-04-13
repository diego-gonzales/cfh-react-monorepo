import { useContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en archivo 06-deses-obj', () => {
  test('useContext() should return an object', () => {
    // Arrange
    const userTest = {
      nombreClave: 'R2D2',
      anios: 33,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    // Act
    const user = useContext({
      clave: 'R2D2',
      edad: 33,
      nombre: 'R2D2',
    } as any);

    // Assert
    expect(user).toEqual(userTest);
  })
})