import React from 'react'

const validation = (props) => {
    return (
        <div>
            {props.len < 5 ? 
                <p>Length too short</p> :
                <p>Length long enough</p>
            }
        </div>
    )
}

export default validation
