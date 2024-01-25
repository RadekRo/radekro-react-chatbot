import { useState, useRef } from 'react';

const useChatbot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(false);
    const [messages, setMessages] = useState([]); 
    const [inputValue, setInputValue] = useState('');
    const [botResponse, setBotResponse] = useState(false);
    const messagesEndRef = useRef(null);

    return {
        isChatbotVisible,
        setChatbotVisible,
        messages,
        setMessages,
        inputValue,
        setInputValue,
        botResponse,
        setBotResponse,
        messagesEndRef
    };
};

export default useChatbot;