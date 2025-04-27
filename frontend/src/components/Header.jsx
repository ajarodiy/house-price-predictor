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
          Experience machine learning in action! This demo uses a basic linear regression 
          model trained on the{' '}
          <a 
            href="https://www.kaggle.com/datasets/yasserh/housing-prices-dataset" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dataset-link"
          >
            Housing Prices Dataset (Kaggle)
          </a>{' '}
          to estimate house prices based on property features.
        </p>
      </div>
    </header>
  );
}

export default Header;
