import React, { Component } from 'react';
import '../App.css';
import Random from '../random/Random';

class StateButton extends Component
{
	state = {
		persons :[
			{name:'Rishav',age:24},
			{name:'Hacker',age:18},
		]
	};
	switch = ()=>{
		// this.state.persons[0].name='vines'; this is not work bcuse object is mutable
		//So we this.setState({})
		this.setState({
			persons :[
			{name:'Vinesh',age:24},
			{name:'Hacker',age:38},
		]
		});
	}
	render()
	{
		return(
				<div className="App">
					<button onClick={this.switch}>Switch name</button>
					<Random  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
					<Random  name={this.state.persons[1].name} age={this.state.persons[1].age}/>
				</div>
				);
	}
}

export default StateButton