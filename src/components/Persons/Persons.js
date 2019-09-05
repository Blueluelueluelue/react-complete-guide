import React, { Component } from 'react'
import Person from './Person/Person'


class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        console.log(nextProps, nextState)
        return nextProps.persons !== this.props.persons
    }
    render() {
        return this.props.persons.map( (person, index) => {
            return <Person 
                click={() => this.props.click(index)}
                name={person.name}
                age={person.age}
                key={person.id}                
                change={(event) => this.props.change(event, person.id)}
            />
        } )
    }
}

export default Persons