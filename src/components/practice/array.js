import React from "react"

export default function Array() {
/*
    const thingsArray = ["Thing 1", "Thing 2"]
    const eachItem = thingsArray.map( (item) => <p key={item}>{item}</p> )
        
    function addItem() {
        const newItem = `<p>Thing ${thingsArray.length + 1}</p>`
        thingsArray.push(newItem)
        document.getElementById("items").innerHTML += newItem
    }
*/
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    const eachItem = thingsArray.map( (item) => <p key={item}>{item}</p> )

    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${thingsArray.length + 1}`]
        })
    }

    return(
        <div>
            <button onClick={addItem}>
                Add Item
            </button>
            <div id="items">
                {eachItem}
            </div>
        </div>
    )
}