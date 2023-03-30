import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import BasicTabs from './components/Tablist'
import TitlebarImageList from './components/ProjectCards';



function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <BasicTabs></BasicTabs>
     <TitlebarImageList></TitlebarImageList>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

