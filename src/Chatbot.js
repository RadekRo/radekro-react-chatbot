import { useState } from 'react';
import chatBotIcon from './assets/chatbot-icon.png';
import sendMessage from './assets/chatbot-send.png';

import OpenButton from './components/OpenButton';
import CloseButton from './components/CloseButton';
import SendButton from './components/SendButton';

import ChatWindow from './components/ChatWindow';  
import ChatRow from './components/ChatRow';

import Header from './components/Header';
import Container from './components/Container';
import Bubble from './components/Bubble';
import Footer from './components/Footer';
import Input from './components/Input';

import './Chatbot.css';

const ChatBot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(true);
    const [messages, setMessages] = useState([]); 

    const handleClick = () => {
        setChatbotVisible(!isChatbotVisible);
    };

    return (
        <>
                <OpenButton open={isChatbotVisible} onClick={handleClick} theme={{color: 'white', backgroundColor: '#555'}}>
                    <img src={chatBotIcon} alt='chatbot icon' />
                </OpenButton>
                <ChatWindow open={isChatbotVisible}>
                    <Header>
                        <div>ChatBot Service</div>
                        <CloseButton onClick={handleClick}>X</CloseButton>
                    </Header>
                    <Container>
                        {messages.map((message, index) => (
                            <ChatRow key={index} user={message.user}>
                                <Bubble user={message.user}>{message.text}</Bubble>
                            </ChatRow>
                        ))}
                    </Container>
                    <Footer>
                        <Input placeholder='Wpisz wiadomość' />
                        <SendButton><img src={sendMessage} alt='chatbot icon' /></SendButton>
                    </Footer>
                </ChatWindow>
        </>
    );
};

export default ChatBot;