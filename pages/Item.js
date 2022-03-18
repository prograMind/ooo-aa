import React, { useState } from 'react'

export default function Item (props) {
    const [isDone, setIsDone] = useState(false)

    const handleClick = () => {
            setIsDone(!isDone)
    /* 
    zmapovat všechny itemy a zkontroluju že všechny item jsou checked
    když jsou checked tak setIsAllDone
    */
        
    //<TaskItem text=`Ahoj completed={true} disabled={false} onChange={()=> setIsDone(true)}` />

    // onChange={()=> {
    //     e.preventDefault(); ----- se deje tady v Checkboxu
    // ()=> setIsDone(true) ---- se deje v parent komponente
    // }}
    
    }

    return (
        <div>
            <input
            type="checkbox"
            id={props.item}
            name={props.item}
            checked={isDone}
            onChange={handleClick}
            />
            <label htmlFor={props.item}>{props.item}</label>
        </div>
    )
}

