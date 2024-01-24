import styled from "styled-components";

const ChatWindow = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.4);
    bottom: 1rem;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 1.5rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    width: 3rem;
    `;

ChatWindow.defaultProps = { 
    theme: { 
        color: "#fff", 
        backgroundColor: "#000" 
    } 
};

export default ChatWindow;