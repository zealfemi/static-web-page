import React from 'react'

export default function State() {
    const [value, newValue] = React.useState(0)

    function dValue() {
        newValue(prevValue => prevValue - 1)
    }

    function iValue() {
        newValue(prevValue => prevValue + 1)
    }

    return(
        <div>
            <button onClick={dValue}>-</button>
            <h1>{value}</h1>
            <button onClick={iValue}>+</button>
        </div>
    )
}



/*
export default function State() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    

    function handleClick() {
        setIsImportant("No")
    }

    return(
        <div>
            <h1>Is state important to know?</h1>
            <h1 onClick={handleClick}>{isImportant}</h1>
        </div>
    )
}
*/