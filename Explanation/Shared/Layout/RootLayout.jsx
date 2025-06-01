import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <>
        
            <Header />
                <Outlet />
            <Footer />
        
        </>
    )
}

export default RootLayout