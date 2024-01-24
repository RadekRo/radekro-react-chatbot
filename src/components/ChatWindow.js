import styled from "styled-components";

const ChatWindow = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.color};
    font-size: 1em;
    height: 30rem;
    width: 20rem;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    transform: scale(${props => props.open ? 1 : 0});
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
`;

ChatWindow.defaultProps = { 
    theme: { 
        color: "#fff", 
        backgroundColor: "#000" 
    } 
};

export default ChatWindow;