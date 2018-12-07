import React from 'react';
import './Person.css';

const person = (props) =>{
	return (
			<div className="Person">
				<p onClick={props.click}>Hi My name is {props.name} and age is {props.age}. My favorite Number is {Math.floor(Math.random() * 8 )}</p>
				<p>{props.children}</p>
				<input type="text" onChange={props.change} value={props.name} />
			</div>
		)
}

export default person