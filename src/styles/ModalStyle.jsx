import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative; /* Add relative positioning */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: -40px;
  color: black;
  font-size: 10px;
  background: #eff168;
  border: none;
  cursor: pointer;
`;