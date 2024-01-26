import { useCallback, useEffect } from 'react';

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

import useChatbot from './hooks/useChatbot';

import './Chatbot.css';

const ChatBot = () => {
    const {
        isChatbotVisible,
        setChatbotVisible,
        messages,
        setMessages,
        inputValue,
        setInputValue,
        botResponse,
        setBotResponse,
        messagesEndRef,
        sendMessage
    } = useChatbot();

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleClick = () => {
        setChatbotVisible(!isChatbotVisible);
    };

    const handleInputValue = useCallback((event) => { 
        setInputValue(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
            event.preventDefault(); 
            sendMessage();
    }, [sendMessage]);

    const chatBotIcon = require('./assets/chatbot-icon.png');
    const sendMessageIcon = require('./assets/chatbot-send.png');

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
                            <ChatRow key={index} role={message.role}>
                                <Bubble role={message.role}>{message.text}</Bubble>
                            </ChatRow>
                        ))}
                        <div ref={messagesEndRef} />
                    </Container>
                    <form onSubmit={handleSubmit}>
                        <Footer>
                            <Input 
                                placeholder='Wpisz wiadomość' 
                                onChange={handleInputValue} 
                                value={inputValue} 
                            />
                            <SendButton onClick={sendMessage}>
                                <img src={sendMessageIcon} alt='chatbot icon' />
                            </SendButton>
                        </Footer>
                    </form>
                </ChatWindow>
        </>
    );
};

export default ChatBot;