import React from 'react';
import logo from './logo.svg';
import Drinks from './components/drinks'
import beer from './beer.png';
import Array from './components/array'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={beer} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
      <Drinks/>
      <hr/>
     <Array/>
    </div>
  );
}

export default App;
