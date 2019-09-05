import React, { Component } from 'react'
import classes from './Person.module.css'
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        return (
            <div className={classes.Person}>
                <h2 onClick={this.props.click}>Hello My name is {this.props.name} and I am {this.props.age} years old.</h2>
                <input 
                ref={this.inputElementRef}
                onChange={this.props.change} 
                value={this.props.name}></input>
            </div>
        )
    }
}

export default Person