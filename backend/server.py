from flask import Flask, request, jsonify
from active_model import predict_house_price

app = Flask(__name__)

@app.route('/')
def home():
    return "API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        features = [
            data['area'],
            data['bedrooms'],
            data['bathrooms'],
            data['stories'],
            data['mainroad'],
            data['guestroom'],
            data['basement'],
            data['hotwaterheating'],
            data['airconditioning'],
            data['parking'],
            data['prefarea'],
            data['furnishingstatus']
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
    app.run(debug=True)
