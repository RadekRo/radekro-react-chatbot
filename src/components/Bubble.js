import styled from "styled-components";

const Bubble = styled.div`
    margin: 5px 10px;
    padding: 10px;
    background-color: ${props => props.role === 'user' ? '#888' : '#333'};
    color: white;
    display: inline-block;
    font-size: 0.95rem;
    border-radius: 10px;
    max-width: 55%;
    word-wrap: break-word;
`;

export default Bubble;

