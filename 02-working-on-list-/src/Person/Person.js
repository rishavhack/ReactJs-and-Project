import React from 'react';
import './Person.css'

const person = (props) =>{
	return (
			<div className="Person">
				<p onClick={props.click}>My name is {props.name} and age is {props.age} and number is {Math.floor(Math.random() * 88)}</p>
				<p>{props.children}</p>
				<input type="text" onChange={props.change}/>
			</div>
		)
}


export default person