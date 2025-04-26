import joblib
import numpy as np

# Load the model
model = joblib.load('models/linear_regression/regression_model.pkl')

def predict_house_price(features):
    """
    Predicts the house price based on input features.
    
    Parameters:
        features (list): List of features in the correct order.
    
    Returns:
        float: Predicted house price.
    """
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)[0]
    return prediction
