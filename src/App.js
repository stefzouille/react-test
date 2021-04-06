import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type="button" onClick={() => alert("Hello")}>
            <div/>
            <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
     
    </button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test button 
        </p>
        <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
