
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Registro from './Components/formulario'
import Menu from './Components/Menu'
import './CSSYLES/App.css'
import Vistas from './controladores/ScrollToTop'
import LogIn from './Components/LogIn';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Inventario from './Components/inventario';

function App() {
  return (
    <Router>
      <Vistas/>
      <Routes>
         <Route exact path="/" element={<LogIn/>}/>
         <Route exact path="/Registro" element={<Registro/>}/>
         <Route exact path="/Menu" element={<Menu/>}/>
         <Route exact path="/Aboutus" element={<Aboutus/>}/>
         <Route exact path="/Contact" element={<Contact/>}/>
         <Route exact path="/Profile" element={<Profile/>}/>
         <Route exact path="/inventario" element={<Inventario/>}/>
       </Routes>
    </Router>
  );
}

export default App;
