import google.generativeai as genai
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
import joblib 


def removeSymbols(response):
    return response.strip().replace("*", '')

def gemini_pro_response(user_prompt):
    gemini_pro_model = genai.GenerativeModel("gemini-pro")
    response = gemini_pro_model.generate_content(user_prompt)
    return removeSymbols(response.text)

model = joblib.load('model/xgboost_model.joblib')
scaler = joblib.load('model/scaler.joblib')

def suggest_optimal_price(base_price, features):
    prices = np.arange(base_price - 50, base_price + 50, 5)  # Test prices around the base price
    bookings = []

    for price in prices:
        features['adr'] = price  # Update the price in features
        features_scaled = scaler.transform([features])
        predicted_bookings = model.predict(features_scaled)
        bookings.append((price, predicted_bookings[0]))

    return bookings