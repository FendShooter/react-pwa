import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('testing counter', () => {
  beforeEach(() => render(<Counter />));
  test('input value shoud be counter value + 1', () => {
    // render(<App />);
    const counterValue = screen.queryByTestId('counterValue');
    const inputEl = screen.getByLabelText('email');
    expect(inputEl.value).toBe('1');
    expect(counterValue.textContent).toBe('0');
  });

  test('increase', () => {
    // render(<App />);
    const counterValue = screen.queryByTestId('counterValue');
    const btn = screen.getByText('+');
    userEvent.click(btn);
    userEvent.click(btn);
    // screen.debug();
    expect(counterValue.textContent).toBe('2');
    // screen.getByRole('');
  });
  test('decrease', () => {
    const counterValue = screen.queryByTestId('counterValue');
    const btn = screen.getByText(/-/);
    const addBtn = screen.getByText('+');
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    userEvent.click(btn);
    // screen.debug();
    expect(counterValue.textContent).toBe('1');
    // screen.getByRole('');
  });
});

describe('should change input', () => {
  beforeEach(() => render(<Counter />));

  test('something', () => {
    const inputEl = screen.getByLabelText('email');
    const counterValue = screen.getByTestId('counterValue');
    const addBtn = screen.getByText('+');
    userEvent.click(addBtn);
    fireEvent.change(inputEl, { target: { value: '10' } });
    userEvent.click(addBtn);
    expect(counterValue.textContent).toBe('11');
  });
});

const returnError = () => {
  throw new Error('new error');
};

describe('exceptions', () => {
  test('throw error', () => {
    expect(() => returnError()).toThrow(Error);
  });
});
