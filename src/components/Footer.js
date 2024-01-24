import styled from "styled-components";

const Footer = styled.div`
    background-color: ${({ bgcolor }) => bgcolor};
    color: ${({ fcolor }) => fcolor};
    border-radius: 0 0 10px 10px;
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: space-between;
`;

Footer.defaultProps = {
    fcolor: '#fff',
    bgcolor: '#555'
};

export default Footer;