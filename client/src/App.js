import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players/Players';

function App() {
  return (
    <div className="App">
      <div className="App-bg"></div>
      <header className="App-header">
          <Players />
      </header>
    </div>
  );
}

export default App;
