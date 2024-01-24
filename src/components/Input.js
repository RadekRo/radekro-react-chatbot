import styled from "styled-components";

const Input = styled.input`
    background-color: transparent;
    border: none;
    padding: 5px;
    color: #fff;
    font-size: 1rem;
    &::placeholder {
        color: #fff;
    }
    width: 100%;
    &:focus {
        outline: none;
        &::placeholder {
            color: transparent;
        }
    }
`;

export default Input;