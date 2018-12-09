import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
        {id:'1sd',name:"Rishav",age:25},
        {id:'2fs',name:"Srivastava",age:65},
        {id:'3df',name:"Hacker",age:34}
      ],
      showContent : false
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
nameChangeHandler = (event,index) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === index
  })
  const person = {
    ...this.state.persons[personIndex]
  }
  person.name = event.target.value
  const updatePerons = [...this.state.persons];
  updatePerons[personIndex] = person
  this.setState({persons:updatePerons})
}
toggleHandler = () =>{
  const toggleValue = this.state.showContent
  this.setState({showContent : !toggleValue})
}
deleteHandler = (index) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === index
  })
  const person = this.state.persons;
  person.splice(personIndex,1);
  this.setState({persons:person})
}

  render() {
    const style = {
      backgroundColor : 'white',
      color:'blue',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer'
    }

    let person = null;
    if(this.state.showContent){
      person = (
        <div>
          {this.state.persons.map((person,index)=>{
              return <Person 
                          name={person.name} 
                          age={person.age} 
                          key={person.id} 
                          change={(event) => this.nameChangeHandler(event,person.id)} 
                          click={ () =>this.deleteHandler(person.id)}/>
          })}
          </div>
        )
    }

    return (
      <div className="App">
          <h1>Welcome in React World</h1>
          <button style={style} onClick={() => this.switchHandler('Python')}>Switch name</button>
          <button onClick={this.toggleHandler}>Toggle Button </button>
          {person}
      </div>
    );
  }
}

export default App;
