import React, { useState } from 'react';
import './ChatBot.css';

interface ChatBotProps {
    handleSubmit: (prompt: string) => void; // Accepting a string now
    prompt: string;
    setPrompt: (prompt: string) => void;
    response: string; // Include response to display
}

const ChatBot: React.FC<ChatBotProps> = ({ handleSubmit, prompt, setPrompt, response }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(prompt); // Call the handleSubmit with the prompt
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-icon" onClick={toggleChatBot}>
                🤖
            </div>
            {isOpen && (
                <div className="chatbot-window card bg-dark text-white">
                    <button className="btn-close close-button" onClick={toggleChatBot}></button>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="prompt" className="form-label">Enter your prompt:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="prompt"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary submit">Submit</button>
                    </form>
                    {response && (
                        <div className="mt-4">
                            <h5>Response:</h5>
                            <div className=" dark p-3 rounded-3xl text-white">{response}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;
