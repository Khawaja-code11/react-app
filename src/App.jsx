import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/services' element = {<Services />} />
        </Routes>
        </BrowserRouter> 
        </>
    )
}

export default App;