import {useRef, useState} from 'react'

const Timer = () => {

    const timeContainer = useRef(null)
    const [time, setTime] = useState(0)

    const start = () => {
        if(timeContainer.current) return
            timeContainer.current = setInterval(() => {
                setTime(prev => prev + 1)
        }, 1000)
    }
    const pause = () => {

    }
    const reset = () => {

    }
    return(

        <div className='flex justify-center mt-40'>
            <div className='space-x-5 space-y-10'>
                <p className='border rounded-lg p-10 w-full bg-violet-200'>Timer: {time}</p>

                
                <button className='bg-green-300 p-3 w-30 rounded-lg hover:bg-green-500 duration-200' onClick={start}>Start</button>
                <button className='bg-blue-300 p-3 w-30 rounded-lg hover:bg-blue-500 duration-200'>Pause</button>
                <button className='bg-red-300 p-3 w-30 rounded-lg hover:bg-red-500 duration-200'>Reset</button>
                
            </div>
        </div>

    )
}

export default Timer