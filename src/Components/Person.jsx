import React from 'react'

const Person = () => {
    return (
    <>
        <div className='flex flex-col justify-center items-center w-64 m-2 p-2 mt-10'>
            <div>
                <p className='w-50 font-Kumbh text-Fixed text-right text-DarkCyan font-semibold'>Victor Crest<span className='font-Kumbh text-Fixed text-VDDB font-normal ml-2'>26</span></p> 
            </div>
            <div>
                <p className='w-20 font-Kumbh text-base text-center text-VDDB font-normal'>London</p>
            </div>
        </div>
    </>
    )
}

export default Person