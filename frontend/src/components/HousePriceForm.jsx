import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import '../styles/HousePriceForm.css';

function HousePriceForm({ onPredict, isLoading }) {
  const [formData, setFormData] = useState({
    area: 1000,
    bedrooms: 2,
    bathrooms: 1,
    stories: 1,
    parking: 1,
    mainroad: 'yes',
    guestroom: 'no',
    basement: 'no',
    hotwaterheating: 'no',
    airconditioning: 'yes',
    prefarea: 'no',
    furnishingstatus: 'semi-furnished'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'area' || name === 'bedrooms' || name === 'bathrooms' || name === 'stories' || name === 'parking') {
      const numValue = parseInt(value);
      if (!isNaN(numValue) || value === '') {
        setFormData(prev => ({
          ...prev,
          [name]: value === '' ? '' : numValue
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transformedData = {
      ...formData,
      mainroad: formData.mainroad === 'yes' ? 1 : 0,
      guestroom: formData.guestroom === 'yes' ? 1 : 0,
      basement: formData.basement === 'yes' ? 1 : 0,
      hotwaterheating: formData.hotwaterheating === 'yes' ? 1 : 0,
      airconditioning: formData.airconditioning === 'yes' ? 1 : 0,
      prefarea: formData.prefarea === 'yes' ? 1 : 0,
      furnishingstatus: formData.furnishingstatus === 'furnished' ? 2 : formData.furnishingstatus === 'semi-furnished' ? 1 : 0
    };

    onPredict(transformedData);
  };

  return (
    <div className="form-container">
      <h2>Enter House Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <h3>Property Specifications</h3>
            
            <div className="input-group">
              <label htmlFor="area">Area (sq ft)</label>
              <input
                type="number"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                min="1"
              />
            </div>
            
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>
            
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="stories">Stories</label>
                <input
                  type="number"
                  id="stories"
                  name="stories"
                  value={formData.stories}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="parking">Parking</label>
                <input
                  type="number"
                  id="parking"
                  name="parking"
                  value={formData.parking}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <h3>Features & Amenities</h3>
            
            <div className="input-group">
              <label htmlFor="mainroad">Main Road</label>
              <select
                id="mainroad"
                name="mainroad"
                value={formData.mainroad}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="guestroom">Guest Room</label>
              <select
                id="guestroom"
                name="guestroom"
                value={formData.guestroom}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="basement">Basement</label>
              <select
                id="basement"
                name="basement"
                value={formData.basement}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="hotwaterheating">Hot Water Heating</label>
              <select
                id="hotwaterheating"
                name="hotwaterheating"
                value={formData.hotwaterheating}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="airconditioning">Air Conditioning</label>
              <select
                id="airconditioning"
                name="airconditioning"
                value={formData.airconditioning}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="prefarea">Preferred Area</label>
              <select
                id="prefarea"
                name="prefarea"
                value={formData.prefarea}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="furnishingstatus">Furnishing Status</label>
              <select
                id="furnishingstatus"
                name="furnishingstatus"
                value={formData.furnishingstatus}
                onChange={handleChange}
                required
              >
                <option value="furnished">Furnished</option>
                <option value="semi-furnished">Semi-Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className={`predict-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="button-text">Predicting</span>
              <span className="dots"><span>.</span><span>.</span><span>.</span></span>
            </>
          ) : (
            <>
              <span className="button-text">Predict Price</span>
              <ArrowRightIcon size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default HousePriceForm;