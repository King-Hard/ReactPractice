import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <>
        
            <div className='flex justify-center min-h-screen items-center text-3xl'>
                <div className='space-x-2'>
                    <p className='font-semibold text-5xl'>404</p>
                    <span>Page not found! Back to</span>

                    <Link to="/" className='text-blue-500 hover:underline'>Home Page</Link>
                </div>
            </div>

        </>
    )
}

export default NotFound