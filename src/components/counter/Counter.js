import React, { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);
  // useEffect(() => {
  //   setValue(parseInt(value) + parseInt(counter));
  // }, []);
  return (
    <div>
      <h1>The Counter</h1>

      <div className='form__group'>
        <h2 data-testid='counterValue'>{counter}</h2>
        <div className='control'>
          <button
            className='sub-btn'
            data-testid='sub-btn'
            onClick={() =>
              setCounter(
                value === 1 ? counter - 1 : parseInt(counter) - parseInt(value)
              )
            }
          >
            {' '}
            -{' '}
          </button>
          <label htmlFor='email'>email</label>
          <input
            id='email'
            type='number'
            name='email'
            data-testid='email'
            className='form_control'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className='add-btn'
            onClick={() =>
              setCounter(
                value === 1 ? counter + 1 : parseInt(value) + parseInt(counter)
              )
            }
          >
            {' '}
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
