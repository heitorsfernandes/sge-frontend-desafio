import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from '../styles/ModalStyle';

const Modal = ({ onClose, children }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;