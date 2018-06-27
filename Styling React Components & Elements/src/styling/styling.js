import React,{Component} from 'react';
import classes from './styling.css';

const styling =(props)=>{
	
	return(<div className={classes.Person}>
		<h3 className={props.stylepropert}>Hi {props.name}</h3>
		</div>)
}

export default styling