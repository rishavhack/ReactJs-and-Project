import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
    {name:"Hack",age:23},
    {name:"Rishav",age:24},
    {name:"Ela",age:88},
    ],
    otherCase:'Something'
  }
  switchNameHandler = (newName) => {

    //Do't do this his.state.persons[0].name = "ridj"
    this.setState({
      persons : [
        {name:newName,age:23},
        {name:"Rishav srivstav",age:24},
        {name:"Ela desuza",age:88},
        ]
    })
    console.log(this.state)
  }

  nameChangerHandler = (event) =>{
    this.setState({
      persons : [
        {name:"Hack",age:23},
        {name:event.target.value,age:24},
        {name:"Ela desuza",age:88},
        ]
    })
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <h1>I am Hero </h1>
        <p>THis is working Bro </p>
        <button style={style} onClick={() => this.switchNameHandler('Papa')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          change={this.nameChangerHandler}
          click={this.switchNameHandler.bind(this,'Maa')}
          age={this.state.persons[1].age}>  My Hobbie : Racing
          </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div>
    );
  //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Testing'))
  }
}

export default App;
