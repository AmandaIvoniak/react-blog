import styled from "styled-components";

interface ModalProps {
  open?: boolean;
}

export const Modal = styled.div<ModalProps>`
  display: ${props => props.open ? `block` : `none`}; 
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  .contentCard {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 8px;
  }
`;
