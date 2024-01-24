import styled from 'styled-components';

const ChatButton = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid gray;
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 1.5rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3rem;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.4);
`;

ChatButton.defaultProps = {
    theme: {
        color: '#fff',
        backgroundColor: '#000'
    }
};

export default ChatButton;