import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';
import App from './App';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: 'John' },
    }),
  },
}));

// test('password input should render empty', () => {
//   render(<Form />);
//   const usernameInput = screen.getByRole('textbox');
//   const pwdInputElm = screen.getByLabelText('Password');
//   const confirmPwdInputElm = screen.getByLabelText(/confirm password/i);
//   expect(usernameInput.value).toBe('');
//   expect(pwdInputElm.value).toBe('');
//   expect(confirmPwdInputElm.value).toBe('');
// });
beforeEach(() => render(<Form />));
const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const passwordInput = screen.getByLabelText('Password');
  const CpasswordInput = screen.getByLabelText('Confirm Password');

  if (email) {
    userEvent.type(emailInput, email);
  }
  if (password) {
    userEvent.type(passwordInput, password);
  }
  if (confirmPassword) {
    userEvent.type(CpasswordInput, confirmPassword);
  }
  return { emailInput, passwordInput, CpasswordInput };
};

const clickOnSubmitButton = () => {
  const btn = screen.getByRole('button', {
    name: /login/i,
  });
  userEvent.click(btn);
};
test('should be able to type an email', () => {
  // const emailInput = screen.getByLabelText(/email/i);
  // const emailInput = screen.getByRole('textbox', {
  //   name: /email/i,
  // });
  // userEvent.type(emailInput, emailValue);
  const emailValue = 'gild@hail.com';
  const { emailInput } = typeIntoForm({ email: emailValue });
  expect(emailInput.value).toBe(emailValue);
});

test('should be able to type a password', () => {
  // render(<Form />);
  // const passwordInput = screen.getByLabelText('Password');

  const pwdValue = 'hello';
  const { passwordInput } = typeIntoForm({ password: pwdValue });
  expect(passwordInput.value).toBe(pwdValue);
});
test('should be able to type a confirm  password', () => {
  // render(<Form />);
  // userEvent.type(CpasswordInput, pwdValue);
  // userEvent.type(passwordInput, pwdValue);
  // const passwordInput = screen.getByLabelText('Password');
  // const CpasswordInput = screen.getByLabelText('Confirm Password');

  const password = 'hello';
  const { passwordInput, CpasswordInput } = typeIntoForm({
    password,
    confirmPassword: password,
  });

  expect(passwordInput.value).toBe(password);
  expect(CpasswordInput.value).toBe(password);
  expect(passwordInput.value).toBe(CpasswordInput.value);
});

test('should not render invalid field message', () => {
  // render(<Form />);
  const errorMsgtag = screen.getByTestId('showError');
  expect(errorMsgtag).toBeEmptyDOMElement();
});

test('should render invalid field message', () => {
  // render(<App />);
  const passwordInput = screen.getByLabelText('Password');

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  userEvent.type(emailInput, 'sss@d');
  userEvent.type(passwordInput, 'sss.com');
  clickOnSubmitButton();
  const second = screen.queryByTestId('second');
  expect(second).toBeInTheDocument();
  // const btn = screen.getByRole('button', {
  //   name: /login/i,
  // });
  // userEvent.click(btn);
});

test('should render password error when email input is correct and not password', () => {
  // render(<App />);
  // const btn = screen.getByRole('button', {
  //   name: /Login/i,
  // });
  const emailValue = 'email@gmail.com';
  const passwordValue = 'pass';
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const passwordInput = screen.getByLabelText('Password');

  userEvent.type(emailInput, emailValue);
  userEvent.type(passwordInput, passwordValue);
  // userEvent.click(btn);
  clickOnSubmitButton();
  const error = screen.getByText(
    'The pass you entered should contain 5 or more characters'
  );

  expect(emailInput.value).toBe(emailValue);
  expect(passwordInput.value.length).toBeLessThanOrEqual(5);
  expect(error).toBeInTheDocument();
});

test('should not show any error message when inputs are valid', () => {
  // render(<App />);
  const emailValue = 'email@gmail.com';
  const passwordValue = 'password';
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const btn = screen.getByRole('button', {
    name: /Login/i,
  });
  const passwordInput = screen.getByLabelText('Password');

  userEvent.type(emailInput, emailValue);
  userEvent.type(passwordInput, passwordValue);
  userEvent.click(btn);
  const first = screen.queryByTestId('first');
  const second = screen.queryByTestId('second');

  expect(emailInput.value).toBe(emailValue);
  expect(passwordInput.value.length).toBeGreaterThanOrEqual(5);
  expect(first).not.toBeInTheDocument();
  expect(second).not.toBeInTheDocument();
});

describe('something new', () => {
  test('should render', () => {
    expect(1).toBe(1);
  });
});

// test('username input should be rendered', () => {
//   const username = screen.getByTestId('username');
//   expect(username).toBeInTheDocument();
// });
// test('password input should be rendered', () => {
//   render(<Form />);
//   const password = screen.getByTestId('password');
//   expect(password).toBeInTheDocument();
// });
// test('login button should be rendered', () => {
//   render(<Form />);
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

// test('username input value to be empty', () => {
//   render(<Form />);
//   const username = screen.getByTestId('username');
//   expect(username.value).toBe('');
// });
// test('get username input', () => {
//   render(<Form />);
//   const username = screen.getByTestId('username');
//   const testValue = 'test';
//   fireEvent.change(username, { target: { value: testValue } });
//   expect(username.value).toBe(testValue);
// });
