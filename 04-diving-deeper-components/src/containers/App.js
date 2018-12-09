import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {

  state = {
    persons:[
              {id:'1wdc',name:'Rishav',age:8},
              {id:'2csd',name:'Sri',age:9},
              {id:'3sa',name:'Hacker',age:4}
            ],
    showContent :false
  }

toggleHandler = () =>{
  const toggleValue = this.state.showContent
  this.setState({showContent : !toggleValue})
}
nameChangerHandler = (event,index) =>{
  const personindex = this.state.persons.findIndex(p =>{
    return p.id === index
  })
  const person = {...this.state.persons[personindex]}
  person.name = event.target.value
  const pers = [...this.state.persons]
  pers[personindex] = person
  this.setState({persons:pers})
}
deleteHandler = (index) =>{
  const person = [...this.state.persons];
  person.splice(index,1);
  this.setState({persons:person})
}
  render() {
  let per = null;
  if(this.state.showContent){
    per = <Persons persons={this.state.persons}
          clicked = {this.deleteHandler}
          changed = {this.nameChangerHandler}/>
  }


    return (
      <div className="App">
      <Cockpit 
      titleValue = {this.props.title}
        showContent={this.state.showContent}
        persons = {this.state.persons}
        clicked={this.toggleHandler}
        />
      {per}
      </div>
    );
  }
}

export default App;
