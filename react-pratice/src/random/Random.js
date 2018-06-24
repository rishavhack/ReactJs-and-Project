import React from 'react';
const random = (props) =>
{
	return (
		<div>
		<h4>Hi My name is {props.name} and age is {props.age}</h4>
		{props.children}
		</div>
		)
}

export default random;