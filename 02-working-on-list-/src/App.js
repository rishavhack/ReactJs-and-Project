import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
  persons : [
            {id:'1sa',name:"Rishav",age:87},
            {id:'2asd',name:"Srivastava",age:17},
            {id:'3fss',name:"Hacker",age:27},
            ],
  showContent : false,
  showList : true
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
nameChangHandler = (event,id) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id
  })
  const person = {
    ...this.state.persons[personIndex]
  }
  //const person = Object.assign({},this.state.persons[personIndex])
  //const person = this.state.persons[personIndex];
  person.name = event.target.value;
  const updatePersons = [...this.state.persons];
  updatePersons[personIndex] = person
  this.setState({ persons: updatePersons})
}
toggleHandler = () =>{
    const content = this.state.showContent
    const showListContent  = this.state.showList;
    this.setState({showContent : !content, showList:!showListContent})
}
deleteHandler = (personIndex) =>{
   // const person = this.state.persons;//This is wrong method it will get referende
    // Two method to copy
    //const person = this.state.persons.slice();
    const person = [...this.state.persons]
    person.splice(personIndex,1);
    this.setState({
      persons:person
    })
}

  render() {
    const style = {
      backgroundColor:'White',
      color:'Blue',
      font:'Inherit'
    }
    let person = null;
    if(this.state.showContent){
      person = (
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
    let personList = null;
    if(this.state.showList){
      personList = (
          <div>

          <h3>Below are the content of List</h3>
          <p>If u delete any thing it will throw an error </p>
          {this.state.persons.map((person,index)=>{
              return <Person click = {() => this.deleteHandler(index)}
                    key={person.id}
                    id={index+1}
                    name={person.name} 
                    age={person.age}
                    change = {(event) => this.nameChangHandler(event,person.id)}/>
          })}
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
          {personList}
      </div>
    );
  }
}

export default App;
