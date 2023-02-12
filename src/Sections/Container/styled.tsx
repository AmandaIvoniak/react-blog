import styled from "styled-components";

export const Img = styled.img`
    height: 100%;
`;

export const Content = styled.div`
  width: auto;
  border-radius: 12px;
  max-width:1200px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`; 


export const Nav = styled.nav`
    height: 72px;
    background-color: #5a90af;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
        margin-bottom: 32px;

    svg{
      width:35px;
      height:35px;
      color:#335568;
      cursor:pointer;
    }
    h1{
      color: #335568;
    font-size: 32px;
    }



`;
