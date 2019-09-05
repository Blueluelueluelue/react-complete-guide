import React, { useEffect, Fragment, useRef } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  const toggleButtonRef = useRef()

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    toggleButtonRef.current.click()
    return () => console.log('[Cockpit.js] Some Cleanup code')
  }, [])

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
    <Fragment>
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button
          ref={toggleButtonRef}
          className={btnClass}
          onClick={props.click}>Toggle Persons</button>
      </div>
      <h2>Hello</h2>
    </Fragment>
  )
}

export default Cockpit