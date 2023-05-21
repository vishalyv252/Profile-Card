import React from 'react'

const Details = () => {
    return (
    <>
        <div className='flex justify-center items-center w-64 m-2 p-2'>
            <div className='flex justify-around'>
                <div className='flex flex-col m-3 justify-center text-center'>
                    <div className='font-Kumbh font-semibold'>80K</div>
                    <div className='font-Kumbh text-xs'>Followers</div> 
                </div>
                <div className='flex flex-col m-3 justify-center text-center'>
                    <div className='font-Kumbh font-semibold'>803K</div>
                    <div className='font-Kumbh text-xs'>Likes</div>  
                </div>
                <div className='flex flex-col m-3 justify-center text-center'>
                    <div className='font-Kumbh font-semibold'>1.4K</div> 
                    <div className='font-Kumbh text-xs'>Photos</div> 
                </div>
            </div>
        </div>
    </>
    )
}

export default Details;