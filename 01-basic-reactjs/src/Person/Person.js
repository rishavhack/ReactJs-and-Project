import React from 'react';
import './Person.css'

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>{props.name} in your City. and age is {props.age}. The random number {Math.floor(Math.random() * 8)}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.name} />
		</div>
		)
}

export default person

