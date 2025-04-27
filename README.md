# 🏡 House Price Predictor

A simple machine learning web app that predicts house prices based on property features.  
It demonstrates how a basic linear regression model can be trained, deployed, and used through a modern web interface.

---

## 🛠️ Key Technologies Used

- **Frontend:** React.js
- **Backend:** Flask (Python)
- **Machine Learning:** scikit-learn (Linear Regression)
- **Deployment:** Vercel (frontend), Render (backend)
- **Dataset:** [Housing Prices Dataset on Kaggle](https://www.kaggle.com/datasets/yasserh/housing-prices-dataset)

---

## 🌐 Live Demo

👉 [View Live Project Here](https://ajarodiy.me/house-price-predictor)

---

## ⚙️ Setup Instructions (Run Locally)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/house-price-predictor.git
cd house-price-predictor
```

### 2. Set up the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
pip install -r requirements.txt
python server.py
```
The backend will run on `http://localhost:5000`

### 3. Set up the Frontend

```bash
cd frontend
npm install
npm start
```
The frontend will run on `http://localhost:3000`

---

## ✨ Future Improvements
- Enhance the model with more advanced algorithms (e.g., Random Forests, XGBoost).
- Implement prediction history and analytics.