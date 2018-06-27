import React, {Component} from 'react'

const cond = (props) =>{
	return(
		<div>
		<h3 onClick={props.click}>Hello {props.name}</h3>
		<input type="text" onChange={props.changes} value={props.name}/>
		</div>
		)
}

export default cond