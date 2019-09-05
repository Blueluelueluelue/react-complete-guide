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
      showPersons: false
    }
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

  render() {
    let persons = null
    

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
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonHandler}
          />
          {persons}
      </div>
    );
  }  
}

export default App;
