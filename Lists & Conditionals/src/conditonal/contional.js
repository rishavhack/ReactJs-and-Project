import React, {Component} from 'react'

const cond = (props) =>{
	return(
		<div>
		<h3 onClick={props.click}>Hello {props.name}</h3>
		</div>
		)
}

export default cond