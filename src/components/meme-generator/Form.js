import React from 'react'
import memesData from './memesData'

export default function Form() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, newAllMemeImages] = React.useState(memesData.data.memes)
    
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNum = Math.floor(Math.random() * memesArray.length)    
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className='form'>
                <div className='inputs'>
                    <input type='text' placeholder='Top text'/>
                    <input type='text' placeholder='Bottom text'/>
                </div>
                <button onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
                <img src={meme.randomImage} alt="meme" className='meme-image'/>
            </div>


        </main>
    )
}