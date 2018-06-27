import React, { Component } from 'react';
import logo from './logo.svg';
import Radium,{StyleRoot} from 'radium';
import Styling from './styling/styling';
import './App.css';

class App extends Component {
  state = {
    person:[{name:'Rishav'},
            {name:'Saumya'}],
    showDiv : false
  }
  toggle=()=>{
    const toggling = this.state.showDiv;
      this.setState({
        showDiv : !toggling
      });
  }
  render() {
    
    let classes=['red','bold'].join(' ');
    const style={
      backgroundColor :'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let showValue = null;
    if(this.state.showDiv)
    {
      showValue = (<div>
              <Styling name={this.state.person[0].name}/>
        </div>)
      style.backgroundColor='blue';
      style[':hover']={
        backgroundColor :'red',
        color:'green'
      }
    }
    return (
      <StyleRoot>
      <div className="App">
        <button style={style} onClick={this.toggle}>Toggle</button>
        {showValue}
        <Styling stylepropert={classes} name={this.state.person[1].name} />
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
