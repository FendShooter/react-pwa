import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [invalid, setInvalid] = useState('');
  const handlSubmit = (e) => {
    e.preventDefault();
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!username || !password) {
      setError(true);
    } else if (password.length < 5) {
      setInvalid('The pass you entered should contain 5 or more characters');
    } else if (!username.match(emailPattern)) {
      setInvalid('do not match');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        setUser(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className='container'>
      <h1>{user.name}</h1>
      <form onSubmit={handlSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          // data-testid='username'
          id='email'
          name='email'
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            id='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            name='confirm'
            id='confirmPassword'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div data-testid='showError'>
          {error ? (
            <span data-testid='first' style={{ color: 'red' }}>
              required field
            </span>
          ) : (
            ''
          )}
          {invalid ? (
            <span data-testid='second' style={{ color: 'red' }}>
              {invalid}
            </span>
          ) : (
            ''
          )}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
