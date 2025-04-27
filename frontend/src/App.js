import React, { useState } from 'react';
import HousePriceForm from './components/HousePriceForm';
import PredictionResult from './components/PredictionResult';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (formData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://house-price-predictor-j1ic.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }
      
      const data = await response.json();
      setPrediction(data.predicted_price);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to get prediction. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <HousePriceForm onPredict={handlePredict} isLoading={isLoading} />
          <PredictionResult 
            prediction={prediction} 
            isLoading={isLoading} 
            error={error} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;