import React from "react"

export default function Ternary() {

//    const isGoingOut = false

/*    let answer
    if (isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
*/
//    let answer = isGoingOut ? "Yes" : "No"

    const [isGoingOut, setIsGoingOut] = React.useState(true)

/*    function handleClick() {
        isGoingOut ?
        setIsGoingOut(prevState => prevState = false) :
        setIsGoingOut(prevState => prevState = true)
    }
*/

    function handleClick() {
        setIsGoingOut(prevState => !prevState)
    }

    return(
        <div>
            <h1>Do you feel like going out tonight?</h1>
            <center>
                <h1 onClick={handleClick}>
                    {isGoingOut ? "Yes" : "No"}
                </h1>
            </center>
        </div>
    )
}