import styled from 'styled-components';

const OpenButton = styled.button`
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
    transform: scale(${props => props.open ? 0 : 1});
    transition: transform 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

OpenButton.defaultProps = {
    theme: {
        color: '#fff',
        backgroundColor: '#000'
    }
};

export default OpenButton;