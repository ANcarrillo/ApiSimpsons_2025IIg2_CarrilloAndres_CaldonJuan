import React from 'react'
import LoHomer from '../../assets/LogoSimp.jpg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={LoHomer} alt="Face Homer" id='image-title' />
      </Link>

      <h1>The Simpsons</h1>
    </header>
  )
}

export default Header