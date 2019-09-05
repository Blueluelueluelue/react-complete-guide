import React, { Component } from 'react';
import Validation from '../components/Validation/Validation'
import Char from '../components/Char/Char'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { text: '', unique: [] }
  }  

  textChangeHandler = (event) => {
    this.setState({
       text: event.target.value,
       unique: [...new Set(event.target.value.split(''))]
    })    
  }
  
  charClickHandler = (char) => {
    let regex = new RegExp(char, 'g')
    this.setState(state => ({
       text: state.text.replace(regex, ''),
       unique: state.unique.filter(v => v !== char)
    }))
  }

  render() {    
    setInterval(this.tick, 1000);
    return (
      <div className="App">
        <input placeholder="text" onChange={this.textChangeHandler} value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <Validation len={this.state.text.length} />
        {this.state.unique.map(c => {
          return <Char key={Math.random()} char={c} click={() => this.charClickHandler(c)}/>
        })}
      </div>
    );
  }  
}

export default App;
