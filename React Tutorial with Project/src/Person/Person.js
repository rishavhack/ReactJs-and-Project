import React from 'react';
import './Person.css'
const person = (props) => {
	return (
			<div className="Person"> 
			<p onClick={props.click}>I am {props.name} and I am {props.age} and {Math.floor(Math.random() *30)} years old!!</p>
			<p>{props.children}</p>
			<input type='text'  onChange={props.change} />
			</div>
			)
};


export default person;