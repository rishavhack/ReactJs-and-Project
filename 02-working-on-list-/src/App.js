import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
  persons : [
            {name:"Rishav",age:87},
            {name:"Srivastava",age:17},
            {name:"Hacker",age:27},
            ],
  showContent : false
 }

switchHandler = (newName) =>{
  this.setState({
      persons : [
            {name:newName,age:87},
            {name:"Srivastava",age:17},
            {name:"Hacker",age:27},
            ]
  })
}
nameChangerHandler = (event) =>{
  this.setState({
      persons : [
            {name:'Rishav',age:87},
            {name:"Srivastava ",age:17},
            {name:event.target.value,age:27},
            ]
  })
}
toggleHandler = () =>{
    const content = this.state.showContent
    this.setState({showContent : !content})
}

  render() {
    const style = {
      backgroundColor:'White',
      color:'Blue',
      font:'Inherit'
    }
    let person = null;
    if(this.state.showContent){
      return (
        <div>
              <Person 
            click={this.switchHandler.bind('this','Hack')} 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>My Hobbie :Racing </Person>
            <Person 
            change={this.nameChangerHandler} 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
          )
    }
    return (
      <div className="App">
        <button style={style} onClick={() => this.switchHandler('Hacker')}>Switch Name</button>
        <button onClick={this.toggleHandler}>Switch Below Box</button>
          { this.state.showContent ? <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            </div> : null
          }
          {person}
      </div>
    );
  }
}

export default App;
