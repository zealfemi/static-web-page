import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='header-content'>
                <img src='../mg-images/header.png' alt='header' className='header-image'/>
                <span className='header-title'>Meme Generator</span>
            </div>
            <span className='header-project'>React Course - Project 3</span> 
        </header>
    )
}