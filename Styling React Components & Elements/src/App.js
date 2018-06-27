import React, { Component } from 'react';
import logo from './logo.svg';
import Styling from './styling/styling';
import classes from './App.css';

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
    
    const style={
      backgroundColor :'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer',
    }
    let showValue = null;
    if(this.state.showDiv)
    {
      showValue = (<div>
              <Styling name={this.state.person[0].name}/>
        </div>)
      style.backgroundColor='blue';
    }
    return (
      <div className={classes.App}>
        <button style={style} onClick={this.toggle}>Toggle</button>
        {showValue}
        <Styling stylepropert={classes.red} name={this.state.person[1].name} />
      </div>
    );
  }
}

export default App;
