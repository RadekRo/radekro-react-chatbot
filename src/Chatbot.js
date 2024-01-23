import { useState } from 'react';
import './Chatbot.css';

const ChatBot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(true);

    const handleClick = () => {
        setChatbotVisible(!isChatbotVisible);
    };

    return (
        <>
            {isChatbotVisible ? (
                <div className="chat-bot" onClick={handleClick}>Chatbot</div>
            ) : (
                <div className="chat-bot main-window">
                    <div>
                        <button onClick={handleClick}>X</button>
                    </div>
                    <div className='bot-container'>
                        <div className='bot-message'>Bot:</div>
                        <div className="bot-message">Hello! How can I help you?</div>
                    </div>
                    <div className='user-container'>
                        <div className='user-message'>User:</div>
                        <div className="user-message">I am a new client.</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;