import React from 'react';
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/components/FirstApp';

// working with 'screen' function from '@testing-library/react'

describe('Pruebas en FirstApp component', () => {
  const title = 'Test title';
  const subtitle = 'Test subtitle';

  test('should find the title sended by props', () => {
    render(<FirstApp title={title} />);
    // screen.debug();

    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title sended by props in an h1 tag', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('should find the title by testId data atributte', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should find the subtitle sended by props', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
