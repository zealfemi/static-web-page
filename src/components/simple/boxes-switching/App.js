/* eslint-disable no-unused-vars */
import React from "react"
import Box from "./Box"
import './styles.css'
import boxes from './boxes'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
    ))
    
    return(
        <main>
            {squareElements}
        </main>
    )
}