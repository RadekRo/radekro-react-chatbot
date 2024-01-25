import { useCallback, useEffect, useRef, useState } from 'react';
import chatBotIcon from './assets/chatbot-icon.png';
import sendMessageIcon from './assets/chatbot-send.png';

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

import TypingIndicator from './components/TypingIndicator';

import './Chatbot.css';

const potentialAnswers = ['Ty chuju złamany!', 'Spierdalaj!', 'Idź wal konia!', 
    'Popierdoliło Cię?', 'Zajrzyj do muszli', 'Ty kurwo Ty!', 'Ty chuju Ty!', 
    'Trzeba Cię ostatecznie rozpierdolić, bo się kurwo odradzasz!', 'Do mnie fikasz kutasie?',
    'Nie no zajebię Cię kurwa', 'Masz coś kurwa do mnie?', 'Liż mi jaja suko!', 'Weź Ty się pierdolnij w łeb', 'A Ty co? Duda kurwa?',
    'Nie no kurwa takiego chuja to ja jeszcze nie widziałem', 'Patrzyłeś w lustro ostatnio?', 'Żona na mieście chuju?', 'Lubisz widzę schylać się po mydło',
    ];

const ChatBot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(false);
    const [messages, setMessages] = useState([]); 
    const [inputValue, setInputValue] = useState('');
    const [botResponse, setBotResponse] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        setMessages([{role: 'bot', text: <TypingIndicator>...</TypingIndicator>}]);
        setTimeout(() => {
            setMessages(prevMessages => {
                const newMessages = prevMessages.slice(0, -1);
                const botResponse = {role: 'bot', text: 'Witaj! Jestem botem, w czym mogę Ci pomóc?'};
                newMessages.push(botResponse);
                return newMessages;
            });
        }, 2500); 
    }, []);

    const handleClick = () => {
        setChatbotVisible(!isChatbotVisible);
    };

    const sendMessage = () => {
        setMessages(prevMessages => [...prevMessages, {role: 'user', text: <TypingIndicator>...</TypingIndicator>}]);
        setTimeout(() => {
            setMessages(prevMessages => {
                const newMessages = prevMessages.slice(0, -1);
                const userResponse = {role: 'user', text: inputValue};
                newMessages.push(userResponse);
                setBotResponse(true);
                return newMessages;
            });
        }, 1500);
        setInputValue('')
    }

    useEffect(() => {   
        if (botResponse) {
            setMessages(prevMessages => [...prevMessages, {role: 'bot', text: <TypingIndicator>...</TypingIndicator>}]);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessages = prevMessages.slice(0, -1);
                    const userResponse = {role: 'bot', text: potentialAnswers[Math.floor(Math.random() * potentialAnswers.length)]};
                    newMessages.push(userResponse);
                    setBotResponse(false);
                    return newMessages;
                });
            }, 2500);
        }
    }, [botResponse]);

    const handleInputValue = useCallback((event) => { 
        setInputValue(event.target.value);
    }, []);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // prevent form submission and page reload
            sendMessage();
        }
    }, [sendMessage]);

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
                    <Footer>
                        <Input 
                            placeholder='Wpisz wiadomość' 
                            onChange={handleInputValue} 
                            value={inputValue} 
                            onKeyDown={handleKeyDown}
                        />
                        <SendButton onClick={sendMessage}>
                            <img src={sendMessageIcon} alt='chatbot icon' />
                        </SendButton>
                    </Footer>
                </ChatWindow>
        </>
    );
};

export default ChatBot;