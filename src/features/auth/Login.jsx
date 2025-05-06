
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput/FormInput';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './authSlice'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rippedImage, setRippedImage] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth)

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  useEffect(() => {
    fetch('/src/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          // Add a cache-busting query param
          const imgUrl = data[randomIndex] + '?cb=' + Date.now();
          console.log("imgUrl", imgUrl);
          setRippedImage(imgUrl);
        }
      })
      .catch((err) => console.error('Error loading logos.json:', err));  
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest())
    console.log('Login with', { email, password });
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-text">
          <img src="/src/assets/images/icon-aquarius.png" alt="Company Logo" className="company-logo" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={handleInputChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleInputChange}
          />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Keep me logged in on this computer
            </label>
          </div>
          <button type="submit" className="primary-button">Login</button>

          <Link to="/forgot-password" className="forgot-link">
            I forgot my password
          </Link>

          <Link to="/register">
            <button type="button" className="secondary-button">Register</button>
          </Link>
        </form>
      </div>

      <div className="login-right">
        <div className="right-content">
        <h1>We've Rebranded</h1>
          <p>Community Living Made Easy</p>
          <button className="learn-more-button">Learn More</button>
          <div className="ripped-image-wrapper">
            {rippedImage && <img src={rippedImage} alt="Ripped Paper" className="ripped-image" />}
          </div>
          <p>Everything you need in a single platform.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
