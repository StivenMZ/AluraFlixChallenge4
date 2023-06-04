import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #2A7AE4;
  color: #FFFFFF;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Succes = ({ message, onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
    onClose(); // Llamar a la función onClose pasada como prop
  };

  return (
    <>
      {showPopup && (
        <PopupContainer>
          <PopupContent>
            <p>{message}</p>
            <Button onClick={handleAccept}>Aceptar</Button>
          </PopupContent>
        </PopupContainer>
      )}
    </>
  );
};

export default Succes;
