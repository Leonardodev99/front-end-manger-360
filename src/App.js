// src/App.js
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import AdminMenu from './components/AdminMenu';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulando 3 segundos de carregamento
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  }

  return <AdminMenu />;
}

export default App;
