import RootLayout from "./Shared/Layout/RootLayout"
import { Routes, Route} from 'react-router-dom'
import Home from './Components/NavBar/HomePage/Home'
import About from './Components/NavBar/AboutPage/About'
import Contact from './Components/NavBar/ContactPage/Contact'
import Cars from './Components/NavBar/CarsPage/Cars'
import NotFound from "./Components/NotFound"

const App = () => {
  return(

    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Cars" element={<Cars />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    
  )
}

export default App