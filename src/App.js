import './App.css';
import Formulario from './Components/formulario';
import Login from './Components/LogIn';
import NavBar from './Components/navBar';
import Menu from './Components/Menu';
import Cards from './Components/cards';
import Image from './Components/imagepostheader';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Menu />} 
         />
       </Routes>
    </Router>
  );
}

export default App;
