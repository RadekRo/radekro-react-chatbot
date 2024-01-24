import { useState } from 'react';

import ChatOpenButton from './components/ChatOpenButton';
import ChatCloseButton from './components/ChatCloseButton';

import ChatWindow from './components/ChatWindow';  
import ChatHeader from './components/ChatHeader';

import './Chatbot.css';

const ChatBot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(true);

    const handleClick = () => {
        setChatbotVisible(!isChatbotVisible);
    };

    return (
        <>
                <ChatOpenButton open={isChatbotVisible} onClick={handleClick} theme={{color: 'white', backgroundColor: 'blue'}}>ch</ChatOpenButton>
                <ChatWindow open={isChatbotVisible}>
                    <ChatHeader>
                        <div>ChatBot Service</div>
                        <ChatCloseButton onClick={handleClick}>X</ChatCloseButton>
                    </ChatHeader>
                    <div className='bot-container'>
                        <div className='bot-message'>Bot:</div>
                        <div className="bot-message">Hello! How can I help you?</div>
                    </div>
                    <div className='user-container'>
                        <div className='user-message'>User:</div>
                        <div className="user-message">I am a new client.</div>
                    </div>
                </ChatWindow>
        </>
    );
};

export default ChatBot;