// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import '../styles/Header.css'
import logo from "../img/imagenes/get.png"

function Header() {
  return (
    <header className="header-container">
     <img src={logo} alt="Logo" />
      <ul className="list">
        <li className="list-item">
        <Link to="/">Inicio</Link>
        </li>
        <li className="list-item">
        <Link to="/quienes-somos">¿Quiénes somos?</Link>
        </li>
        <li className="list-item">
        <Link to="/contacto">contacto</Link>
        </li>
        <li className="list-item">
         <Link to="/administracion">Administracion</Link>
        </li>
        
      </ul>
   
        
   
    </header>
  );
}

export default Header;
