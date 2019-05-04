import React from 'react';
import logo from './logo.svg';
import UserModule from './UserModule';
import LoginModule from './LoginModule';
import './App.css';

export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserModule />
        <LoginModule />
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