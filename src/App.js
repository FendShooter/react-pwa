import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Counter from './components/counter/Counter';
import FetchData from './components/service/FetchData';

function App() {
  return (
    <div className='App'>
      <Counter />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and saves to reload.
        </p>
        <a
          data-testid='myblock'
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Mango</li>
          <h1 data-testid='mytitle'>hello world</h1>
        </ul>
        <Form />
        <FetchData />
      </header>
    </div>
  );
}

export default App;
