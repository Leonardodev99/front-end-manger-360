// src/components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={`${process.env.PUBLIC_URL}/gestor360.png`} alt="gestor360" className="gestor360" />
      <p>Carregando...</p>
    </div>
  );
}

export default LoadingScreen;

