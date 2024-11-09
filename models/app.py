from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os
from functions import gemini_pro_response, suggest_optimal_price
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
import joblib 

app = Flask(__name__)
CORS(app)
####################################################################################################################
load_dotenv()
api_key = os.getenv("api_key")
genai.configure(api_key=api_key)

@app.route('/campaign', methods=['GET','POST'])
def campaign():
    duration = request.get_json()
    budget = request.get_json()
    special = request.get_json()

    if not duration or not budget:
        return jsonify({"error": "No data provided"}), 400

    prompt_header = '''
     Generate marketing campaign ideas specifically designed for a hotel looking to attract and engage guests. 
     
     Each campaign should consider the following parameters:
     Budget: Recommend campaign types, channels, and creative elements that align with a specified budget (low, medium, or high).
     Duration: Suggest campaign timelines (short, medium, or long-term) that maximize engagement within the specified period.
     Special Points: If specified, incorporate themes such as seasonal offers (e.g., holiday or weekend specials), local event promotions, or loyalty program incentives.
     
     For each campaign, provide:
     Campaign Theme: A brief description of the campaign's core idea.
     Target Audience: Suggested audience segments (e.g., loyalty members, local visitors, international tourists).
     Channels: Recommended channels (e.g., email, social media, SMS, hotel app) based on effectiveness and budget.
     Estimated ROI: Expected outcome in terms of engagement or bookings, based on budget and duration.
     Engagement Elements: Ideas for interactive elements (e.g., personalized offers, limited-time discounts, loyalty rewards) to increase conversions and guest satisfaction.
     
     Ensure that the campaign suggestions are innovative, align with hospitality industry trends, and are adaptable to budget constraints. 
     Provide 5 campaign ideas to give options for various approaches.
    '''

    prompt = prompt_header + f"\n\n My budget is {budget} for the duration of {duration} with special points {special}."
    ideas = gemini_pro_response(prompt)

    return jsonify(ideas)
##############################################################################################################################
model = joblib.load('model/xgboost_model.joblib')
scaler = joblib.load('model/scaler.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    base_price = data.get('base_price', 150)  # Default base price
    lead_time = data.get('lead_time', 0)
    arrival_date_month = data.get('arrival_date_month', 0)  # Numerical code
    arrival_date_week_number = data.get('arrival_date_week_number', 1)
    arrival_date_day_of_month = data.get('arrival_date_day_of_month', 1)
    adults = data.get('adults', 1)
    children = data.get('children', 0)
    total_of_special_requests = data.get('total_of_special_requests', 0)

    features = {
        'lead_time': lead_time,
        'arrival_date_month': arrival_date_month,
        'arrival_date_week_number': arrival_date_week_number,
        'arrival_date_day_of_month': arrival_date_day_of_month,
        'adults': adults,
        'children': children,
        'total_of_special_requests': total_of_special_requests,
        'adr': base_price
    }

    optimal_price_suggestions = suggest_optimal_price(base_price, features)

    return jsonify(optimal_price_suggestions)
##############################################################################################################################
if __name__ == '__main__':
    app.run(debug=True)