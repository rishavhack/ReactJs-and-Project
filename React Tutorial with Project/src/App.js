import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name='MAx' age="22"></Person> 
        <Person name='Vinesh' age="24"></Person> 
        <Person name='Diwakar' age="17"/>
      </div>
    );
   /// return React.createElement('div',{className:'App'},React.createElement('h1',null,'My name is Rishav'))
  }
}

export default App;
