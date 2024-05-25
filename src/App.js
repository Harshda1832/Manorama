import React from 'react'
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar.js';
import Homepage from './pages/Homepage.js';
import Categories from './pages/Categories.js';
import Sale from './pages/Sale.js';
import About from './pages/About.js';
// import DesignInfo from './pages/DesignInfo.js';
// import Error from './pages/Error.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Details from './pages/Details.js';


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/details' element={<Details/>}/>
      {/* <Route path='*' element={<Error/>}/> */}
      
    </Routes>
    </BrowserRouter>
    
    
    </>
    
  )
}

export default App
