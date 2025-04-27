import React, { useEffect, useState } from 'react';
import { DollarSign, AlertCircle } from 'lucide-react';
import '../styles/PredictionResult.css';

function PredictionResult({ prediction, isLoading, error }) {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (prediction !== null && !isLoading) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [prediction, isLoading]);

  if (error) {
    return (
      <div className="prediction-container error">
        <AlertCircle size={32} />
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="prediction-container loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h2>Linear Regression in Progress</h2>
        <p>The machine learning model is analyzing the input features...</p>
        <p style={{ fontSize: '0.85rem', color: 'gray', marginTop: '10px' }}>
          If this is your first time clicking, the service may take 15–20 seconds to start. After that, it will respond immediately.
        </p>
      </div>
    );
  }
  

  if (prediction === null) {
    return (
        <div className="prediction-container empty">
            <DollarSign size={32} />
            <h2>Simple House Price Predictor</h2>
            <p>
            Enter property details above to estimate the price using a basic machine learning model.
            </p>
            <div className="model-info">
            <p className="info-text">
                Powered by Linear Regression — for educational use only.
            </p>
            </div>
        </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(prediction);

  return (
    <div className={`prediction-container result ${animate ? 'animate' : ''}`}>
      <div className="result-icon">
        <DollarSign size={32} />
      </div>
      <h2>Predicted House Price</h2>
      <div className="price">{formattedPrice}</div>
      <div className="model-explanation">
        <p className="disclaimer">
          Powered by a basic machine learning model (Linear Regression).
        </p>
        <p className="warning">
          This is for demo purposes only — actual prices may vary!
        </p>
      </div>
    </div>
  );  
}

export default PredictionResult;