import React from 'react'
import Image from './Components/Image';
import Person from './Components/Person';
import Line from './Components/Line';
import Details from './Components/Details';

const App = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className='flex justify-center items-center rounded-3xl flex-col bg-white h-auto w-96 smX:w-72 smM:w-72'>
                    <Image />
                    <Person />
                    <Line />
                    <Details />
                </div>
            </div>
        </>
    )
}

export default App;