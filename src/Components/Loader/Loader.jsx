import React from 'react';
import Imfondo from '../../assets/7SJ1.gif';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-image-container">
          <img 
            src={Imfondo}
            alt="Cargando..." 
            className="loader-image"
          />
        </div>
        <div className="loader-text">Cargando...</div>
      </div>
    </div>
  );
};

export default Loader;
