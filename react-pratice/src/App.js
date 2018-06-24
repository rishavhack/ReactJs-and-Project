import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Random from './random/Random';

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
        <Person/>
        <Person/>
        <Random name="Rishav" age ="24">Beat Computer</Random>
        <Random name="srivastava" age="18"/>
      </div>
    );
   // return React.createElement('div',null,'hi','bye');
   // return React.createElement('div',null,React.createElement('h1',{className:'App'},'My name is Hero'));
  }
}

export default App;
