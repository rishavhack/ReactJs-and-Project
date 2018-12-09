import React from 'react';
import './Person.css';
import Radium from 'radium'

const person = (props) =>{
	const style = {
		'@media (min-width:500px)':{
			width:'450px'
		}
	}
	return (
			<div className="Person" style={style}>
				<p onClick={props.delete}>My name is {props.name} & age is {props.age}.The random number is {Math.floor(Math.random() * 80)}</p>
				<p>{props.children}</p>
				<input type="text" onChange={props.click} value={props.name}/>
			</div>
		)
}

export default Radium(person)