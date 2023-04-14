import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../../src/components/Counter';

describe('Prueba en Counter component', () => {
  const initialValue = 100;

  test('should match with snapshot', () => {
    const { container } = render(<Counter value={100} />);

    expect(container).toMatchSnapshot();
  });

  test('should show the value passed as prop', () => {
    render(<Counter value={initialValue} />);

    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test('should increment the counter with button +', () => {
    render(<Counter value={initialValue} />);
    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('should decrement the counter with button -', () => {
    render(<Counter value={initialValue} />);
    fireEvent.click(screen.getByText('-'));
    // screen.debug();
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test('should reset the counter with button reset', () => {
    render(<Counter value={initialValue} />);
    // Otra forma de traer un elemento button por su nombre
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-substract' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    // screen.debug();
    expect(screen.getByTestId('test-counter').innerHTML).toContain(
      initialValue.toString()
    );
  });
});
