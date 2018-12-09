import React from 'react';
import './Cockpit.css'

const cockpit = (props) =>{
	const assignedClasses = [];
	const style = {
		backgroundColor : 'red'
	};
	if(props.showContent){
		style.backgroundColor = 'blue'
	}
	if(props.persons.length <= 2){
		assignedClasses.push('red');
	}
	if(props.persons.length <= 1){
		assignedClasses.push('bold');
	}
	return (
			<div className='Cockpit'>
				<h1>{props.titleValue}</h1>
				<p className={assignedClasses.join(' ')}>This is really work</p>
     			 <button style={style} onClick={props.clicked}>Toggle view</button>
			</div>
		)
}

export default cockpit