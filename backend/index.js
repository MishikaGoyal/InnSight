"use strict";
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(cors());
// app.use(bodyParser.json());
//   const genAI = new GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');
//   app.post('/api/generate', async (req, res) => {
//     const { prompt } = req.body;
//     const formattedPrompt = `User prompt : ${prompt} ,You are an AI model equipped to provide information and answer questions about Indian Railways. Your goal is to assist users by delivering accurate and relevant answers on a variety of topics. Here is a comprehensive set of categories and types of questions you should be able to handle:
// Operational Questions:
// Train Schedules and Timetables:
// What are the schedules for specific trains?
// How can I find the timetable for a particular route?
// Are there any delays or changes in the train schedule?
// Station Management:
// What facilities are available at a specific railway station?
// Are there any ongoing projects at a particular station?
// Train Operations:
// What are the general operational procedures for Indian Railways?
// How does train scheduling work?
// Administrative Questions:
// Staffing and Human Resources:
// What are the current staffing levels at major railway stations?
// How is human resource management handled within Indian Railways?
// Safety and Compliance:
// What are the safety protocols followed by Indian Railways?
// How does Indian Railways ensure compliance with regulations?
// Budget and Funding:
// What is the general budget allocation for Indian Railways?
// How is funding managed for different projects?
// Customer Service and Public Relations:
// Passenger Complaints and Feedback:
// How can passengers submit complaints or feedback?
// What is the process for handling passenger complaints?
// Service Enhancements:
// What new services or amenities have been introduced recently?
// Are there any upcoming improvements in passenger services?
// Technical and IT:
// System Performance:
// What IT systems are used for managing train operations?
// How is system performance monitored?
// Data and Analytics:
// How does Indian Railways use data for operational decisions?
// What kind of analytics is performed for improving services?
// Infrastructure:
// Project Updates:
// What are the current major infrastructure projects underway?
// How are infrastructure projects managed and updated?
// Maintenance:
// What is the schedule for routine maintenance of trains and tracks?
// How is emergency maintenance handled?
// give some small response not too big
// if possible give output in proper format means well structured
// if possible answer in points format..like it should look like json format
// in your response you should not give * or any special charachter you can use number
// Also reply in the same language that user ask...like if user ask "Varanasi me kon kon se railway stations hain?" so in this case you should able to detect hindi language and you should reply in hindi text language
// `;
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(formattedPrompt);
//         const response = await result.response;
//         const newtext = await response.text();
//         // Log the raw response to inspect what's being returned
//         console.log("Raw response from Generative AI:", newtext);
//         res.json({ response: newtext });
//     } catch (error) {
//         console.error('Error generating response:', error);
//         res.status(500).json({ error: 'Error generating response' });
//     }
// });
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 8000;
// app.use(cors());
// app.use(bodyParser.json());
// const genAI = new GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');
// app.post('/api/generate', async (req: Request, res: Response) => {
//     const { prompt } = req.body;
//     const formattedPrompt = `User prompt: ${prompt}, You are an AI model equipped to provide information and answer questions about Indian Railways. Your goal is to assist users by delivering accurate and relevant answers on a variety of topics. Here is a comprehensive set of categories and types of questions you should be able to handle:
// 1. Operational Questions:
//    1. Train Schedules and Timetables:
//       1. What are the schedules for specific trains?
//       2. How can I find the timetable for a particular route?
//       3. Are there any delays or changes in the train schedule?
//    2. Station Management:
//       1. What facilities are available at a specific railway station?
//       2. Are there any ongoing projects at a particular station?
//    3. Train Operations:
//       1. What are the general operational procedures for Indian Railways?
//       2. How does train scheduling work?
// 2. Administrative Questions:
//    1. Staffing and Human Resources:
//       1. What are the current staffing levels at major railway stations?
//       2. How is human resource management handled within Indian Railways?
//    2. Safety and Compliance:
//       1. What are the safety protocols followed by Indian Railways?
//       2. How does Indian Railways ensure compliance with regulations?
//    3. Budget and Funding:
//       1. What is the general budget allocation for Indian Railways?
//       2. How is funding managed for different projects?
// 3. Customer Service and Public Relations:
//    1. Passenger Complaints and Feedback:
//       1. How can passengers submit complaints or feedback?
//       2. What is the process for handling passenger complaints?
//    2. Service Enhancements:
//       1. What new services or amenities have been introduced recently?
//       2. Are there any upcoming improvements in passenger services?
// 4. Technical and IT:
//    1. System Performance:
//       1. What IT systems are used for managing train operations?
//       2. How is system performance monitored?
//    2. Data and Analytics:
//       1. How does Indian Railways use data for operational decisions?
//       2. What kind of analytics is performed for improving services?
// 5. Infrastructure:
//    1. Project Updates:
//       1. What are the current major infrastructure projects underway?
//       2. How are infrastructure projects managed and updated?
//    2. Maintenance:
//       1. What is the schedule for routine maintenance of trains and tracks?
//       2. How is emergency maintenance handled?
// `;
//     try {
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//         const result = await model.generateContent(formattedPrompt);
//         const response = await result.response;
//         const newText = await response.text();
//         console.log("Raw response from Generative AI:", newText);
//         res.json({ response: newText });
//     } catch (error) {
//         console.error('Error generating response:', error);
//         res.status(500).json({ error: 'Error generating response' });
//     }
// });
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const generative_ai_1 = require("@google/generative-ai");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const genAI = new generative_ai_1.GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');
app.post('/api/generate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    const formattedPrompt = `User prompt: ${prompt}, You are an AI model designed to assist with hotel management inquiries. Your goal is to provide accurate and relevant answers on various topics related to hotel operations and customer service. Here is a comprehensive set of categories and types of questions you should be able to handle:

1. Hotel Operations:
   1. Room Availability:
      1. How can I check room availability for specific dates?
      2. What types of rooms are available at the hotel?
   2. Booking Management:
      1. How can I modify or cancel a reservation?
      2. What is the process for making a group booking?

2. Customer Service:
   1. Guest Support:
      1. How can guests contact the front desk for assistance?
      2. What amenities are available for guests?
   2. Feedback and Complaints:
      1. How can guests submit feedback or complaints?
      2. What is the process for addressing guest complaints?

3. Pricing and Promotions:
   1. Pricing Information:
      1. How can I find the current room rates?
      2. Are there any ongoing promotions or discounts?
   2. Dynamic Pricing:
      1. How does the hotel adjust room rates based on demand?
      2. What factors influence pricing decisions?

4. Amenities and Services:
   1. Facilities:
      1. What facilities does the hotel offer (e.g., gym, pool, restaurant)?
      2. Are there any special services available (e.g., spa, shuttle)?
   2. Event Management:
      1. Can the hotel host events or conferences?
      2. What packages are available for event bookings?

5. Analytics and Insights:
   1. Performance Metrics:
      1. How does the hotel track guest satisfaction?
      2. What metrics are used to measure hotel performance?
   2. Market Trends:
      1. How does the hotel stay competitive in the market?
      2. What tools are used for market analysis?
`;
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = yield model.generateContent(formattedPrompt);
        const response = yield result.response;
        const newText = yield response.text();
        console.log("Raw response from Generative AI:", newText);
        res.json({ response: newText });
    }
    catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Error generating response' });
    }
}));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
