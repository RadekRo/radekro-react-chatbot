import styled from "styled-components";

const Container = styled.div`

    background-color: #111;
    flex-grow: 1;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 20px;
    }
    &::-webkit-scrollbar-track {
        background: #999;
    }
    &::-webkit-scrollbar-thumb {
        background: #777;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #333;
    }
`;
export default Container;