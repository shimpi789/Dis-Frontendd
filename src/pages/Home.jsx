// src/pages/Home.jsx

import Header from '../components/Header';
import Navbar from '../components/Navbar';

// src/pages/Home.jsx
// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <h1 className="brand">Disaster Info Platform</h1>
          
         <ul className="nav-links">
         <li><a href="#about">About</a></li>
         <li><a href="#features">Features</a></li>
         <li><a href="/login">Login</a></li> 
          </ul>


        </nav>
      </header>  

      <div className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2>Stay Updated on Real-Time Disaster Information</h2>
            <p>
              Access comprehensive disaster reports from reliable sources in real-time. Our platform provides up-to-date
              information to keep you safe and informed.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <h2>Platform Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Real-Time Updates</h3>
              <p>Get live alerts and updates on disasters happening across the globe.</p>
            </div>
            <div className="feature-item">
              <h3>Reliable Sources</h3>
              <p>Information is aggregated from trusted sources, ensuring accuracy.</p>
            </div>
            <div className="feature-item">
              <h3>Multi-Language Support</h3>
              <p>Access disaster information in multiple languages to cater to diverse communities.</p>
            </div>
          </div>
        </section>
      </div>

      

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We aim to provide a reliable platform for real-time disaster reporting, helping communities stay safe.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@disasterinfo.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Disaster Info Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
