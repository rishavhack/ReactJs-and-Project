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
    
    let btnClass = null;
    let showValue = null;
    if(this.state.showDiv)
    {
      showValue = (<div>
              <Styling name={this.state.person[0].name}/>
        </div>)
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <button className={btnClass} onClick={this.toggle}>Toggle</button>
        {showValue}
        <Styling stylepropert={classes.red} name={this.state.person[1].name} />
      </div>
    );
  }
}

export default App;
