import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  person:[
    {name : 'Max',age :28},
    {name : 'Gopal',age :23},
    {name : 'Anish',age :25}
  ]
}

switchNameHandler = () =>{
  console.log('Clicked');
}

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
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name='Max' age="22"></Person> 
        <Person name='Vinesh' age="24">My Hobbies : Racing</Person> 
        <Person name='Diwakar' age="17"/>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person> 
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies : Racing</Person> 
        <Person name={this.state.person[2].name} age={this.state.person[2].sge}/>

      </div>
    );
   /// return React.createElement('div',{className:'App'},React.createElement('h1',null,'My name is Rishav'))
  }
}

export default App;
