import React from 'react';
import { HomeIcon } from 'lucide-react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <HomeIcon size={32} />
          <h1>House Price Estimator</h1>
        </div>
        <p className="tagline">Linear Regression Model Demo</p>
        <p className="subtitle">
          Experience machine learning in action: This demo uses a basic linear regression 
          model to estimate house prices based on property features
        </p>
      </div>
    </header>
  );
}

export default Header;