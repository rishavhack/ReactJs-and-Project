import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
//import WithClass from '../hoc/WithClass';
class App extends PureComponent {
      constructor(props){
        super(props);
        console.log('[App.js] Inside constructor',props);
        this.state = {
            persons:[
                      {id:'1wdc',name:'Rishav',age:8},
                      {id:'2csd',name:'Sri',age:9},
                      {id:'3sa',name:'Hacker',age:4}
                    ],
            showContent :false
          };
      }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount')
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount')
  }
  //shouldComponentUpdate(nextProps,nextState){
 //   console.log('[Update App.js] Inside shouldComponentUpdate',nextProps,nextState)
  //  return nextState.persons !== this.state.persons ||
   //        nextState.showContent !== this.state.showContent; 
  //}  if you ae using PureComponent then don't use thisone
  componentWillUpdate(nextProps,nextState){
    console.log('[Update App.js] Inside componentWillUpdate',nextProps,nextState)
  }
  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate')
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
    console.log('[App.js] Inside Render')
  let per = null;
  if(this.state.showContent){
    per = <Persons persons={this.state.persons}
          clicked = {this.deleteHandler}
          changed = {this.nameChangerHandler}/>
  }
//<WithClass>
///WithClass>

    return (
      <div className="App">
    
      <button onClick={() =>{this.setState({showContent:true})}}>Show Person</button>
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
