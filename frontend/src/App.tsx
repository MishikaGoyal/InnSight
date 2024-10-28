import { useState } from 'react';
import './App.css';
import CampaignManager from './components/campaign-manager';
import RevenueInsights from './components/revenue-insights';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing-page';
import ChatBot from "./screens/chatBot";
import { Toaster } from 'sonner';

function App() {
    const [prompt, setPrompt] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleSubmit = async (prompt: string) => { // Adjusted to accept prompt directly
        try {
            const res = await fetch('http://localhost:8000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='w-[99vw] h-screen'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/campaigns' element={<CampaignManager />} />
                    <Route path='/analytics' element={<RevenueInsights />} />
                </Routes>
                <ChatBot 
                    handleSubmit={handleSubmit}
                    prompt={prompt}
                    setPrompt={setPrompt}
                    response={response}
                />
                <Toaster />
            </BrowserRouter>
        </div>
    );
}

export default App;
