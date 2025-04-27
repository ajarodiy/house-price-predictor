from flask import Flask, request, jsonify
from flask_cors import CORS 
from active_model import predict_house_price

app = Flask(__name__)
CORS(app)

DEFAULT_FEATURES = {
    'area': 1000,
    'bedrooms': 2,
    'bathrooms': 1,
    'stories': 1,
    'mainroad': 1,
    'guestroom': 0,
    'basement': 0,
    'hotwaterheating': 0,
    'airconditioning': 1,
    'parking': 1,
    'prefarea': 0,
    'furnishingstatus': 1
}

@app.route('/')
def home():
    return "API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print("Received data:", data)
    try:
        features = [
            data.get('area', DEFAULT_FEATURES['area']),
            data.get('bedrooms', DEFAULT_FEATURES['bedrooms']),
            data.get('bathrooms', DEFAULT_FEATURES['bathrooms']),
            data.get('stories', DEFAULT_FEATURES['stories']),
            data.get('mainroad', DEFAULT_FEATURES['mainroad']),
            data.get('guestroom', DEFAULT_FEATURES['guestroom']),
            data.get('basement', DEFAULT_FEATURES['basement']),
            data.get('hotwaterheating', DEFAULT_FEATURES['hotwaterheating']),
            data.get('airconditioning', DEFAULT_FEATURES['airconditioning']),
            data.get('parking', DEFAULT_FEATURES['parking']),
            data.get('prefarea', DEFAULT_FEATURES['prefarea']),
            data.get('furnishingstatus', DEFAULT_FEATURES['furnishingstatus'])
        ]

        # Predict
        predicted_price = predict_house_price(features)
        response = {
            'predicted_price': round(predicted_price, 2)
        }
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    from os import environ
    port = int(environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
