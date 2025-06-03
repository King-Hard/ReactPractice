import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <div className='bg-gray-200 min-h-screen'>
        
            <Header />
                <Outlet context={{user: "Hard"}}/>
            <Footer />
        
        </div>
    )
}

export default RootLayout