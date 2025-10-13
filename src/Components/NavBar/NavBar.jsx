import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import '../../../public/font/FontSimpsons.css';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/personajes" id='Text'>Personajes</Link></li>
            <li><Link to="/localizacion" id='Text'>Lugares</Link></li>
            <li><Link to="/episodios" id='Text'>Episodios</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar