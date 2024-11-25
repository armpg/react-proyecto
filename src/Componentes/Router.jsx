import {Routes, Route} from 'react-router-dom'
import Home from "../src/views/Home";
import AboutUs from '../src/views/AboutUs';
import Contact from 'views/Contact';
import Catalog from 'views/Catalog';
import Navbar from '../views/partials/Navbar';


const Router = () => {
    return (
        <div> 
            <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<AboutUs/>} />
        <Route path='/contactanos' element={<Contact/>} />
        <Route path='/catalogo' element={<Catalog/>} />

      </Routes>
        </div>
    )
}

export default Router;

