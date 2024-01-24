import styled from "styled-components";

const ChatRow = styled.div`
    text-align: ${props => props.user ? 'right' : 'left'};
`;

export default ChatRow;