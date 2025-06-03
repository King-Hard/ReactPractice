import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>

            <div className='flex justify-between border rounded-2xl rounded-t-none p-10'>
                <div>Header</div>

                <div className='space-x-10'>
                    <Link to="/" className='hover:text-red-500'>Home</Link>
                    <Link to="/About" className='hover:text-violet-500'>About</Link>
                    <Link to="/Contact" className='hover:text-green-500'>Contact</Link>
                    <Link to="/Timer" className='hover:text-blue-500'>Timer</Link>
                    <Link to="/CounterApp" className='hover:text-yellow-500'>CounterApp</Link>
                </div>
            </div>
        
        </>
    )
}

export default Header