import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <>
        
            <div className='flex justify-center min-h-screen items-center text-3xl'>
                <div className='space-x-2 space-y-5'>
                    <p className='text-center font-semibold text-8xl'>404</p>
                    <span>Page not found! Back to</span>
                    <Link to="/Home" className='text-blue-500 underline'>Home Page.</Link>
                </div>
            </div>
        
        </>
    )
}

export default NotFound