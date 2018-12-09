import React,{ Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	render() {
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