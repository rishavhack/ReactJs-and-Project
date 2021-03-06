import React,{ PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
        constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor',props);
        }
        componentWillMount(){
            console.log('[Persons.js] Inside componentWillMount')
          }
          componentDidMount(){
            console.log('[Persons.js] Inside componentDidMount')
          }
          componentWillReceiveProps(nextProps){
                console.log('[Update Persons.js] Inside componentWillReceiveProps',nextProps)
        }
      //  shouldComponentUpdate(nextProps,nextState){
      //          console.log('[Update Persons.js] Inside shouldComponentUpdate',nextProps,nextState)
      //          return nextProps.persons !== this.props.persons || 
      //                  nextProps.changed !== this.props.changed || 
      //                  nextProps.clicked !== this.props.clicked
      //  }if you ae using PureComponent then don't use thisone
        componentWillUpdate(nextProps,nextState){
                console.log('[Update Persons.js] Inside componentWillUpdate',nextProps,nextState)
        }
        componentDidUpdate(){
                console.log('[Update Persons.js] Inside componentDidUpdate')
        }
	render() {
                console.log('[Persons.js] Inside render')
		return this.props.persons.map((person,index)=> {
         return <Person 
         	key={person.id} 
         	name={person.name} 
         	click={() =>this.props.clicked(index)} 
         	age={person.age} 
         	change={(event) => this.props.changed(event,person.id)} />
        })
		}
}

export default Persons;