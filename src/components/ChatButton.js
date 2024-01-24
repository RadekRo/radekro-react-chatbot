import styled from 'styled-components';

const ChatButton = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: none;
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 1.5rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3rem;
`;

ChatButton.defaultProps = {
    theme: {
        color: 'white',
        backgroundColor: '#1e90ff'
    }
};

export default ChatButton;