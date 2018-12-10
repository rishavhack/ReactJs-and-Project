import React,{Component} from 'react';
import './Person.css'

class Person extends Component{
	constructor(props){
		super(props);
		console.log('[Person.js] Inside constructor',props);
	}
	componentWillMount(){
	    console.log('[Person.js] Inside componentWillMount')
	 }
	componentDidMount(){
		console.log('[Person.js] Inside componentDidMount')
	}
	

	render() {
		console.log('[Person.js] Inside render')
		return (
			<div className="Persons">
				<p onClick={this.props.click}>My Nmae is {this.props.name} and
				 age is {this.props.age} a& RAndom NUmber is {Math.floor(Math.random(5)*8)}</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.change} value={this.props.name} />
			</div>
		)
	}
}

export default Person