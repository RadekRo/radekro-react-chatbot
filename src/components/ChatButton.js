import styled from 'styled-components';

const ChatButton = styled.button`
    background-color: #1e90ff;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    width: 3rem;
`;

ChatButton.defaultProps = {
    theme: {
        color: 'white'
    }
};

export default ChatButton;