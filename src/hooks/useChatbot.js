import { useState, useRef, useEffect } from 'react';
import ActionTypes from '../actions/ActionTypes';
import TypingIndicator from '../components/TypingIndicator';
import botResponses from '../utils/botResponses';

const BOT_RESPONSE_DELAY = 2500;
const USER_TYPING_DELAY = 1500;


const useChatbot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(false);
    const [messages, setMessages] = useState([]); 
    const [inputValue, setInputValue] = useState('');
    const [botResponse, setBotResponse] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages([{role: ActionTypes.BOT, text: <TypingIndicator>...</TypingIndicator>}]);
        setTimeout(() => {
            setMessages(prevMessages => {
                const newMessages = prevMessages.slice(0, -1);
                const botResponse = {role: ActionTypes.BOT, text: 'Witaj! Jestem botem, w czym mogę Ci pomóc?'};
                newMessages.push(botResponse);
                return newMessages;
            });
        }, BOT_RESPONSE_DELAY); 
    }, []);

    const sendMessage = () => {
        setInputValue('');
        setMessages(prevMessages => [...prevMessages, {role: ActionTypes.USER, text: <TypingIndicator>...</TypingIndicator>}]);
        setTimeout(() => {
            setMessages(prevMessages => {
                const newMessages = prevMessages.slice(0, -1);
                const userResponse = {role: ActionTypes.USER, text: inputValue};
                newMessages.push(userResponse);
                setBotResponse(true);
                return newMessages;
            });
        }, USER_TYPING_DELAY);
    }

    useEffect(() => {   
        if (botResponse) {
            let userQuestion = messages[messages.length - 1].text;
            setMessages(prevMessages => [...prevMessages, {role: ActionTypes.BOT, text: <TypingIndicator>...</TypingIndicator>}]);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessages = prevMessages.slice(0, -1);
                    const userResponse = {role: ActionTypes.BOT, text: botResponses(userQuestion)};
                    newMessages.push(userResponse);
                    setBotResponse(false);
                    return newMessages;
                });
            }, 2500);
        }
    }, [botResponse]);

    return {
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
    };
};

export default useChatbot;