import { useState } from 'react';
import chatBotIcon from './assets/chatbot-icon.png';

import OpenButton from './components/OpenButton';
import CloseButton from './components/CloseButton';

import ChatWindow from './components/ChatWindow';  
import ChatRow from './components/ChatRow';

import Header from './components/Header';
import Container from './components/Container';
import Bubble from './components/Bubble';
import Footer from './components/Footer';

import './Chatbot.css';

const ChatBot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(true);

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
                        <ChatRow user={false}>
                            <Bubble user={false}>Witaj, jestem automatycznym pomocnikiem. Wybierz, w czym mogę Ci pomóc?</Bubble>
                        </ChatRow>
                        <ChatRow user={true}>
                            <Bubble user={true}>A dziękuję Ci serdecznie, Czuwaj!</Bubble>
                        </ChatRow>
                    </Container>
                    <Footer>
                        <input type='text' placeholder='Wpisz wiadomość...' />
                        <button>Wyślij</button>
                    </Footer>
                </ChatWindow>
        </>
    );
};

export default ChatBot;