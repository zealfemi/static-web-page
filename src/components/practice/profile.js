import React from 'react'

export default function Profile() {

    const [contact, setContact] = React.useState({
        firstName: "Zealot",
        lastName: "Femi",
        phone: "08057318018",
        email: "zealfemi@gmail.com",
        isFavorite: false
    })    

    const favBtn = contact.isFavorite ? "Remove from Favorites" : "Add to Favorite"
    const fav = contact.isFavorite ? "Added to Favorites" : "Not Favorite"

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        }) 
    }

    return( 
        <main>
            <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <button onClick={toggleFavorite}>{favBtn}</button>
            <p>{fav}</p>
        </main>
    )
}