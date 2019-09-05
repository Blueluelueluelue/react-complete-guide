import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: 'fasdv', name: 'Yolo', age: 10 },
        { id: 'afdsc', name: 'Polo', age: 20 },
        { id: 'afvcd', name: 'Holo', age: 30 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    }
    console.log('[App.js] constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id )
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState( { persons } )
  }

  deletePersonHandler = ( index ) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState( { persons } )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( { showPersons: !doesShow } )
  }

  toggleCockpitHandler = () => {    
    this.setState((prevState) => { 
      return { showCockpit: !prevState.showCockpit }
    })
  }

  render() {
    let persons = null
    console.log('[App.js] render')

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler}
          />
        </div>
      )
      
    }


    return (
      <div className={classes.App}>
        <button onClick={this.toggleCockpitHandler}>Toggle Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonHandler}
        /> : null}
        {persons}
      </div>
    );
  }  
}

export default App;
