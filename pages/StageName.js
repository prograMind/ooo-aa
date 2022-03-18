import React from "react"

export default function StageName (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>{props.children}</div>
        </div>
    )
}