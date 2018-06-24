import React from 'react';
import '../stateANDbutton/states.css';
const random = (props) =>
{
	return (
		<div className='stateStyle'>
		<h4 onClick={props.change}>Hi My name is {props.name} and age is {props.age}</h4>
		{props.children}
		<input type="text" onChange={props.twobinding}/>
		</div>
		)
}

export default random;