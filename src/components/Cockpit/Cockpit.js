import React, { useEffect } from 'react'
import Auxilliary from '../hoc/Auxilliary'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
  })
  const assignedClasses = []
  let btnClass = ''
  if (props.showPersons) {
      btnClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red )
  }
  if (props.persons.length <= 2) {
    assignedClasses.push( classes.bold )
  }    
  return (
    <Auxilliary>
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button
          className={btnClass}
          onClick={props.click}>Toggle Persons</button>
      </div>
      <h2>Hello</h2>
    </Auxilliary>
  )
}

export default Cockpit