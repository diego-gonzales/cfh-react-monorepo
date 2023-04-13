import React from 'react';
import { render } from '@testing-library/react';
import { FirstApp } from '../../src/components/FirstApp';

describe('Pruebas en FirstApp component', () => {
  // test('should match with snapshot', () => {
  //   const { container } = render(
  //     <FirstApp name="Diegos" subtitle="Subtitle" title="Title" />
  //   );

  //   // toMatchSnapshot() is a Jest function that compares the snapshot with the current render, it is a fast way to check if the component is rendering correctly
  //   expect(container).toMatchSnapshot();
  // });

  test('should find the title sended by props', () => {
    const title = 'Test title';
    const { getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
  });

  // Es mejor no hacer pruebas buscando tags, ya que nuestra prueba no sería flexible
  test('should show the title sended by props in an h1 tag', () => {
    const title = 'Test title';
    const { container } = render(<FirstApp title={title} />);

    const h1 = container.querySelector('h1');

    // expect(h1?.innerHTML).toBe(title); // Es más estricto que el siguiente (evalua espacios en blanco, etc.)
    expect(h1?.innerHTML).toContain(title); // Es más flexible
  });

  test('should find the title by testId data atributte', () => {
    const title = 'Test title';
    const { getByTestId } = render(<FirstApp title={title} />);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should find the subtitle sended by props', () => {
    const title = 'Test title';
    const subtitle = 'Test subtitle';
    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
