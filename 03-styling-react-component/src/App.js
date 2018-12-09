import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot}  from 'radium';


class App extends Component {

state = {
  persons : [
              {id:"1asc",name:"Rishav",age:88},
              {id:"2scd",name:"Srivastav ",age:28},
              {id:"3sdc",name:"hack",age:18}
            ],
  showContent : false
}
toggleHandler = () =>{
  const showCont = this.state.showContent;
  this.setState({showContent :!showCont})
}
nameChangeHandler = (event,index) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === index
  })
  const pers = {
    ...this.state.persons[personIndex]
  }
  pers.name = event.target.value
  const person = [...this.state.persons]
  person[personIndex] = pers
  this.setState({persons:person})

}
deleteHandler = (index) =>{
  const person = [...this.state.persons];
  person.splice(index,1);
  this.setState({persons:person})
}
  render() {
    const style = {
      backgroundColor : 'green',
      color:'white',
      font:'Inherit',
      cursor:'pointer',
      border:'1px solid green',
      ':hover':{
        backgroundColor:'red',
        color:'blue'
      }
    }
    let pers = null;
    if(this.state.showContent){
     pers = (
      <div>
          {this.state.persons.map((person,index)=>{
           return <Person key={person.id} name={person.name} age={person.age} click={(event) => this.nameChangeHandler(event,person.id)} delete={()=>this.deleteHandler(index)}/>
          })}
      </div>
      )
     style.backgroundColor = 'red'
    }
    const classes = [];
    if(this.state.persons.length >= 2){
      classes.push('red')
    }
    if(this.state.persons.length < 2){
      classes.push('bold')
    }
    return (
    <StyleRoot>
      <div className="App">
      <p className={classes.join(' ')}>This is working</p>
      <button style={style} onClick={this.toggleHandler}>Toggle Button</button>
      {pers}
      </div>
    </StyleRoot>
    );
  }
}

export default Radium(App);
