import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <div>
        
            <Header />
                <Outlet context={{user: "Hard"}}/>
            <Footer />
        
        </div>
    )
}

export default RootLayout