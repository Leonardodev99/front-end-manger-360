/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/LoginScreen.js
import React, { useState } from 'react';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    onLogin();
  };

  return (
    <div className="login-screen">
     <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="forgot-password">Esqueceu a sua senha?</a>
        <button onClick={handleLogin}>Entrar</button>
      </div>
      <div className="login-image">
      <img src={`${process.env.PUBLIC_URL}/gestao-empresarial.jpg`} alt="gestao-empresarial" className="gestao-empresarial" />
      </div>
    </div>
  );
}

export default LoginScreen;
