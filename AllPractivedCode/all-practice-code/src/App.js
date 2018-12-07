import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
        {name:"Rishav",age:25},
        {name:"Srivastava",age:65},
        {name:"Hacker",age:34}
      ]
  }

switchHandler = (newName) =>{
  this.setState({
    persons:[
        {name:newName,age:25},
        {name:"Srivastava",age:65},
        {name:"Hacker",age:34}
      ]
  })
}
nameChangeHandler = (event) =>{
  this.setState({
    persons:[
        {name:"Rishav",age:25},
        {name:event.target.value,age:65},
        {name:"Hacker",age:34}
      ]
  })
  
}

  render() {
    const style = {
      backgroundColor : 'white',
      color:'blue',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer'
    }
    return (
      <div className="App">
          <h1>Welcome in React World</h1>
          <button style={style} onClick={() => this.switchHandler('Python')}>Switch name</button>
          <Person click={this.switchHandler.bind(this,'Python')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person change={this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies is Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
