import { Routes, Route } from "react-router-dom"
import RootLayout from "./Shared/Layout/RootLayout"
import Home from './Components/HomeFolder/Home'
import About from './Components/AboutFolder/About'
import Contact from './Components/ContactFolder/Contact'
import NotFound from './Components/NotFound'

const App = () => {
    return(

        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Route>

            <Route path="/NotFound" element={<NotFound />}/>
        </Routes>

    )
}

export default App