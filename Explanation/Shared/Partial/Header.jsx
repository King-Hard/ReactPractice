import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
        
            <div className='flex justify-between'>
                <div>Header</div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
        
        </>
    )
}

export default Header