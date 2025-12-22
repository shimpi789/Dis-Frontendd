// src/pages/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  // State for each input field
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic (e.g., send to backend)
    console.log("Form Submitted", { name, phoneNumber, email, password });
    
    // Clear the input fields by resetting state
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="background-container">
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        {/* Name Input */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Phone Number Input */}
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{10}"
          required
        />

        {/* Email Input */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button type="submit" className="login-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
