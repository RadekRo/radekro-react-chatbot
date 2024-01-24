import styled, { keyframes } from 'styled-components';

const TypingAnimation = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

const TypingIndicator = styled.div`
    animation: ${TypingAnimation} 1s linear infinite;
`;

export default TypingIndicator;