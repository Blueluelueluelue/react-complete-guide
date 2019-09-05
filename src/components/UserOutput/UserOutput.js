import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>{props.username}</p>
            <p>lorem epsum 2</p>
        </div>
    )
}

export default userOutput