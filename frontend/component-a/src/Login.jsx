import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      alert('Login Success! Token: ' + res.data.token);
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br /><br />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <button className="login-button" onClick={login}>Login</button>
      <Link to="/register" className="register-link">
        Register
      </Link>
    </div>
  );
}
