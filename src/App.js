import logo from './logo.svg';
import './App.css';
import {createContext,useState} from 'react';
function App() {
  const HomeContext = createContext()
  return (
    <div className="App">
      <h1>Use Context API</h1>
      <div className='Hello'>
        <p>
          devilal 01
        </p>
        <p>
          devilal 02
        </p>
      </div>
      <div className='Hello'>
        <p>
          devilal A
        </p>
        <p>
          devilal B
        </p>
      </div>
    </div>
  );
}

export default App;
