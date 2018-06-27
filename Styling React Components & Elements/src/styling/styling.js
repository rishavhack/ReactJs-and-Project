import React,{Component} from 'react';
import Radium from 'radium';
import './styling.css';

const styling =(props)=>{
	const style={
		'@media(min-width:500px)':{
			width:'450px'
		}
	}
	return(<div className='Person'>
		<h3 className={props.stylepropert}>Hi {props.name}</h3>
		</div>)
}

export default Radium(styling)