from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os
from functions import gemini_pro_response

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True)