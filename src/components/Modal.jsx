import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;