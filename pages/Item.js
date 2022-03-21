import React, { useState } from 'react'

export default function Item (props) {
    const [isDone, setIsDone] = useState(false)

    const handleClick = () => {
            setIsDone(!isDone)

    }

    return (
        <div>
            <input
            type="checkbox"
            id={props.item}
            name={props.item}
            disabled={props.disabled}
            checked={isDone}
            onChange={handleClick}
            />
            <label htmlFor={props.item}>{props.item}</label>
        </div>
    )
}

