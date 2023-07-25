import React from 'react'
import './style.css'
import Header from './Header'
import Cards from './Card'
import data from './data'

export default function App() {
    const card= data.map(item => {
        return(
            <Cards 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div className='wbody'>
            <Header />
            <div className='cards'>
                {card}
            </div>
        </div>
    )
}
