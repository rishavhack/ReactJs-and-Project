import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contion from './conditonal/contional';



class App extends Component {
  state  = {
    perosn:[{name:'Rishav',age:24},
            {name:'Saumya',age:'27'},
            {name:'Hack',age:'27'},
            ],
    showDiv : false

  }
  toggleDiv = () =>{
      const toggling = this.state.showDiv;
      this.setState({
        showDiv : !toggling
      });
  }
  showList = ()=>{
    const toggling = this.state.showDiv;
      this.setState({
        showDiv : !toggling
      });
  }
  deletePerson=(personIndex)=>{
    const person = this.state.perosn;
    person.splice(personIndex,1);
    this.setState({perosn:person})
  }
  render() {
    let per = null
    if(!this.state.showDiv)
    {
      per = (<div>
             /* <Contion name={this.state.perosn[0].name} />*/
            </div>)
    }
    let perosnlits = null
    if(!this.state.showDiv)
    {
        perosnlits = (<div>
          {this.state.perosn.map((lst,index) =>{
                      return <Contion name={lst.name} click={()=>this.deletePerson(index)}/>
                    })}
        </div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggleDiv}>Toggle</button>
        {this.state.showDiv===true ?
                <div>
                <Contion name={this.state.perosn[0].name} />
                <Contion name={this.state.perosn[1].name} />
                </div> : null
          }
          {per}
          <button onClick={this.showList}> List </button>
          {perosnlits}
      </div>
    );
  }
}

export default App;
