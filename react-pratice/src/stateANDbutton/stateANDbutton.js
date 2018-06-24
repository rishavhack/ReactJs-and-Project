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
	nameChanger = (newName) =>{
		this.setState({
			persons :[
			{name:newName,age:24},
			{name:'Hacker',age:38},
		]
		});
	};
	twoway = (event) =>{
		this.setState({
			persons :[
			{name:'Love',age:24},
			{name:event.target.value,age:38},
		]
		});
	}
	render()
	{
		const styling = {
			backgroundColor:'White',
	      font:'inherit',
	      border:'1px solid blue',
	      padding:'8px',
	      cursor:'pointer'
		};
		return(
				<div className="App">
					<button onClick={this.switch} style={styling}>Switch name</button>
					<button onClick={this.nameChanger.bind(this,'RishavSrivastava')} style={styling}>Switch name</button>
					<button onClick={() =>this.nameChanger('RishuSrivastava')} style={styling}>Switch name</button>
					<Random  name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.nameChanger.bind(this,'Saumya')}/>
					<Random  name={this.state.persons[1].name} age={this.state.persons[1].age} twobinding={this.twoway}/>
				</div>
				);
	}
}

export default StateButton