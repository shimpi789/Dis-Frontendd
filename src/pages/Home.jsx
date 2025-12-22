// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">

      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <h1 className="brand">Disaster Info Platform</h1>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/guidelines">Guidelines</Link></li>
            <li><Link to="/Quiz">Quiz</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Stay Updated on Real-Time Disaster Information</h2>
          <p>
            Get live disaster news, safety guidelines, and location-based
            updates through interactive maps.
          </p>

          {/* CTA Buttons */}
          <div style={{ marginTop: "20px" }}>
            <Link to="/news" className="cta-button">
              📰 Latest News
            </Link>

            <Link
              to="/map"
              className="cta-button"
              style={{ marginLeft: "15px" }}
            >
              🗺️ Live Map
            </Link>

            <Link
              to="/guidelines"
              className="cta-button"
              style={{ marginLeft: "15px" }}
            >
              📘 Safety Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Platform Features</h2>

        <div className="features-grid">
          <div className="feature-item">
            <h3>📰 Disaster News</h3>
            <p>Real-time disaster-related news from verified sources.</p>
          </div>

          <div className="feature-item">
            <h3>🗺️ Live Map Tracking</h3>
            <p>View your current location and nearby disaster zones.</p>
          </div>

          <div className="feature-item">
            <h3>📘 Emergency Guidelines</h3>
            <p>Step-by-step instructions for earthquakes, floods, fires, etc.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Disaster Info Platform. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
