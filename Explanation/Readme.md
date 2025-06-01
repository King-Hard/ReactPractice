Step 1: Creating App and Main jsx file - check
App.jsx
Main.jsx

Step 2: Creating Folder Structure - check
Components
Shared
Partial
Layout

Step 3: Creating Components 
Header.jsx
Footer.jsx

Step 4: install react-router-dom

Step 5: Creating RootLayout, Importing Header and Footer, and Importing {Outlet}
import Header from '../Partial/Header'
import Footer from '../Partial/Footer'

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

Step 6: After installing react-roter-dom punta tayo sa Main.jsx setup tayo importing {BrowserReact} then add in StrickMode 
import { BrowserReact } from 'reacr-router-dom'

<StrickMode>
    <BrowserRouter>
        <App />
    <BrowserRouter>
</StrickMode>


Step 7: After setup in Main.jsx, sa App.jsx naman tayo import {Routes, Route}, import RootLayout, import NotFound, import Home, import About, import Contact and last Setup.
import {Routes, Route} from 'react-router-dom'
import RootLayout from './Shared/Layout/RootLayout'
import NotFound from './Components/NotFound'
import Home from './Components/HomeFolder/Home'
import About from './Components/AboutFolder/About'
import Contact from './Components/ContactFolder/Contact'

<Routes>
    <Route element='<RootLayout />'>
        <Route path='/' element={<Home />}/>
        <Route path='About' element={<Home />}/>
        <Route path='/' element={<Home />}/>
    </Route>

    <Route path='NotFound' element={<NotFound />}>
<Routes>
