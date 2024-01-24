import styled from "styled-components";

const Header = styled.div`
    background-color: ${({ bgcolor }) => bgcolor};
    color: ${({ fcolor }) => fcolor};
    border-radius: 10px 10px 0 0;
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`;

Header.defaultProps = {
    fcolor: '#fff',
    bgcolor: '#555'
};

export default Header;
