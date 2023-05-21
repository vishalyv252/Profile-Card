import React from 'react'
import Card from './Images/bg-pattern-card.jpg'
import Avatar from "./Images/image-victor.jpg"

const Image = () => {
    return (
    <>
        <div className='relative h-40 w-96 smM:w-72'>
            <img src={Card} alt={"Card"} className='absolute z-10 w-full h-40 top-0 left-0 rounded-t-3xl' />
            <img src={Avatar} alt={"Avatar"} className='absolute z-20 w-16 h-16 rounded-full border-4 border-solid border-white top-HoldV left-HoldH smM:left-HoldMH' />
        </div>
    </>
    )
}

export default Image;