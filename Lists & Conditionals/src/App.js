import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contion from './conditonal/contional';



class App extends Component {
  state  = {
    perosn:[{id:'skj1',name:'Rishav',age:24},
            {id:'sdj12',name:'Saumya',age:'27'},
            {id:'sd',name:'Hack',age:'27'},
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
    //const person = this.state.perosn;
    const person = [...this.state.perosn];
    person.splice(personIndex,1);
    this.setState({perosn:person})
  }
  changeValue = (event,id)=>{
    const personIndex = this.state.perosn.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.perosn[personIndex]};
    person.name = event.target.value;
    const newperson = [...this.state.perosn];
    newperson[personIndex] = person
    this.setState({perosn:newperson})
  }
  render() {
    let per = null
    if(!this.state.showDiv)
    {
      per = (<div>
              <Contion name={this.state.perosn[0].name} />
            </div>)
    }
    let perosnlits = null
    if(!this.state.showDiv)
    {
        perosnlits = (<div>
          {this.state.perosn.map((lst,index) =>{
                      return <Contion name={lst.name} click={()=>this.deletePerson(index)} key={lst.id} 
                      changes={(event)=>this.changeValue(event,lst.id)}/>
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
