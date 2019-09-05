import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withClass from '../../hoc/withClass'
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
            <Fragment>
                <h2 onClick={this.props.click}>Hello My name is {this.props.name} and I am {this.props.age} years old.</h2>
                <input 
                ref={this.inputElementRef}
                onChange={this.props.change} 
                value={this.props.name}></input>
            </Fragment>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    change: PropTypes.func,
    click: PropTypes.func,
    age: PropTypes.number
}

export default withClass(Person, classes.Person)